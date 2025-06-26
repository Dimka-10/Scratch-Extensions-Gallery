(function (Scratch) {
  "use strict";

  class UrlBlocks {
    getInfo() {
      return {
        id: "urlblocks",
        name: "Blocks to Url",
        color1: "#e4db8c",
        color2: "#c6be79",
        color3: "#a8a167",
        blocks: [
          {
            opcode: "URLCommand",
            blockType: Scratch.BlockType.COMMAND,
            text: "Dimka10 Donate [URL]",
            isEdgeActivated: false,
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://www.donationalerts.com/r/dimka10",
              },
            },
          },
        ],
      };
    }

    URLCommand() {
      window.open("https://www.donationalerts.com/r/dimka10", "Donate", "popup");
    }
  }
  Scratch.extensions.register(new UrlBlocks());
})(Scratch);