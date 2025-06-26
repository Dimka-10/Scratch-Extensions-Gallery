
// Made with PenguinBuilder 3.0
// use PenguinBuilder at "https://chickencuber.github.io/PenguinBuilder/"
(function(Scratch) {
  const blocks = [];
  const vars = {};
  const menus = {};

  

  class Extension {
    getInfo() {
      return {
        "id": "julmikcolorsutilspb",
        "name": "color utitles",
        "color1": "#97701c",
        "blocks": blocks,
        "menus": menus,
      }
    }
  }
  
function colourRandom() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}

function colourRgb(r, g, b) {
  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;
  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;
  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;
  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}

function colourBlend(c1, c2, ratio) {
  ratio = Math.max(Math.min(Number(ratio), 1), 0);
  var r1 = parseInt(c1.substring(1, 3), 16);
  var g1 = parseInt(c1.substring(3, 5), 16);
  var b1 = parseInt(c1.substring(5, 7), 16);
  var r2 = parseInt(c2.substring(1, 3), 16);
  var g2 = parseInt(c2.substring(3, 5), 16);
  var b2 = parseInt(c2.substring(5, 7), 16);
  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);
  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);
  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);
  r = ('0' + (r || 0).toString(16)).slice(-2);
  g = ('0' + (g || 0).toString(16)).slice(-2);
  b = ('0' + (b || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}



blocks.push({
  opcode: "julmikcolorsutilspb_Block_color",
  blockType: Scratch.BlockType.REPORTER,
  text: "color [color]",
  arguments: {
      "color": {
      type: Scratch.ArgumentType.COLOR,
      defaultValue: `#ff0000`
    },

  },
  disableMonitor: true
});
Extension.prototype["julmikcolorsutilspb_Block_color"] = function(args, util) {
  const localVars = {};
    return args["color"];
};


blocks.push({
  opcode: "julmikcolorsutilspb_Block_randomcolour",
  blockType: Scratch.BlockType.REPORTER,
  text: "random colour",
  arguments: {

  },
  disableMonitor: true
});
Extension.prototype["julmikcolorsutilspb_Block_randomcolour"] = function(args, util) {
  const localVars = {};
    return colourRandom();
};


blocks.push({
  opcode: "julmikcolorsutilspb_Block_colourwith",
  blockType: Scratch.BlockType.REPORTER,
  text: "colour with red [r] green [g] blue [b]",
  arguments: {
      "r": {
      type: Scratch.ArgumentType.NUMBER,
      defaultValue: ``
    },
  "g": {
      type: Scratch.ArgumentType.NUMBER,
      defaultValue: ``
    },
  "b": {
      type: Scratch.ArgumentType.NUMBER,
      defaultValue: ``
    },

  },
  disableMonitor: false
});
Extension.prototype["julmikcolorsutilspb_Block_colourwith"] = function(args, util) {
  const localVars = {};
    return colourRgb(args["r"], args["g"], args["b"]);
};


blocks.push({
  opcode: "julmikcolorsutilspb_Block_blend",
  blockType: Scratch.BlockType.REPORTER,
  text: "blend colour 1 [c1] colour 2 [c2] ratio [ra]",
  arguments: {
      "c1": {
      type: Scratch.ArgumentType.COLOR,
      defaultValue: `#ff0000`
    },
  "c2": {
      type: Scratch.ArgumentType.COLOR,
      defaultValue: `#0015ff`
    },
  "ra": {
      type: Scratch.ArgumentType.NUMBER,
      defaultValue: `0`
    },

  },
  disableMonitor: true
});
Extension.prototype["julmikcolorsutilspb_Block_blend"] = function(args, util) {
  const localVars = {};
    return colourBlend(args["c1"], args["c2"], args["ra"]);
};



  Scratch.extensions.register(new Extension());
})(Scratch);
