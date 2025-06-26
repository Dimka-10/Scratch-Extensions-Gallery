// Name: Local Search
// ID: localSearchExtension
// Description: Extension for sending search queries to local server
// By: Your Name
// License: MIT

(function(Scratch) {
  'use strict';
  
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This extension must run in unsandboxed mode');
  }

  class LocalSearchExtension {
    constructor() {
      this.lastResponse = '';
    }
    
    getInfo() {
      return {
        id: 'localSearchExtension',
        name: 'Local Search',
        color1: '#4C97FF',
        color2: '#3373CC',
        blocks: [
          {
            opcode: 'search',
            blockType: Scratch.BlockType.REPORTER,
            text: 'search [SEARCH] with [SIZE] results',
            arguments: {
              SEARCH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'как готовить пончики'
              },
              SIZE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3
              }
            }
          },
          {
            opcode: 'getLastResponse',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get last search response'
          }
        ]
      };
    }
    
    async search(args) {
      const query = Scratch.Cast.toString(args.SEARCH);
      const numResults = Scratch.Cast.toNumber(args.SIZE);
      
      try {
        const response = await Scratch.fetch('http://127.0.0.1:5000/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: query,
            num_results: numResults
          })
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        this.lastResponse = JSON.stringify(data, null, 2);
        return this.lastResponse;
      } catch (error) {
        console.error('Search error:', error);
        this.lastResponse = `Error: ${error.message}`;
        return this.lastResponse;
      }
    }
    
    getLastResponse() {
      return this.lastResponse || 'No search performed yet';
    }
  }
  
  Scratch.extensions.register(new LocalSearchExtension());
})(Scratch);