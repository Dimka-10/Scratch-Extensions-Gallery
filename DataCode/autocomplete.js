// Name: Text Autocomplete
// ID: textAutocomplete
// Description: Simple text autocompletion from JSON suggestions
// By: Dimka10
// License: MIT

(function(Scratch) {
  'use strict';
  
  class TextAutocomplete {
    getInfo() {
      return {
        id: 'textAutocomplete',
        name: 'Text Autocomplete',
        color1: '#FF8C1A',
        color2: '#DB6E00',
        blocks: [
          {
            opcode: 'autocomplete',
            blockType: Scratch.BlockType.REPORTER,
            text: 'autocomplete [STARTTEXT] with [SUGGESTIONS]',
            arguments: {
              STARTTEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Как налить'
              },
              SUGGESTIONS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["Как налить воды", "Как налить сок", "Как варить суп"]'
              }
            }
          }
        ]
      };
    }
    
    autocomplete(args) {
      const startText = Scratch.Cast.toString(args.STARTTEXT);
      const jsonText = Scratch.Cast.toString(args.SUGGESTIONS);
      
      try {
        let suggestions = [];
        try {
          suggestions = JSON.parse(jsonText);
        } catch {
          suggestions = jsonText.split(',')
            .map(item => item.trim())
            .filter(item => item.length > 0);
        }
        
        const match = suggestions.find(suggestion => 
          String(suggestion).toLowerCase().startsWith(startText.toLowerCase())
        );
        
        return match || startText;
      } catch {
        return startText;
      }
    }
  }
  
  Scratch.extensions.register(new TextAutocomplete());
})(Scratch);