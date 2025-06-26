(function(Scratch) {
    'use strict';
    class site_placeholder {
      getInfo() {
        return {
          id: 'sitePlaceholder',
          name: 'Placeholder',
          blocks: [
            {
              blockType: Scratch.BlockType.LABEL,
              text: 'This is a placeholder do not use this!!'
            }
          ]
        };
      }
    }
    Scratch.extensions.register(new site_placeholder());
  })(Scratch);