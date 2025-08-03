// Name: Advanced PDF Viewer
// ID: AdvancedPDFViewerExt
// Description: Displaying PDF files
// By: Dimka10

(function(Scratch) {
  "use strict";
  
  if (!Scratch.extensions.unsandboxed) {
    throw new Error("PDF Viewer must run unsandboxed!");
  }

  const vm = Scratch.vm;
  const renderer = vm.renderer;

  class AdvancedPDFViewer {
    constructor() {
      this.pdfViewer = null;
      this.pdfContainer = null;
      this.isVisible = false;
      this.currentPDF = null;
      this.scaleX = 1;
      this.scaleY = 1;
      this.xPos = 0;
      this.yPos = 0;
      this.currentPage = 1;
      this.totalPages = 0;
      this.isInteractive = false;
    }

    getInfo() {
      return {
        id: "AdvancedPDFViewerExt",
        name: "Advanced PDF Viewer",
        color1: "#4285F4",
        color2: "#3367D6",
        color3: "#2A56C6",
        blocks: [
          {
            opcode: "loadPDF",
            blockType: Scratch.BlockType.COMMAND,
            text: "load PDF file [URL]",
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://example.com/document.pdf"
              }
            }
          },
          {
            opcode: "showPDF",
            blockType: Scratch.BlockType.COMMAND,
            text: "show PDF file"
          },
          {
            opcode: "hidePDF",
            blockType: Scratch.BlockType.COMMAND,
            text: "hide PDF file"
          },
          {
            opcode: "setPosition",
            blockType: Scratch.BlockType.COMMAND,
            text: "set position for PDF file x: [X] y: [Y]",
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          },
          {
            opcode: "setScale",
            blockType: Scratch.BlockType.COMMAND,
            text: "set PDF scale x: [X]% y: [Y]%",
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              }
            }
          },
          {
            opcode: "goToPage",
            blockType: Scratch.BlockType.COMMAND,
            text: "go to PDF page [PAGE]",
            arguments: {
              PAGE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              }
            }
          },
          "---",
          {
            opcode: "disableInteractivity",
            blockType: Scratch.BlockType.COMMAND,
            text: "disable PDF interactivity"
          },
          {
            opcode: "enableInteractivity",
            blockType: Scratch.BlockType.COMMAND,
            text: "enable PDF interactivity"
          },
          "---",
          {
            opcode: "getPDFWidth",
            blockType: Scratch.BlockType.REPORTER,
            text: "PDF width"
          },
          {
            opcode: "getPDFHeight",
            blockType: Scratch.BlockType.REPORTER,
            text: "PDF height"
          },
          {
            opcode: "getCurrentPage",
            blockType: Scratch.BlockType.REPORTER,
            text: "current PDF page"
          },
          {
            opcode: "getTotalPages",
            blockType: Scratch.BlockType.REPORTER,
            text: "total PDF pages"
          },
          {
            opcode: "isPDFVisible",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is PDF visible?"
          },
          {
            opcode: "isInteractive",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is PDF interactive?"
          }
        ],
        menus: {}
      };
    }

    loadPDF(args) {
      const url = Scratch.Cast.toString(args.URL);
      
      // Remove previous PDF if exists
      if (this.pdfContainer) {
        renderer.removeOverlay(this.pdfContainer);
        this.pdfContainer = null;
      }

      // Create main container
      this.pdfContainer = document.createElement('div');
      this.pdfContainer.style.position = 'absolute';
      this.pdfContainer.style.width = '600px';
      this.pdfContainer.style.height = '800px';
      this.pdfContainer.style.transformOrigin = '0 0';
      this.pdfContainer.style.overflow = 'hidden';
      
      // Create PDF viewer
      this.pdfViewer = document.createElement('iframe');
      this.pdfViewer.style.border = 'none';
      this.pdfViewer.style.width = '100%';
      this.pdfViewer.style.height = '100%';
      
      // Disable wheel scrolling
      this.pdfViewer.addEventListener('wheel', (e) => {
        if (!this.isInteractive) e.preventDefault();
      }, { passive: false });
      
      // Use PDF.js viewer with custom settings
      this.pdfViewer.src = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(url)}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`;
      
      this.pdfContainer.appendChild(this.pdfViewer);
      renderer.addOverlay(this.pdfContainer, 'stage');
      
      this.currentPDF = url;
      this.updatePositionAndScale();
      this.disableInteractivity(); // Disable by default
      
      // Hide by default
      this.pdfContainer.style.display = 'none';
      this.isVisible = false;
      
      // Listen for PDF.js messages
      window.addEventListener('message', this.handlePDFMessage.bind(this));
    }

    handlePDFMessage(event) {
      if (event.origin !== 'https://mozilla.github.io') return;
      
      try {
        const message = JSON.parse(event.data);
        if (message.type === 'pagecount') {
          this.totalPages = message.value;
        } else if (message.type === 'pagenumber') {
          this.currentPage = message.value;
        }
      } catch (e) {
        console.error('Error handling PDF message:', e);
      }
    }

    showPDF() {
      if (this.pdfContainer) {
        this.pdfContainer.style.display = 'block';
        this.isVisible = true;
      }
    }

    hidePDF() {
      if (this.pdfContainer) {
        this.pdfContainer.style.display = 'none';
        this.isVisible = false;
      }
    }

    setPosition(args) {
      this.xPos = Scratch.Cast.toNumber(args.X);
      this.yPos = Scratch.Cast.toNumber(args.Y);
      this.updatePositionAndScale();
    }

    setScale(args) {
      this.scaleX = Scratch.Cast.toNumber(args.X) / 100;
      this.scaleY = Scratch.Cast.toNumber(args.Y) / 100;
      this.updatePositionAndScale();
    }

    updatePositionAndScale() {
      if (this.pdfContainer) {
        this.pdfContainer.style.transform = `translate(${this.xPos}px, ${this.yPos}px) scale(${this.scaleX}, ${this.scaleY})`;
      }
    }

    goToPage(args) {
      if (this.pdfViewer && this.totalPages > 0) {
        const page = Math.min(Math.max(1, Scratch.Cast.toNumber(args.PAGE)), this.totalPages);
        this.pdfViewer.contentWindow.postMessage(JSON.stringify({
          type: 'page',
          value: page
        }), 'https://mozilla.github.io');
      }
    }

    disableInteractivity() {
      if (this.pdfViewer) {
        this.pdfViewer.style.pointerEvents = 'none';
        this.isInteractive = false;
        
        // Additional measures to prevent interaction
        this.pdfViewer.setAttribute('sandbox', 'allow-scripts allow-same-origin');
        this.pdfViewer.contentWindow.postMessage(JSON.stringify({
          type: 'disableInteractivity',
          value: true
        }), 'https://mozilla.github.io');
      }
    }

    enableInteractivity() {
      if (this.pdfViewer) {
        this.pdfViewer.style.pointerEvents = 'auto';
        this.isInteractive = true;
        
        // Restore interactivity
        this.pdfViewer.removeAttribute('sandbox');
        this.pdfViewer.contentWindow.postMessage(JSON.stringify({
          type: 'disableInteractivity',
          value: false
        }), 'https://mozilla.github.io');
      }
    }

    getPDFWidth() {
      if (!this.pdfContainer) return 0;
      return this.pdfContainer.offsetWidth * this.scaleX;
    }

    getPDFHeight() {
      if (!this.pdfContainer) return 0;
      return this.pdfContainer.offsetHeight * this.scaleY;
    }

    getCurrentPage() {
      return this.currentPage;
    }

    getTotalPages() {
      return this.totalPages;
    }

    isPDFVisible() {
      return this.isVisible;
    }

    isInteractive() {
      return this.isInteractive;
    }
  }

  Scratch.extensions.register(new AdvancedPDFViewer());
})(Scratch);