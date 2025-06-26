
// Made with PenguinBuilder 3.0
// use PenguinBuilder at "https://chickencuber.github.io/PenguinBuilder/"
(function(Scratch) {
  const blocks = [];
  const vars = {};
  const menus = {};

  

  class Extension {
    getInfo() {
      return {
        "id": "jmunsandboxdetect",
        "name": "Unsandboxed Detctor",
        "color1": "#0088ff",
        "blocks": blocks,
        "menus": menus,
      }
    }
  }
  
blocks.push({
  opcode: "jmunsandboxdetect_Block_isunsandboxed",
  blockType: Scratch.BlockType.BOOLEAN,
  text: "is unsandboxed?",
  arguments: {

  },
  disableMonitor: false
});
Extension.prototype["jmunsandboxdetect_Block_isunsandboxed"] = function(args, util) {
  const localVars = {};
    return Scratch.extensions.unsandboxed ? true : false;
};



  Scratch.extensions.register(new Extension());
})(Scratch);
