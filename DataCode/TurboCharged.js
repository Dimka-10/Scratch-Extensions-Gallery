/**!
 * v9.3
 * Idea by LilyMakesThings.
 * XML Injection based on Xeltallivs and LilyMakesThings XML Injectors.
 * Smooshed by 0znzw
 * 
 * Color Change Attempt also by Lily, 0znzw for the XML.
 * 
 * Licensed under MIT license.
 * 
 * Extensions used:
 * Text+ (by CST1229)
 * Base (by TrueFantom)
 * Bitwise (by TrueFantom)
 * BigInt (by SkyHigh173)
 * Math (by TrueFantom)
 * Cast (by Lily aka LilyMakesThings)
 * More Comparisons (by NOname-awa)
 * Tween (by JeremyGamer13)
 * High Precision (by Qxsck)
 * More motion (by NamelessCat aka NexusKitten)
 * Clones+ (by Lily aka LilyMakesThings)
 * Sensing+ (by ObviousAlexC)
 * 
 * 
 * Lily: https://scratch.mit.edu/users/LilyMakesThings/
 * 0znzw: https://scratch.mit.edu/users/0znzw
 * Xeltalliv: https://github.com/Xeltalliv
 * CST1229: https://scratch.mit.edu/users/CST1229/
 * Skyhigh173: https://github.com/SkyHigh173
 * TrueFantom: https://scratch.mit.edu/users/TrueFantom/
 * JeremyGamer13: https://scratch.mit.edu/users/JeremyGamer13/
 * NOname-awa: https://github.com/NOname-awa
 * Qxsck: https://github.com/qxsck
 * NamelessCat: https://scratch.mit.edu/users/NamelessCat/
 * ObviousAlexC: https://scratch.mit.edu/users/pinksheep2917/
 * 
 * Turbowarp: https://turbowarp.org/
 * Extension gallery: https://extensions.turbowarp.org/
 * Turbowarp Extension Github: https://github.com/Turbowarp/extensions
 * 
 */
(function(Scratch) {'use strict';globalThis.Scratch = Scratch;
// THIS WILL NOT ERROR IN THE ACTUAL CODE, TS IS BUGGIN MAN
const ScratchBlocksClone_Internal = {
    Colours: {"motion":{"primary":"#4C97FF","secondary":"#4280D7","tertiary":"#3373CC"},"looks":{"primary":"#9966FF","secondary":"#855CD6","tertiary":"#774DCB"},"sounds":{"primary":"#CF63CF","secondary":"#C94FC9","tertiary":"#BD42BD"},"control":{"primary":"#FFAB19","secondary":"#EC9C13","tertiary":"#CF8B17"},"event":{"primary":"#FFBF00","secondary":"#E6AC00","tertiary":"#CC9900"},"sensing":{"primary":"#5CB1D6","secondary":"#47A8D1","tertiary":"#2E8EB8"},"pen":{"primary":"#0fBD8C","secondary":"#0DA57A","tertiary":"#0B8E69"},"operators":{"primary":"#59C059","secondary":"#46B946","tertiary":"#389438"},"data":{"primary":"#FF8C1A","secondary":"#FF8000","tertiary":"#DB6E00"},"data_lists":{"primary":"#FF661A","secondary":"#FF5500","tertiary":"#E64D00"},"more":{"primary":"#FF6680","secondary":"#FF4D6A","tertiary":"#FF3355"},"text":"#575E75","workspace":"#F9F9F9","toolboxHover":"#4C97FF","toolboxSelected":"#E9EEF2","toolboxText":"#575E75","toolbox":"#FFFFFF","flyout":"#F9F9F9","scrollbar":"#CECDCE","scrollbarHover":"#CECDCE","textField":"#FFFFFF","insertionMarker":"#000000","insertionMarkerOpacity":0.2,"dragShadowOpacity":0.6,"stackGlow":"#FFF200","stackGlowSize":4,"stackGlowOpacity":1,"replacementGlow":"#FFFFFF","replacementGlowSize":2,"replacementGlowOpacity":1,"colourPickerStroke":"#FFFFFF","fieldShadow":"rgba(255, 255, 255, 0.3)","dropDownShadow":"rgba(0, 0, 0, .3)","numPadBackground":"#547AB2","numPadBorder":"#435F91","numPadActiveBackground":"#435F91","numPadText":"white","valueReportBackground":"#FFFFFF","valueReportBorder":"#AAAAAA"},
    ScratchMsgs: {
        translate: function(e){ return e }
    },
    Msg: JSON.parse(`{"CONTROL_FOREVER":"forever","CONTROL_REPEAT":"repeat %1","CONTROL_IF":"if %1 then","CONTROL_ELSE":"else","CONTROL_STOP":"stop","CONTROL_STOP_ALL":"all","CONTROL_STOP_THIS":"this script","CONTROL_STOP_OTHER":"other scripts in sprite","CONTROL_WAIT":"wait %1 seconds","CONTROL_WAITUNTIL":"wait until %1","CONTROL_REPEATUNTIL":"repeat until %1","CONTROL_WHILE":"while %1","CONTROL_FOREACH":"for each %1 in %2","CONTROL_STARTASCLONE":"when I start as a clone","CONTROL_CREATECLONEOF":"create clone of %1","CONTROL_CREATECLONEOF_MYSELF":"myself","CONTROL_DELETETHISCLONE":"delete this clone","CONTROL_COUNTER":"counter","CONTROL_INCRCOUNTER":"increment counter","CONTROL_CLEARCOUNTER":"clear counter","CONTROL_ALLATONCE":"all at once","DATA_SETVARIABLETO":"set %1 to %2","DATA_CHANGEVARIABLEBY":"change %1 by %2","DATA_SHOWVARIABLE":"show variable %1","DATA_HIDEVARIABLE":"hide variable %1","DATA_ADDTOLIST":"add %1 to %2","DATA_DELETEOFLIST":"delete %1 of %2","DATA_DELETEALLOFLIST":"delete all of %1","DATA_INSERTATLIST":"insert %1 at %2 of %3","DATA_REPLACEITEMOFLIST":"replace item %1 of %2 with %3","DATA_ITEMOFLIST":"item %1 of %2","DATA_ITEMNUMOFLIST":"item # of %1 in %2","DATA_LENGTHOFLIST":"length of %1","DATA_LISTCONTAINSITEM":"%1 contains %2?","DATA_SHOWLIST":"show list %1","DATA_HIDELIST":"hide list %1","DATA_INDEX_ALL":"all","DATA_INDEX_LAST":"last","DATA_INDEX_RANDOM":"random","EVENT_WHENFLAGCLICKED":"when %1 clicked","EVENT_WHENTHISSPRITECLICKED":"when this sprite clicked","EVENT_WHENSTAGECLICKED":"when stage clicked","EVENT_WHENTOUCHINGOBJECT":"when this sprite touches %1","EVENT_WHENBROADCASTRECEIVED":"when I receive %1","EVENT_WHENBACKDROPSWITCHESTO":"when backdrop switches to %1","EVENT_WHENGREATERTHAN":"when %1 > %2","EVENT_WHENGREATERTHAN_TIMER":"timer","EVENT_WHENGREATERTHAN_LOUDNESS":"loudness","EVENT_BROADCAST":"broadcast %1","EVENT_BROADCASTANDWAIT":"broadcast %1 and wait","EVENT_WHENKEYPRESSED":"when %1 key pressed","EVENT_WHENKEYPRESSED_SPACE":"space","EVENT_WHENKEYPRESSED_LEFT":"left arrow","EVENT_WHENKEYPRESSED_RIGHT":"right arrow","EVENT_WHENKEYPRESSED_DOWN":"down arrow","EVENT_WHENKEYPRESSED_UP":"up arrow","EVENT_WHENKEYPRESSED_ANY":"any","LOOKS_SAYFORSECS":"say %1 for %2 seconds","LOOKS_SAY":"say %1","LOOKS_HELLO":"Hello!","LOOKS_THINKFORSECS":"think %1 for %2 seconds","LOOKS_THINK":"think %1","LOOKS_HMM":"Hmm...","LOOKS_SHOW":"show","LOOKS_HIDE":"hide","LOOKS_HIDEALLSPRITES":"hide all sprites","LOOKS_EFFECT_COLOR":"color","LOOKS_EFFECT_FISHEYE":"fisheye","LOOKS_EFFECT_WHIRL":"whirl","LOOKS_EFFECT_PIXELATE":"pixelate","LOOKS_EFFECT_MOSAIC":"mosaic","LOOKS_EFFECT_BRIGHTNESS":"brightness","LOOKS_EFFECT_GHOST":"ghost","LOOKS_CHANGEEFFECTBY":"change %1 effect by %2","LOOKS_SETEFFECTTO":"set %1 effect to %2","LOOKS_CLEARGRAPHICEFFECTS":"clear graphic effects","LOOKS_CHANGESIZEBY":"change size by %1","LOOKS_SETSIZETO":"set size to %1 %","LOOKS_SIZE":"size","LOOKS_CHANGESTRETCHBY":"change stretch by %1","LOOKS_SETSTRETCHTO":"set stretch to %1 %","LOOKS_SWITCHCOSTUMETO":"switch costume to %1","LOOKS_NEXTCOSTUME":"next costume","LOOKS_SWITCHBACKDROPTO":"switch backdrop to %1","LOOKS_GOTOFRONTBACK":"go to %1 layer","LOOKS_GOTOFRONTBACK_FRONT":"front","LOOKS_GOTOFRONTBACK_BACK":"back","LOOKS_GOFORWARDBACKWARDLAYERS":"go %1 %2 layers","LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD":"forward","LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD":"backward","LOOKS_BACKDROPNUMBERNAME":"backdrop %1","LOOKS_COSTUMENUMBERNAME":"costume %1","LOOKS_NUMBERNAME_NUMBER":"number","LOOKS_NUMBERNAME_NAME":"name","LOOKS_SWITCHBACKDROPTOANDWAIT":"switch backdrop to %1 and wait","LOOKS_NEXTBACKDROP_BLOCK":"next backdrop","LOOKS_NEXTBACKDROP":"next backdrop","LOOKS_PREVIOUSBACKDROP":"previous backdrop","LOOKS_RANDOMBACKDROP":"random backdrop","MOTION_MOVESTEPS":"move %1 steps","MOTION_TURNLEFT":"turn %1 %2 degrees","MOTION_TURNRIGHT":"turn %1 %2 degrees","MOTION_POINTINDIRECTION":"point in direction %1","MOTION_POINTTOWARDS":"point towards %1","MOTION_POINTTOWARDS_POINTER":"mouse-pointer","MOTION_POINTTOWARDS_RANDOM":"random direction","MOTION_GOTO":"go to %1","MOTION_GOTO_POINTER":"mouse-pointer","MOTION_GOTO_RANDOM":"random position","MOTION_GOTOXY":"go to x: %1 y: %2","MOTION_GLIDESECSTOXY":"glide %1 secs to x: %2 y: %3","MOTION_GLIDETO":"glide %1 secs to %2","MOTION_GLIDETO_POINTER":"mouse-pointer","MOTION_GLIDETO_RANDOM":"random position","MOTION_CHANGEXBY":"change x by %1","MOTION_SETX":"set x to %1","MOTION_CHANGEYBY":"change y by %1","MOTION_SETY":"set y to %1","MOTION_IFONEDGEBOUNCE":"if on edge, bounce","MOTION_SETROTATIONSTYLE":"set rotation style %1","MOTION_SETROTATIONSTYLE_LEFTRIGHT":"left-right","MOTION_SETROTATIONSTYLE_DONTROTATE":"don't rotate","MOTION_SETROTATIONSTYLE_ALLAROUND":"all around","MOTION_XPOSITION":"x position","MOTION_YPOSITION":"y position","MOTION_DIRECTION":"direction","MOTION_SCROLLRIGHT":"scroll right %1","MOTION_SCROLLUP":"scroll up %1","MOTION_ALIGNSCENE":"align scene %1","MOTION_ALIGNSCENE_BOTTOMLEFT":"bottom-left","MOTION_ALIGNSCENE_BOTTOMRIGHT":"bottom-right","MOTION_ALIGNSCENE_MIDDLE":"middle","MOTION_ALIGNSCENE_TOPLEFT":"top-left","MOTION_ALIGNSCENE_TOPRIGHT":"top-right","MOTION_XSCROLL":"x scroll","MOTION_YSCROLL":"y scroll","MOTION_STAGE_SELECTED":"Stage selected: no motion blocks","OPERATORS_ADD":"%1 + %2","OPERATORS_SUBTRACT":"%1 - %2","OPERATORS_MULTIPLY":"%1 * %2","OPERATORS_DIVIDE":"%1 / %2","OPERATORS_RANDOM":"pick random %1 to %2","OPERATORS_GT":"%1 > %2","OPERATORS_LT":"%1 < %2","OPERATORS_EQUALS":"%1 = %2","OPERATORS_AND":"%1 and %2","OPERATORS_OR":"%1 or %2","OPERATORS_NOT":"not %1","OPERATORS_JOIN":"join %1 %2","OPERATORS_JOIN_APPLE":"apple","OPERATORS_JOIN_BANANA":"banana","OPERATORS_LETTEROF":"letter %1 of %2","OPERATORS_LETTEROF_APPLE":"a","OPERATORS_LENGTH":"length of %1","OPERATORS_CONTAINS":"%1 contains %2?","OPERATORS_MOD":"%1 mod %2","OPERATORS_ROUND":"round %1","OPERATORS_MATHOP":"%1 of %2","OPERATORS_MATHOP_ABS":"abs","OPERATORS_MATHOP_FLOOR":"floor","OPERATORS_MATHOP_CEILING":"ceiling","OPERATORS_MATHOP_SQRT":"sqrt","OPERATORS_MATHOP_SIN":"sin","OPERATORS_MATHOP_COS":"cos","OPERATORS_MATHOP_TAN":"tan","OPERATORS_MATHOP_ASIN":"asin","OPERATORS_MATHOP_ACOS":"acos","OPERATORS_MATHOP_ATAN":"atan","OPERATORS_MATHOP_LN":"ln","OPERATORS_MATHOP_LOG":"log","OPERATORS_MATHOP_EEXP":"e ^","OPERATORS_MATHOP_10EXP":"10 ^","PROCEDURES_DEFINITION":"define %1","PROCEDURES_RETURN":"return %1","PROCEDURES_TO_REPORTER":"Change To Reporter","PROCEDURES_TO_STATEMENT":"Change To Statement","PROCEDURES_DOCS":"How to use return","SENSING_TOUCHINGOBJECT":"touching %1?","SENSING_TOUCHINGOBJECT_POINTER":"mouse-pointer","SENSING_TOUCHINGOBJECT_EDGE":"edge","SENSING_TOUCHINGCOLOR":"touching color %1?","SENSING_COLORISTOUCHINGCOLOR":"color %1 is touching %2?","SENSING_DISTANCETO":"distance to %1","SENSING_DISTANCETO_POINTER":"mouse-pointer","SENSING_ASKANDWAIT":"ask %1 and wait","SENSING_ASK_TEXT":"What's your name?","SENSING_ANSWER":"answer","SENSING_KEYPRESSED":"key %1 pressed?","SENSING_MOUSEDOWN":"mouse down?","SENSING_MOUSEX":"mouse x","SENSING_MOUSEY":"mouse y","SENSING_SETDRAGMODE":"set drag mode %1","SENSING_SETDRAGMODE_DRAGGABLE":"draggable","SENSING_SETDRAGMODE_NOTDRAGGABLE":"not draggable","SENSING_LOUDNESS":"loudness","SENSING_LOUD":"loud?","SENSING_TIMER":"timer","SENSING_RESETTIMER":"reset timer","SENSING_OF":"%1 of %2","SENSING_OF_XPOSITION":"x position","SENSING_OF_YPOSITION":"y position","SENSING_OF_DIRECTION":"direction","SENSING_OF_COSTUMENUMBER":"costume #","SENSING_OF_COSTUMENAME":"costume name","SENSING_OF_SIZE":"size","SENSING_OF_VOLUME":"volume","SENSING_OF_BACKDROPNUMBER":"backdrop #","SENSING_OF_BACKDROPNAME":"backdrop name","SENSING_OF_STAGE":"Stage","SENSING_CURRENT":"current %1","SENSING_CURRENT_YEAR":"year","SENSING_CURRENT_MONTH":"month","SENSING_CURRENT_DATE":"date","SENSING_CURRENT_DAYOFWEEK":"day of week","SENSING_CURRENT_HOUR":"hour","SENSING_CURRENT_MINUTE":"minute","SENSING_CURRENT_SECOND":"second","SENSING_DAYSSINCE2000":"days since 2000","SENSING_USERNAME":"username","SENSING_USERID":"user id","SOUND_PLAY":"start sound %1","SOUND_PLAYUNTILDONE":"play sound %1 until done","SOUND_STOPALLSOUNDS":"stop all sounds","SOUND_SETEFFECTO":"set %1 effect to %2","SOUND_CHANGEEFFECTBY":"change %1 effect by %2","SOUND_CLEAREFFECTS":"clear sound effects","SOUND_EFFECTS_PITCH":"pitch","SOUND_EFFECTS_PAN":"pan left/right","SOUND_CHANGEVOLUMEBY":"change volume by %1","SOUND_SETVOLUMETO":"set volume to %1%","SOUND_VOLUME":"volume","SOUND_RECORD":"record...","CATEGORY_MOTION":"Motion","CATEGORY_LOOKS":"Looks","CATEGORY_SOUND":"Sound","CATEGORY_EVENTS":"Events","CATEGORY_CONTROL":"Control","CATEGORY_SENSING":"Sensing","CATEGORY_OPERATORS":"Operators","CATEGORY_VARIABLES":"Variables","CATEGORY_MYBLOCKS":"My Blocks","DUPLICATE":"Duplicate","DELETE":"Delete","ADD_COMMENT":"Add Comment","REMOVE_COMMENT":"Remove Comment","DELETE_BLOCK":"Delete Block","DELETE_X_BLOCKS":"Delete %1 Blocks","DELETE_ALL_BLOCKS":"Delete all %1 blocks?","CLEAN_UP":"Clean up Blocks +","HELP":"Help","UNDO":"Undo","REDO":"Redo","EDIT_PROCEDURE":"Edit","SHOW_PROCEDURE_DEFINITION":"Go to definition","WORKSPACE_COMMENT_DEFAULT_TEXT":"Say something...","COLOUR_HUE_LABEL":"Color","COLOUR_SATURATION_LABEL":"Saturation","COLOUR_BRIGHTNESS_LABEL":"Brightness","CHANGE_VALUE_TITLE":"Change value:","RENAME_VARIABLE":"Rename variable","RENAME_VARIABLE_TITLE":"Rename all \\"%1\\" variables to:","RENAME_VARIABLE_MODAL_TITLE":"Rename Variable","NEW_VARIABLE":"Make a Variable","NEW_VARIABLE_TITLE":"New variable name:","VARIABLE_MODAL_TITLE":"New Variable","VARIABLE_ALREADY_EXISTS":"A variable named \\"%1\\" already exists.","VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE":"A variable named \\"%1\\" already exists for another variable of type \\"%2\\".","DELETE_VARIABLE_CONFIRMATION":"Delete %1 uses of the \\"%2\\" variable?","CANNOT_DELETE_VARIABLE_PROCEDURE":"Can't delete the variable \\"%1\\" because it's part of the definition of the function \\"%2\\"","DELETE_VARIABLE":"Delete the \\"%1\\" variable","NEW_PROCEDURE":"Make a Block","PROCEDURE_ALREADY_EXISTS":"A procedure named \\"%1\\" already exists.","PROCEDURE_DEFAULT_NAME":"block name","PROCEDURE_USED":"To delete a block definition, first remove all uses of the block","NEW_LIST":"Make a List","NEW_LIST_TITLE":"New list name:","LIST_MODAL_TITLE":"New List","LIST_ALREADY_EXISTS":"A list named \\"%1\\" already exists.","RENAME_LIST_TITLE":"Rename all \\"%1\\" lists to:","RENAME_LIST_MODAL_TITLE":"Rename List","DEFAULT_LIST_ITEM":"thing","DELETE_LIST":"Delete the \\"%1\\" list","RENAME_LIST":"Rename list","NEW_BROADCAST_MESSAGE":"New message","NEW_BROADCAST_MESSAGE_TITLE":"New message name:","BROADCAST_MODAL_TITLE":"New Message","DEFAULT_BROADCAST_MESSAGE_NAME":"message1"}`)
};

const ScratchBlocks = new Proxy(ScratchBlocksClone_Internal, {
    __getter__: function(e) {
        try {
            return ScratchBlocks;
        } catch {
            return ScratchBlocksClone_Internal;
        }
    },
    get: function(e, a) {return e[a]}
});
const creditsHTML = `<!DOCTYPE html>
<html>
<head>
<script></script><noscript></noscript>
<title>TurboCharged</title>
<style>
code {
    font-size: large;
    font-weight: bold;
    background-color: lightgray;
    border: 2px #000 solid;
}
code.box {
    display: box;
}
code.flex {
    display: flex;
}
</style>
</head>
<body>
<h1>TurboCharged</h1>
<div id="top_creds">
<code id="version" class="box">v9.3</code><span> || Functional and base Idea by LilyMakesThings.</span><br>
<span id="injection_credits">XML Injection based on Xeltallivs and LilyMakesThings XML Injectors.</span><br>
<span id="other_main_credits">Update+Maintained by 0znzw<br><br>Color Change Attempt also by Lily, 0znzw for the XML.</span>
</div>
<div id="extensions">
<span>Text+ (by CST1229)</span>
<span>Base (by TrueFantom)</span>
<span>Bitwise (by TrueFantom)</span>
<span>BigInt (by SkyHigh173)</span>
<span>Math (by TrueFantom)</span>
<span>Cast (by Lily aka LilyMakesThings)</span>
<span>More Comparisons (by NOname-awa)</span>
<span>Tween (by JeremyGamer13)</span>
<span>High Precision (by Qxsck)</span>
<span>More motion (by NamelessCat aka NexusKitten)</span>
<span>Clones+ (by Lily aka LilyMakesThings)</span>
<span>Sensing+ (by ObviousAlexC)</span>
</div>
<div id="user_links">
<h4>User links</h4>
<span>Lily: https://scratch.mit.edu/users/LilyMakesThings/</span><br>
<span>0znzw: https://scratch.mit.edu/users/0znzw/</span><br>
<span>Xeltalliv: https://github.com/Xeltalliv/</span><br>
<span>CST1229: https://scratch.mit.edu/users/CST1229/</span><br>
<span>Skyhigh173: https://github.com/SkyHigh173/</span><br>
<span>TrueFantom: https://scratch.mit.edu/users/TrueFantom/</span><br>
<span>JeremyGamer13: https://scratch.mit.edu/users/JeremyGamer13/</span><br>
<span>NOname-awa: https://github.com/NOname-awa/</span><br>
<span>Qxsck: https://github.com/qxsck/</span><br>
<span>NamelessCat: https://scratch.mit.edu/users/NamelessCat/</span><br>
<span>ObviousAlexC: https://scratch.mit.edu/users/pinksheep2917/</span>
</div>
<div id="license"><h4>License</h4><code class="flex">
Licensed under MIT license.<br>

<!-- Initial copy: https://web.archive.org/web/20231129230145/https://opensource.org/license/mit/ -->
<!-- Lily said to not include copyright so I will just put the date -->
Maintained &lt;2023-2023&gt;<br>
<br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software<br>
and associated documentation files (the "Software"), to deal in the Software without<br>
restriction, including without limitation the rights to use, copy, modify, merge, publish,<br>
distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the<br>
Software is furnished to do so, subject to the following conditions:<br>
<br>
The above copyright notice and this permission notice shall be included in all copies<br>
or substantial portions of the Software.<br>
<br>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br>
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br>
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL<br>
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR<br>
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,<br>
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR<br>
OTHER DEALINGS IN THE SOFTWARE.
</code></div>
</body>
</html>`;
const version = 9.3;
window.Scratch = Scratch;
const vm = Scratch.vm;
const runtime = vm.runtime;
vm.TurboCharged = {
    extensionsData: {},
    blockedCategories: ['data'],
    enabled: true,
    specialEnabled: true,
    gbx: runtime.getBlocksXML.bind(runtime)
};
const categorySeparator = '<sep gap="36"/>';
const blockSeparator = '<sep gap="36"/>';
const translate = ScratchBlocks.ScratchMsgs.translate; // due to it being in some of the category's, i will from now on have this.
const cbfsb = runtime._convertBlockForScratchBlocks.bind(runtime);
const eventsID = 'event';
const Stage = runtime.getTargetForStage();
const ArgumentType = Scratch.ArgumentType;
ArgumentType.VARIABLE = 'variable';
ArgumentType.VERTICAL_SEPARATOR = 'vertical_separator';
ArgumentType.VARIABLE_GETTER = 'variable_getter';
ArgumentType.LABEL = 'label';
ArgumentType.LABEL_SERIALIZABLE = 'label_serializable';

let Colors = {
    generateXML: function(cat) {
        return `colour="${cat.primary}" secondaryColour="${cat.secondary}"`;
    },
    gcc: function(cat) {
        return ScratchBlocks.Colours[cat];
    }
};
Object.keys(ScratchBlocks.Colours).forEach(category => {
    let obj = (Object.assign(Colors.gcc(category), {
        xml: (Colors.generateXML(Colors.gcc(category)))
    }));
    let colors = {};
    colors[category] = obj;
    Object.assign(Colors, colors);
});
Colors.events = structuredClone(Colors.event);
Colors.sound = structuredClone(Colors.sounds);

vm.TurboCharged.extensionData = {
    textPlus: {
        splitCache: [],
        matchCache: [],
        CaseParam: {
            LOWERCASE: "lowercase",
            UPPERCASE: "uppercase",
            MIXEDCASE: "mixedcase",
            TITLECASE: "titlecase",
            EXACTTITLECASE: "exacttitlecase"
        }
    },
    createBlobTo: {
        hasRanBlob: false,
        url: ''
    },
    DefaultExtensions: {
        addBlocks(old_blocks, new_blocks) {
            for (let block in new_blocks) {
                block = new_blocks[block];
                old_blocks.push(block);
            }
            return old_blocks;
        }
    }
}

const stopIcon =
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAQlBMVEUAAAC/UFC8Q0OzTU24SEi4SEi3SEi4R0e4SEi4SEi4SEi4SEi7SUm8SUnMTk7MT0/OT0/PT0/gVVXiVVXsWVn///+CoOd2AAAAC3RSTlMAEBMUu7zLz9D8/dIXnJwAAAABYktHRBXl2PmjAAAAxklEQVRIx+3WwRKDIBAD0JWqVEOtWv7/W3twOqKwELzW3N9wYhORMMYiztgZUZMUAKxqmh5Kno/MG256nzI59Z2mB+BWH+XzUt5RhWoyQjFZkTQFkTBFERlCnAwlDoYUgaHFblpaeL86AK0MvNjMIABmT2cGIAAWniw3ucm/k9ovduEjXzgXtUfJmtrTt9VZzYH9FSB/xvfKZMsiLFmuko61zBTfucjL9RpXf6nEU2MhPxXS86J+kORmjz6V6seViOnG8oT7ApMcjsYZwhXCAAAAAElFTkSuQmCC";

// Source:
// https://github.com/TurboWarp/scratch-vm/blob/develop/src/io/keyboard.js
// https://github.com/TurboWarp/scratch-blocks/blob/develop/blocks_vertical/event.js
const validKeyboardInputs = [
// Special Inputs
{
    text: "space",
    value: "space"
},
{
    text: "up arrow",
    value: "up arrow"
},
{
    text: "down arrow",
    value: "down arrow"
},
{
    text: "right arrow",
    value: "right arrow"
},
{
    text: "left arrow",
    value: "left arrow"
},
{
    text: "enter",
    value: "enter"
},
// TW: Extra Special Inputs
{
    text: "backspace",
    value: "backspace"
},
{
    text: "delete",
    value: "delete"
},
{
    text: "shift",
    value: "shift"
},
{
    text: "caps lock",
    value: "caps lock"
},
{
    text: "scroll lock",
    value: "scroll lock"
},
{
    text: "control",
    value: "control"
},
{
    text: "escape",
    value: "escape"
},
{
    text: "insert",
    value: "insert"
},
{
    text: "home",
    value: "home"
},
{
    text: "end",
    value: "end"
},
{
    text: "page up",
    value: "page up"
},
{
    text: "page down",
    value: "page down"
},
// Letter Keyboard Inputs
{
    text: "a",
    value: "a"
},
{
    text: "b",
    value: "b"
},
{
    text: "c",
    value: "c"
},
{
    text: "d",
    value: "d"
},
{
    text: "e",
    value: "e"
},
{
    text: "f",
    value: "f"
},
{
    text: "g",
    value: "g"
},
{
    text: "h",
    value: "h"
},
{
    text: "i",
    value: "i"
},
{
    text: "j",
    value: "j"
},
{
    text: "k",
    value: "k"
},
{
    text: "l",
    value: "l"
},
{
    text: "m",
    value: "m"
},
{
    text: "n",
    value: "n"
},
{
    text: "o",
    value: "o"
},
{
    text: "p",
    value: "p"
},
{
    text: "q",
    value: "q"
},
{
    text: "r",
    value: "r"
},
{
    text: "s",
    value: "s"
},
{
    text: "t",
    value: "t"
},
{
    text: "u",
    value: "u"
},
{
    text: "v",
    value: "v"
},
{
    text: "w",
    value: "w"
},
{
    text: "x",
    value: "x"
},
{
    text: "y",
    value: "y"
},
{
    text: "z",
    value: "z"
},
// Number Keyboard Inputs
{
    text: "0",
    value: "0"
},
{
    text: "1",
    value: "1"
},
{
    text: "2",
    value: "2"
},
{
    text: "3",
    value: "3"
},
{
    text: "4",
    value: "4"
},
{
    text: "5",
    value: "5"
},
{
    text: "6",
    value: "6"
},
{
    text: "7",
    value: "7"
},
{
    text: "8",
    value: "8"
},
{
    text: "9",
    value: "9"
},
];

var lastValues = {};
var runTimer = 0;
/**
 * @param {VM.Target|null} target
 * @param {string|unknown} thing
 * @returns {string|number|boolean}
 */
const getThingOfTarget = (target, thing) => {
    if (!target) {
        return '';
    }
    if (thing === 'x position') {
        return target.x;
    }
    if (thing === 'y position') {
        return target.y;
    }
    if (thing === 'direction') {
        return target.direction;
    }
    if (thing === 'costume num') {
        return (target.currentCostume + 1);
    }
    if (thing === 'costume name') {
        return target.getCostumes()[target.currentCostume].name;
    }
    if (thing === 'size') {
        return target.size;
    }
    if (thing === 'volume') {
        return target.volume;
    }
    // this should never happen
    return '';
};

const xmlEscape = function(unsafe) {
    return unsafe.replace(/[<>&'"]/g, c => {
        switch (c) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '\'':
                return '&apos;';
            case '"':
                return '&quot;';
        }
    });
}

function cbto(a) {
    const blob = new Blob([a], {
        type: "text/html"
    });
    return URL.createObjectURL(blob)
};

const credits_blob = function() {
    if (!vm.TurboCharged.extensionData.createBlobTo.hasRanBlob) {
        vm.TurboCharged.extensionData.createBlobTo.hasRanBlob = true;
        vm.TurboCharged.extensionData.createBlobTo.url = cbto(creditsHTML);
    };
    window.open(vm.TurboCharged.extensionData.createBlobTo.url, '_blank');
};

const generateVariableField = (function(vari, type){
    return `<field name="${type}" id="${vari.id}" variabletype="${vari.type}">${vari.name}</field>`;
});


// <field name="LIST" variabletype="list" id="">variablename</field>
const generateListField = (function(vari){
    return `<field name="LIST" id="${vari.id}" variabletype="list">${vari.name}</field>`;
});

// <block id="variableId" type="data_variable">
//    <field name="VARIABLE">variablename</field>
// </block>
const generateVariableBlock = (function(vari){
    const variType = (vari.type != '' ? 'list' : 'variable');
    const field = generateVariableField(vari, variType.toUpperCase());
    const xml = `<block type="data_${variType}" id="${vari.id}">${field}</block>`;
    return xml;
});

// <block id="variableId" type="data_listcontents">
//    <field name="LIST">variablename</field>
// </block>
const generateListBlock = (function(vari){
    const field = `<field name="LIST">${vari.name}</field>`;
    const xml = `<block type="data_listcontents" id="${vari.id}">${field}</block>`;
    return xml;
});

function spawnMutator(block) {
    function addProp(prop, def) { if (block.hasOwnProperty(prop)) return; block[prop] = def };
    if (!block.hasOwnProperty('blockType')) return;
    addProp('terminal', false);
    addProp('blockAllThreads', false);
    addProp('opcode', '');
    addProp('func', block.opcode);
    addProp('isDynamic', true);
    addProp('color1', '#ff0000');
    addProp('color2', '#00ff00');
    addProp('color3', '#0000ff');
    addProp('disableMonitor', true);
    addProp('isTerminal', false);
    addProp('arguments', {});
    /* mutator example:
            {"blockType":"reporter","terminal":false,"blockAllThreads":false,"arguments":{},"opcode":"data_getVariable","text":"var [VARIABLE]","isDynamic":true,"color1":"${Colors.data.primary}","color2":"${Colors.data.secondary}","color3":"${Colors.data.tertiary}","isTerminal":false,"disableMonitor":true,"arguments":{"VARIABLE":{"type":"string","menu":"variablesMenu","defaultValue":"my variable"}}}
    */
    const mutator = `<mutation blockInfo='${JSON.stringify(block)}'/>`;
    return mutator;
}

function blocksFromClassToObject(extension) {
    extension = new extension().getInfo().blocks;
    let blocks = {};
    for (let i = 0; i < extension.length; i++) {
        const block = extension[i];
        if (!block.hasOwnProperty('opcode') || !block.hasOwnProperty('blockType')) continue;
        blocks[block.opcode] = block;
    }
    return blocks;
}

function isGlobalVariable(name) {
    return (Stage.lookupVariableByNameAndType(name) !== null);
}

function getVariableByName(name, target) {
    return Stage.lookupVariableByNameAndType(name) || target.lookupVariableByNameAndType(name);
}

function deleteVariableByName(name, target) {
    const variable = getVariableByName(name, target);
    target.deleteVariable(variable);
}

function setVariableByName(name, value, target) {
    const variable = getVariableByName(name);
    if (isGlobalVariable(name)) {
        vm.setVariableValue(Stage.id, variable, value);
    } else {
        vm.setVariableValue(target.id, variable, value);
    }
}

const getVarObjectFromName = function (name, util, type) {
    const stageTarget = Scratch.vm.runtime.getTargetForStage();
    const target = util.target;
    let listObject = Object.create(null);

    listObject = stageTarget.lookupVariableByNameAndType(name, type);
    if (listObject) return listObject;
    listObject = target.lookupVariableByNameAndType(name, type);
    if (listObject) return listObject;
  }

  const cloneObj = function (original) {
    return JSON.parse(JSON.stringify(original));
  }

  const arraysEqual = function (a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

class TurboChargedControl {
    getInfo() {
        return {
            id: 'control',
            name: 'Control 🪄',
            color1: Colors.control.primary,
            color2: Colors.control.secondary,
            color3: Colors.control.tertiary,
            blocks: [{
                    opcode: 'clonespluswhenCloneStartsWithVar',
                    blockType: Scratch.BlockType.HAT,
                    text: 'when I start as a clone with [INPUTA] set to [INPUTB]',
                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonespluscreateCloneWithVar',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'create clone with [INPUTA] set to [INPUTB]',
                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                },
                {
                    opcode: 'clonesplustouchingCloneWithVar',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'touching clone with [INPUTA] set to [INPUTB]?',
                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplustouchingMainSprite',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'touching main sprite?',
                },

                {
                    opcode: 'clonesplussetVariableOfClone',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set variable [INPUTA] to [INPUTB] for clones with [INPUTC] set to [INPUTD]',
                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0'
                        },
                        INPUTC: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTD: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplusgetVariableOfClone',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'variable [INPUTA] of clone with [INPUTB] set to [INPUTC]',

                    disableMonitor: true,
                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTC: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplussetVariableOfMainSprite',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set variable [INPUTA] to [INPUTB] for main sprite',

                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplusgetVariableOfMainSprite',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'variable [INPUT] of main sprite',

                    disableMonitor: true,
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        }
                    }
                },

                {
                    opcode: 'clonespluscloneExists',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'clone with [INPUTA] set to [INPUTB] exists?',

                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplusgetThingOfClone',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[INPUTA] of clone with [INPUTB] set to [INPUTC]',
                    disableMonitor: true,
                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'x position',
                            menu: 'thingOfMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTC: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplusgetThingOfMainSprite',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[INPUT] of main sprite',

                    disableMonitor: true,
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'x position',
                            menu: 'thingOfMenu'
                        }
                    }
                },

                {
                    opcode: 'clonesplusstopScriptsInSprite',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'stop scripts in [INPUT]',
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'spriteMenu'
                        }
                    }
                }, {
                    opcode: 'clonesplusstopScriptsInClone',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'stop scripts in clones with [INPUTA] set to [INPUTB]',

                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'clonesplusstopScriptsInMainSprite',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'stop scripts in main sprite',
                },

                {
                    opcode: 'clonesplusdeleteClonesInSprite',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'delete clones in [INPUT]',
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'spriteMenu'
                        }
                    }
                }, {
                    opcode: 'clonesplusdeleteCloneWithVar',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'delete clones with [INPUTA] set to [INPUTB]',

                    arguments: {
                        INPUTA: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'variablesMenu'
                        },
                        INPUTB: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                },

                {
                    opcode: 'clonesplusisClone',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'is clone?'
                },

                {
                    opcode: 'clonespluscloneCount',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'clone count',
                }, {
                    opcode: 'clonesplusspriteCloneCount',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'clone count of [INPUT]',
                    disableMonitor: true,
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'spriteMenu'
                        }
                    }
                }
            ],
            menus: {
                spriteMenu: {
                    acceptReporters: true,
                    items: 'getSprites'
                },
                // menus use acceptReporters: false for Scratch parity
                variablesMenu: {
                    acceptReporters: false,
                    items: 'getVariables'
                },
                thingOfMenu: {
                    acceptReporters: false,
                    items: [{
                        text: 'x position',
                        value: 'x position'
                    }, {
                        text: 'y position',
                        value: 'y position'
                    }, {
                        text: 'direction',
                        value: 'direction'
                    }, {
                        text: 'costume #',
                        value: 'costume num'
                    }, {
                        text: 'costume name',
                        value: 'costume name'
                    }, {
                        text: 'size',
                        value: 'size'
                    }, {
                        text: 'volume',
                        value: 'volume'
                    }, ],
                    // this is for the variables category
                    variablesMenu2: {
                        acceptReporters: true,
                        items: 'getVariables2'
                    }
                }
            }
        }
    }
    //clonesplus extension
    clonespluswhenCloneStartsWithVar(args, util) {
        // TODO: this is really not ideal. this should be an event-based hat ideally, but we don't have a good
        // way to do that right now...
        if (util.target.isOriginal) {
            return false;
        }
        const variable = util.target.lookupVariableById(args.INPUTA);
        const expectedValue = args.INPUTB;
        if (variable) {
            return Scratch.Cast.compare(variable.value, expectedValue) === 0;
        }
        return false;
    }

    clonespluscreateCloneWithVar(args, util) {
        // @ts-expect-error - not typed yet
        Scratch.vm.runtime.ext_scratch3_control._createClone(util.target.sprite.name, util.target);
        const clones = util.target.sprite.clones;
        const cloneNum = clones.length - 1;
        const cloneVariable = clones[cloneNum].lookupVariableById(args.INPUTA);
        if (cloneVariable) {
            cloneVariable.value = args.INPUTB;
        }
    }

    clonesplustouchingCloneWithVar(args, util) {
        const drawableCandidates = util.target.sprite.clones
            .filter(clone => {
                const variable = clone.lookupVariableById(args.INPUTA);
                return variable && Scratch.Cast.compare(variable.value, args.INPUTB) === 0;
            })
            .map(clone => clone.drawableID);
        if (drawableCandidates.length === 0) {
            return false;
        }
        return Scratch.vm.renderer.isTouchingDrawables(util.target.drawableID, drawableCandidates);
    }

    clonesplustouchingMainSprite(args, util) {
        if (util.target.isOriginal) {
            return false;
        }
        const main = util.target.sprite.clones[0];
        const drawableCandidates = [main.drawableID];
        return Scratch.vm.renderer.isTouchingDrawables(util.target.drawableID, drawableCandidates);
    }

    clonesplussetVariableOfClone(args, util) {
        const newVariableValue = args.INPUTB;
        const expectedVarValue = args.INPUTD;
        const clones = util.target.sprite.clones;
        for (let index = 1; index < clones.length; index++) {
            const checkVar = clones[index].lookupVariableById(args.INPUTC);
            if (checkVar && Scratch.Cast.compare(checkVar.value, expectedVarValue) === 0) {
                const editVar = clones[index].lookupVariableById(args.INPUTA);
                if (editVar) {
                    editVar.value = newVariableValue;
                }
            }
        }
    }

    clonesplusgetVariableOfClone(args, util) {
        const clone = this.getCloneFromVariable(args.INPUTB, args.INPUTC, util.target.sprite.clones);
        if (!clone) {
            return '';
        }
        // guaranteed to exist by getCloneFromVariable
        const cloneVar = clone.lookupVariableById(args.INPUTA);
        return cloneVar.value;
    }

    clonesplussetVariableOfMainSprite(args, util) {
        const main = util.target.sprite.clones[0];
        const variableObj = main.lookupVariableById(args.INPUTA);
        if (variableObj) {
            variableObj.value = args.INPUTB;
        }
    }

    clonesplusgetVariableOfMainSprite(args, util) {
        const main = util.target.sprite.clones[0];
        const variableObj = main.lookupVariableById(args.INPUT);
        if (variableObj) {
            return variableObj.value;
        }
        return '';
    }

    clonespluscloneExists(args, util) {
        const clone = this.getCloneFromVariable(args.INPUTA, args.INPUTB, util.target.sprite.clones);
        return !!clone;
    }

    clonesplusgetThingOfClone(args, util) {
        const clone = this.getCloneFromVariable(args.INPUTB, args.INPUTC, util.target.sprite.clones);
        return getThingOfTarget(clone, args.INPUTA);
    }

    clonesplusgetThingOfMainSprite(args, util) {
        const main = util.target.sprite.clones[0];
        return getThingOfTarget(main, args.INPUT);
    }

    clonesplusstopScriptsInSprite(args) {
        const targetObj = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
        if (targetObj) {
            Scratch.vm.runtime.stopForTarget(targetObj);
        }
    }

    clonesplusstopScriptsInMainSprite(args, util) {
        Scratch.vm.runtime.stopForTarget(util.target.sprite.clones[0]);
    }

    clonesplusstopScriptsInClone(args, util) {
        const clones = util.target.sprite.clones;
        let expectedValue = args.INPUTB;
        for (let index = 1; index < clones.length; index++) {
            const cloneVariable = clones[index].lookupVariableById(args.INPUTA);
            if (cloneVariable && Scratch.Cast.compare(cloneVariable.value, expectedValue) === 0) {
                Scratch.vm.runtime.stopForTarget(clones[index]);
            }
        }
    }

    clonesplusdeleteClonesInSprite(args, util) {
        const target = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
        if (!target) {
            return;
        }
        const clones = target.sprite.clones;
        for (let index = clones.length - 1; index > 0; index--) {
            Scratch.vm.runtime.disposeTarget(clones[index]);
        }
    }

    clonesplusdeleteCloneWithVar(args, util) {
        const clones = util.target.sprite.clones;
        const expectedValue = args.INPUTB;
        for (let index = clones.length - 1; index > 0; index--) {
            const cloneVar = clones[index].lookupVariableById(args.INPUTA);
            if (cloneVar && Scratch.Cast.compare(cloneVar.value, expectedValue) === 0) {
                Scratch.vm.runtime.disposeTarget(clones[index]);
            }
        }
    }

    clonesplusisClone(args, util) {
        return !util.target.isOriginal;
    }

    clonespluscloneCount(args, util) {
        return Scratch.vm.runtime._cloneCounter;
    }

    clonesplusspriteCloneCount(args, util) {
        const target = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
        if (target) {
            return (target.sprite.clones.length - 1);
        }
        return 0;
    }

    /**
     * @param {string} variableId
     * @param {unknown} expectedValue
     * @param {VM.Target[]} clones
     * @returns {VM.Target|null}
     */
    getCloneFromVariable(variableId, expectedValue, clones) {
        for (let index = 1; index < clones.length; index++) {
            const cloneVar = clones[index].lookupVariableById(variableId);
            if (cloneVar && Scratch.Cast.compare(cloneVar.value, expectedValue) === 0) {
                return clones[index];
            }
        }
        return null;
    }

    getSprites() {
        let spriteNames = [];
        const targets = Scratch.vm.runtime.targets;
        const myself = Scratch.vm.runtime.getEditingTarget().sprite.name;
        for (let index = 1; index < targets.length; index++) {
            const curTarget = targets[index].sprite;
            let display = curTarget.name;
            if (myself === curTarget.name) {
                display = 'myself';
            }
            if (targets[index].isOriginal) {
                const jsonOBJ = {
                    text: display,
                    value: curTarget.name
                };
                spriteNames.push(jsonOBJ);
            }
        }
        if (spriteNames.length > 0) {
            return spriteNames;
        } else {
            return [{
                text: "",
                value: 0
            }]; //this should never happen but it's a failsafe
        }
    }

    clonesplusgetSpriteObj(name) { //This is unused but I'm leaving it in for potential future blocks
        const spriteObj = Scratch.vm.runtime.getSpriteTargetByName(name);
        return JSON.stringify(spriteObj);
    }

    getVariables() {
        // @ts-expect-error - Blockly not typed yet
        // eslint-disable-next-line no-undef
        const variables = typeof Blockly === 'undefined' ? [] : Blockly.getMainWorkspace()
            .getVariableMap()
            .getVariablesOfType('')
            .filter(model => model.isLocal)
            .map(model => ({
                text: model.name,
                value: model.getId()
            }));
        if (variables.length > 0) {
            return variables;
        } else {
            return [{
                text: "",
                value: ""
            }];
        }
    }
    //end block

    //this is for the variables category
    getVariables2() {
        const target = vm.runtime.getEditingTarget();
        const variables = target.getAllVariableNamesInScopeByType('', '');
        if (variables.length > 0) {
            return variables;
        } else {
            return [];
        }
    }
}

const control = function(isInitialSetup, isStage) {
    return `
<category name="%{BKY_CATEGORY_CONTROL} 🪄" id="control" ${Colors.control.xml}>
<block type="control_wait">
    <value name="DURATION">
        <shadow type="math_positive_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="control_repeat">
    <value name="TIMES">
        <shadow type="math_whole_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block id="forever" type="control_forever"/>
${blockSeparator}
<block type="control_if"/>
<block type="control_if_else"/>
<block id="wait_until" type="control_wait_until"/>
<block id="repeat_until" type="control_repeat_until"/>
<block id="while" type="control_while"/>
<block id="for_each" type="control_for_each">
    <value name="VALUE">
        <shadow type="math_whole_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="control_stop"/>
${blockSeparator}
${isStage ? `
    <block type="control_create_clone_of">
        <value name="CLONE_OPTION">
            <shadow type="control_create_clone_of_menu"/>
        </value>
    </block>
    <block type="control_clonespluscloneCount">
    </block>
    <block type="control_clonesplusdeleteClonesInSprite">
    <value name="INPUT">
        <shadow type="control_menu_spriteMenu">
</shadow>
    </value>
</block>
<block type="control_clonesplusstopScriptsInSprite">
<value name="INPUT">
    <shadow type="control_menu_spriteMenu">
</shadow>
</value>
</block>
` : `
    <block type="control_start_as_clone"/>
    <block type="control_clonespluswhenCloneStartsWithVar">
    <value name="INPUTA">
        <shadow type="control_menu_variablesMenu">
</shadow>
    </value>
    <value name="INPUTB">
        <shadow type="text">
<field name="TEXT">1</field>
</shadow>
    </value>
</block>
    <block type="control_create_clone_of">
        <value name="CLONE_OPTION">
            <shadow type="control_create_clone_of_menu"/>
        </value>
    </block>
    <block type="control_clonespluscreateCloneWithVar">
    <value name="INPUTA">
        <shadow type="control_menu_variablesMenu">
</shadow>
    </value>
    <value name="INPUTB">
        <shadow type="text">
<field name="TEXT">1</field>
</shadow>
    </value>
</block>
    <block type="control_delete_this_clone"/>
    <block type="control_clonesplusdeleteCloneWithVar">
    <value name="INPUTA">
        <shadow type="control_menu_variablesMenu">
</shadow>
    </value>
    <value name="INPUTB">
        <shadow type="text">
<field name="TEXT">1</field>
</shadow>
    </value>
</block>
<block type="control_clonesplussetVariableOfMainSprite">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonesplussetVariableOfClone">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">0</field>
</shadow>
</value>
<value name="INPUTC">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTD">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonesplusstopScriptsInSprite">
<value name="INPUT">
    <shadow type="control_menu_spriteMenu">
</shadow>
</value>
</block>
<block type="control_clonesplusdeleteClonesInSprite">
<value name="INPUT">
    <shadow type="control_menu_spriteMenu">
</shadow>
</value>
</block>
    <block type="control_clonesplusisClone">
    </block>
    <block type="control_clonesplusspriteCloneCount">
    <value name="INPUT">
        <shadow type="control_menu_spriteMenu">
</shadow>
    </value>
</block>
<block type="control_clonespluscloneExists">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonesplustouchingMainSprite">
</block>
<block type="control_clonesplustouchingCloneWithVar">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>

<block type="control_clonesplusgetThingOfMainSprite">
<value name="INPUT">
<shadow type="control_menu_thingOfMenu">
</shadow>
</value>
</block>
<block type="control_clonesplusgetThingOfClone">
<value name="INPUTA">
<shadow type="control_menu_thingOfMenu">
</shadow>
</value>
<value name="INPUTB">
<shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTC">
<shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonesplusgetVariableOfMainSprite">
<value name="INPUT">
<shadow type="control_menu_variablesMenu">
</shadow>
</value>
</block>
<block type="control_clonesplusgetVariableOfClone">
<value name="INPUTA">
<shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
<shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTC">
<shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonespluscloneCount">
</block>
<block type="control_clonesplusstopScriptsInMainSprite">
</block>
<block type="control_clonesplusstopScriptsInClone">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
`}
${categorySeparator}
</category>
`;
};
class TurboChargedEvents {
    constructor() {
        // Stop Sign Clicked contributed by @CST1229
        runtime.shouldExecuteStopClicked = true;
        runtime.on("BEFORE_EXECUTE", () => {
            runTimer++;
            runtime.shouldExecuteStopClicked = false;

            runtime.startHats(eventsID + "_MoreEventsforever");
            runtime.startHats(eventsID + "_MoreEventswhileTrueFalse");
            runtime.startHats(eventsID + "_MoreEventswhenValueChanged");
            runtime.startHats(eventsID + "_MoreEventseveryDuration");
            runtime.startHats(eventsID + "_MoreEventswhileKeyPressed");
        });
        runtime.on("PROJECT_START", () => {
            runTimer = 0;
        });
        runtime.on("PROJECT_STOP_ALL", () => {
            runTimer = 0;
            if (runtime.shouldExecuteStopClicked)
                queueMicrotask(() =>
                    runtime.startHats(eventsID + "_MoreEventswhenStopClicked")
                );
        });
        runtime.on("AFTER_EXECUTE", () => {
            runtime.shouldExecuteStopClicked = true;
        });
        const originalGreenFlag = vm.greenFlag;
        vm.greenFlag = function() {
            runtime.shouldExecuteStopClicked = false;
            originalGreenFlag.call(this);
        };
    }
    getInfo() {
        return {
            id: eventsID,
            name: 'Events 🪄',
            color1: Colors.events.primary,
            color2: Colors.events.secondary,
            color3: Colors.events.tertiary,
            blocks: [{
                    opcode: "MoreEventswhenStopClicked",
                    blockType: Scratch.BlockType.EVENT,
                    text: "when [STOP] clicked",
                    isEdgeActivated: false,
                    arguments: {
                        STOP: {
                            type: Scratch.ArgumentType.IMAGE,
                            dataURI: stopIcon,
                        },
                    },
                },
                {
                    opcode: "MoreEventsforever",
                    blockType: Scratch.BlockType.EVENT,
                    text: "forever",
                    isEdgeActivated: false,
                },
                {
                    opcode: "MoreEventswhenTrueFalse",
                    blockType: Scratch.BlockType.HAT,
                    text: "when [CONDITION] becomes [STATE]",
                    isEdgeActivated: true,
                    arguments: {
                        CONDITION: {
                            type: Scratch.ArgumentType.BOOLEAN,
                        },
                        STATE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "boolean",
                        },
                    },
                },
                {
                    opcode: "MoreEventswhileTrueFalse",
                    blockType: Scratch.BlockType.HAT,
                    text: "while [CONDITION] is [STATE]",
                    isEdgeActivated: false,
                    arguments: {
                        CONDITION: {
                            type: Scratch.ArgumentType.BOOLEAN,
                        },
                        STATE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "boolean",
                        },
                    },
                },
                {
                    opcode: "MoreEventswhenValueChanged",
                    blockType: Scratch.BlockType.HAT,
                    text: "when [INPUT] is changed",
                    isEdgeActivated: false,
                    arguments: {
                        INPUT: {
                            // Intentional:
                            // Encourages people to place a block
                            // (as opposed to typing a value)
                            type: null,
                        },
                    },
                },
                {
                    opcode: "MoreEventseveryDuration",
                    blockType: Scratch.BlockType.HAT,
                    text: "every [DURATION] frames",
                    isEdgeActivated: false,
                    arguments: {
                        DURATION: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 3,
                        },
                    },
                },
                {
                    opcode: "MoreEventswhenKeyAction",
                    blockType: Scratch.BlockType.HAT,
                    text: "when [KEY_OPTION] key [ACTION]",
                    isEdgeActivated: true,
                    arguments: {
                        KEY_OPTION: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "space",
                            menu: "keyboardButtons",
                        },
                        ACTION: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "action",
                        },
                    },
                },
                {
                    opcode: "MoreEventswhileKeyPressed",
                    blockType: Scratch.BlockType.HAT,
                    text: "while [KEY_OPTION] key pressed",
                    isEdgeActivated: false,
                    arguments: {
                        KEY_OPTION: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "space",
                            menu: "keyboardButtons",
                        },
                    },
                },
                {
                    opcode: "MoreEvents_broadcastToTarget",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "broadcast [BROADCAST_OPTION] to [TARGET]",
                    arguments: {
                        BROADCAST_OPTION: {
                            type: null,
                        },
                        TARGET: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "targetMenu",
                        },
                    },
                    hideFromPalette: true,
                },
                {
                    opcode: "MoreEvents_broadcastToTargetAndWait",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "broadcast [BROADCAST_OPTION] to [TARGET] and wait",
                    arguments: {
                        BROADCAST_OPTION: {
                            type: null,
                        },
                        TARGET: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "targetMenu",
                        },
                    },
                    hideFromPalette: true,
                },
                {
                    opcode: "MoreEvents_broadcastData",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "broadcast [BROADCAST_OPTION] with data [DATA]",
                    arguments: {
                        BROADCAST_OPTION: {
                            type: null,
                        },
                        DATA: {
                            type: Scratch.ArgumentType.STRING,
                        },
                    },
                    hideFromPalette: true,
                },
                {
                    opcode: "MoreEvents_broadcastDataAndWait",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "broadcast [BROADCAST_OPTION] with data [DATA] and wait",
                    arguments: {
                        BROADCAST_OPTION: {
                            type: null,
                        },
                        DATA: {
                            type: Scratch.ArgumentType.STRING,
                        },
                    },
                    hideFromPalette: true,
                },
                {
                    blockType: Scratch.BlockType.XML,
                    xml: `<block type="${eventsID}_MoreEvents_broadcastToTarget">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${eventsID}_menu_targetMenu"></shadow>
                </value>
            </block>
            <block type="${eventsID}_MoreEvents_broadcastToTargetAndWait">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${eventsID}_menu_targetMenu"></shadow>
                </value>
            </block>
            <sep gap="36"/>
            <block type="${eventsID}_MoreEvents_broadcastData">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>
            <block type="${eventsID}_MoreEvents_broadcastDataAndWait">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>`,
                },
                {
                    opcode: "MoreEventsreceivedData",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "received data",
                    disableMonitor: true,
                    allowDropAnywhere: true,
                },
                {
                    opcode: "MoreEvents_broadcastDataToTarget",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "broadcast [BROADCAST_OPTION] to [TARGET] with data [DATA]",
                    func: "MoreEvents_broadcastToTarget",
                    arguments: {
                        BROADCAST_OPTION: {
                            type: null,
                        },
                        TARGET: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "targetMenu",
                        },
                        DATA: {
                            type: Scratch.ArgumentType.STRING,
                        },
                    },
                    hideFromPalette: true,
                },
                {
                    opcode: "MoreEvents_broadcastDataToTargetAndWait",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "broadcast [BROADCAST_OPTION] to [TARGET] with data [DATA] and wait",
                    func: "MoreEvents_broadcastToTargetAndWait",
                    arguments: {
                        BROADCAST_OPTION: {
                            type: null,
                        },
                        TARGET: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "targetMenu",
                        },
                        DATA: {
                            type: Scratch.ArgumentType.STRING,
                        },
                    },
                    hideFromPalette: true,
                },
                {
                    blockType: Scratch.BlockType.XML,
                    xml: `<block type="${eventsID}_MoreEvents_broadcastDataToTarget">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${eventsID}_menu_targetMenu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>
            <block type="${eventsID}_MoreEvents_broadcastDataToTargetAndWait">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${eventsID}_menu_targetMenu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>`,
                }
            ],
            menus: {
                // Targets have acceptReporters: true
                targetMenu: {
                    acceptReporters: true,
                    items: "_getTargets",
                },
                keyboardButtons: {
                    acceptReporters: true,
                    items: validKeyboardInputs,
                },
                // Attributes have acceptReporters: false
                action: {
                    acceptReporters: false,
                    items: ["hit", "released"],
                },
                boolean: {
                    acceptReporters: false,
                    items: ["true", "false"],
                },
                state: {
                    acceptReporters: false,
                    items: ["enabled", "disabled"],
                },
            },
        }
    }

    MoreEventswhenTrueFalse(args) {
        return args.STATE === "true" ? args.CONDITION : !args.CONDITION;
    }

    MoreEventswhileTrueFalse(args) {
        return args.STATE === "true" ? args.CONDITION : !args.CONDITION;
    }

    MoreEventswhenValueChanged(args, util) {
        const blockId = util.thread.peekStack();
        if (!lastValues[blockId])
            lastValues[blockId] = Scratch.Cast.toString(args.INPUT);
        if (lastValues[blockId] !== Scratch.Cast.toString(args.INPUT)) {
            lastValues[blockId] = Scratch.Cast.toString(args.INPUT);
            return true;
        }
        return false;
    }

    MoreEventseveryDuration(args, util) {
        const duration = Math.max(
            Math.round(Scratch.Cast.toNumber(args.DURATION)),
            0
        );
        return !!(runTimer % duration === 0);
    }

    MoreEventswhenKeyAction(args, util) {
        const key = Scratch.Cast.toString(args.KEY_OPTION).toLowerCase();
        const pressed = util.ioQuery("keyboard", "getKeyIsDown", [key]);
        return args.ACTION === "released" ? !pressed : pressed;
    }

    MoreEventswhileKeyPressed(args, util) {
        const key = Scratch.Cast.toString(args.KEY_OPTION).toLowerCase();
        return util.ioQuery("keyboard", "getKeyIsDown", [key]);
    }

    MoreEvents_broadcastToTarget(args, util) {
        const broadcastOption = Scratch.Cast.toString(args.BROADCAST_OPTION);
        if (!broadcastOption) return;

        const data = Scratch.Cast.toString(args.DATA);
        console.log(data);

        const cloneTargets = this._getTargetFromMenu(args.TARGET).sprite.clones;
        let startedThreads = [];

        for (const clone of cloneTargets) {
            startedThreads = [
                ...startedThreads,
                ...util.startHats(
                    "event_whenbroadcastreceived", {
                        BROADCAST_OPTION: broadcastOption,
                    },
                    clone
                ),
            ];
            if (data) {
                startedThreads.forEach((thread) => (thread.receivedData = args.DATA));
            }
        }
    }

    MoreEvents_broadcastToTargetAndWait(args, util) {
        if (!util.stackFrame.broadcastVar) {
            util.stackFrame.broadcastVar = Scratch.Cast.toString(
                args.BROADCAST_OPTION
            );
        }

        const spriteTarget = this._getTargetFromMenu(args.TARGET);
        if (!spriteTarget) return;
        const cloneTargets = spriteTarget.sprite.clones;

        const data = Scratch.Cast.toString(args.DATA);

        if (util.stackFrame.broadcastVar) {
            const broadcastOption = util.stackFrame.broadcastVar;
            if (!util.stackFrame.startedThreads) {
                util.stackFrame.startedThreads = [];
                for (const clone of cloneTargets) {
                    util.stackFrame.startedThreads = [
                        ...util.stackFrame.startedThreads,
                        ...util.startHats(
                            "event_whenbroadcastreceived", {
                                BROADCAST_OPTION: broadcastOption,
                            },
                            clone
                        ),
                    ];
                    if (data) {
                        util.stackFrame.startedThreads.forEach(
                            (thread) => (thread.receivedData = args.DATA)
                        );
                    }
                }
                if (util.stackFrame.startedThreads.length === 0) {
                    return;
                }
            }

            const waiting = util.stackFrame.startedThreads.some(
                (thread) => runtime.threads.indexOf(thread) !== -1
            );
            if (waiting) {
                if (
                    util.stackFrame.startedThreads.every((thread) =>
                        runtime.isWaitingThread(thread)
                    )
                ) {
                    util.yieldTick();
                } else {
                    util.yield();
                }
            }
        }
    }

    MoreEvents_broadcastData(args, util) {
        const broadcast = Scratch.Cast.toString(args.BROADCAST_OPTION);
        if (!broadcast) return;

        const data = Scratch.Cast.toString(args.DATA);

        let threads = util.startHats("event_whenbroadcastreceived", {
            BROADCAST_OPTION: broadcast,
        });
        threads.forEach((thread) => (thread.receivedData = data));
    }

    MoreEvents_broadcastDataAndWait(args, util) {
        const data = Scratch.Cast.toString(args.DATA);

        if (!util.stackFrame.broadcastVar) {
            util.stackFrame.broadcastVar = Scratch.Cast.toString(
                args.BROADCAST_OPTION
            );
        }

        if (util.stackFrame.broadcastVar) {
            const broadcastOption = util.stackFrame.broadcastVar;
            if (!util.stackFrame.startedThreads) {
                util.stackFrame.startedThreads = util.startHats(
                    "event_whenbroadcastreceived", {
                        BROADCAST_OPTION: broadcastOption,
                    }
                );
                if (util.stackFrame.startedThreads.length === 0) {
                    return;
                } else {
                    util.stackFrame.startedThreads.forEach(
                        (thread) => (thread.receivedData = data)
                    );
                }
            }

            const waiting = util.stackFrame.startedThreads.some(
                (thread) => runtime.threads.indexOf(thread) !== -1
            );
            if (waiting) {
                if (
                    util.stackFrame.startedThreads.every((thread) =>
                        runtime.isWaitingThread(thread)
                    )
                ) {
                    util.yieldTick();
                } else {
                    util.yield();
                }
            }
        }
    }

    MoreEventsreceivedData(args, util) {
        const received = util.thread.receivedData;
        return received ? received : "";
    }

    _getTargetFromMenu(targetName) {
        let target = Scratch.vm.runtime.getSpriteTargetByName(targetName);
        if (targetName === "_stage_") target = runtime.getTargetForStage();
        return target;
    }

    _getTargets() {
        const spriteNames = [{
            text: "Stage",
            value: "_stage_"
        }];
        const targets = Scratch.vm.runtime.targets;
        for (let index = 1; index < targets.length; index++) {
            const target = targets[index];
            if (target.isOriginal) {
                const targetName = target.getName();
                spriteNames.push({
                    text: targetName,
                    value: targetName,
                });
            }
        }
        if (spriteNames.length > 0) {
            return spriteNames;
        } else {
            return [{
                text: "",
                value: 0
            }]; //this should never happen but it's a failsafe
        }
    }
}

const events = function(isInitialSetup, isStage) {
    return `
    <category name="%{BKY_CATEGORY_EVENTS} 🪄" id="${eventsID}" ${Colors.events.xml}>
    <block type="event_whenflagclicked"/>
    <block type="${eventsID}_MoreEventswhenStopClicked"></block>
    <block type="${eventsID}_MoreEventsforever"></block>
            ${blockSeparator}
            
    <block type="event_whenkeypressed"></block>
    <block type="${eventsID}_MoreEventswhenKeyAction">
        <value name="KEY_OPTION">
            <shadow type="${eventsID}_menu_keyboardButtons">
                <field name="keyboardButtons">space</field>
            </shadow>
        </value>
    </block>
    <block type="${eventsID}_MoreEventswhileKeyPressed">
        <value name="KEY_OPTION">
            <shadow type="${eventsID}_menu_keyboardButtons">
                <field name="keyboardButtons">space</field>
            </shadow>
        </value>
    </block>
            ${blockSeparator}
            
    <block type="${eventsID}_MoreEventswhenTrueFalse">
        <value name="CONDITION"></value>
    </block>
    <block type="${eventsID}_MoreEventswhileTrueFalse">
        <value name="CONDITION"></value>
    </block>
    <block type="${eventsID}_MoreEventswhenValueChanged">
        <value name="INPUT"></value>
    </block>
            ${isStage ? `
                
    <block type="event_whenstageclicked"/>
            ` : `
                
    <block type="event_whenthisspriteclicked"/>
            `}
            
    <block type="event_whenbackdropswitchesto"></block>
            ${blockSeparator}
            
    <block type="event_whengreaterthan">
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
            ${blockSeparator}
            
    <block type="event_whenbroadcastreceived"></block>
    <block type="event_broadcast">
        <value name="BROADCAST_INPUT">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
    </block>
    <block type="event_broadcastandwait">
        <value name="BROADCAST_INPUT">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
    </block>
    <block type="${eventsID}_MoreEvents_broadcastToTarget">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${eventsID}_menu_targetMenu"></shadow>
        </value>
    </block>
    <block type="${eventsID}_MoreEvents_broadcastToTargetAndWait">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${eventsID}_menu_targetMenu"></shadow>
        </value>
    </block>
    ${blockSeparator}
    <block type="${eventsID}_MoreEvents_broadcastData">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
    <block type="${eventsID}_MoreEvents_broadcastDataAndWait">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
    <block type="${eventsID}_MoreEventsreceivedData"></block>
    ${blockSeparator}
    <block type="${eventsID}_MoreEvents_broadcastDataToTarget">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${eventsID}_menu_targetMenu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
    <block type="${eventsID}_MoreEvents_broadcastDataToTargetAndWait">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${eventsID}_menu_targetMenu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
            ${categorySeparator}
        
</category>
    `;
};
class TurboChargedLooks {
    getInfo() {
        return {
            id: 'looks',
            name: 'Looks 🪄',
            color1: Colors.looks.primary,
            color2: Colors.looks.secondary,
            color3: Colors.looks.tertiary,
            blocks: []
        }
    }
}

const looks = function(isInitialSetup, isStage, targetId, costumeName, backdropName) {
    const hello = ScratchBlocks.ScratchMsgs.translate('LOOKS_HELLO', 'Hello!');
    const hmm = ScratchBlocks.ScratchMsgs.translate('LOOKS_HMM', 'Hmm...');
    return `
<category name="%{BKY_CATEGORY_LOOKS} 🪄" id="looks" ${Colors.looks.xml}>
${isStage ? '' : `
<block type="looks_sayforsecs">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${hello}</field>
        </shadow>
    </value>
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">2</field>
        </shadow>
    </value>
</block>
<block type="looks_say">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${hello}</field>
        </shadow>
    </value>
</block>
<block type="looks_thinkforsecs">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${hmm}</field>
        </shadow>
    </value>
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">2</field>
        </shadow>
    </value>
</block>
<block type="looks_think">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${hmm}</field>
        </shadow>
    </value>
</block>
${blockSeparator}
`}
${isStage ? `
    <block type="looks_switchbackdropto">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${backdropName}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_switchbackdroptoandwait">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${backdropName}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextbackdrop"/>
` : `
    <block id="${targetId}_switchcostumeto" type="looks_switchcostumeto">
        <value name="COSTUME">
            <shadow type="looks_costume">
                <field name="COSTUME">${costumeName}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextcostume"/>
    <block type="looks_switchbackdropto">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${backdropName}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextbackdrop"/>
    ${blockSeparator}
    <block type="looks_changesizeby">
        <value name="CHANGE">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="looks_setsizeto">
        <value name="SIZE">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
`}
${blockSeparator}
<block type="looks_changeeffectby">
    <value name="CHANGE">
        <shadow type="math_number">
            <field name="NUM">25</field>
        </shadow>
    </value>
</block>
<block type="looks_seteffectto">
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
<block type="looks_cleargraphiceffects"/>
${blockSeparator}
${isStage ? '' : `
    <block type="looks_show"/>
    <block type="looks_hide"/>
${blockSeparator}
    <block type="looks_gotofrontback"/>
    <block type="looks_goforwardbackwardlayers">
        <value name="NUM">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
`}
${isStage ? `
    <block id="backdropnumbername" type="looks_backdropnumbername"/>
` : `
    <block id="${targetId}_costumenumbername" type="looks_costumenumbername"/>
    <block id="backdropnumbername" type="looks_backdropnumbername"/>
    <block id="${targetId}_size" type="looks_size"/>
`}
${categorySeparator}
</category>
`;
};
class TurboChargedMotion {
    getInfo() {
        return {
            id: 'motion',
            name: 'Motion 🪄',
            color1: Colors.motion.primary,
            color2: Colors.motion.secondary,
            color3: Colors.motion.tertiary,
            blocks: [
                /* this block of code is for the credits category */
                {
                    //buttons dont need color change.
                    blockType: Scratch.BlockType.BUTTON,
                    text: 'Credits',
                    func: 'credit',
                }, {
                    disableMonitor: true,
                    opcode: 'credit_version',
                    func: 'credit_version',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'TurboCharged Version',
                    isDynamic: true,
                    color1: '#ffb6c1'
                },
                /* end credit blocks and start variables */
                /* this block of code is for the variables category */
                {
                    hideFromPalette: true,
                    disableMonitor: true,
                    opcode: 'data_test',
                    func: 'data_test',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Test',
                    isDynamic: true,
                    color1: Colors.data.primary
                },
                {
                    disableMonitor: true,
                    opcode: 'data_getVariable',
                    func: 'data_getVariable',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'var [VARIABLE]',
                    isDynamic: true,
                    color1: Colors.data.primary,
                    color2: Colors.data.secondary,
                    color3: Colors.data.tertiary,
                    arguments: {
                        VARIABLE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'my variable'
                        }
                    },
                },
                {
                    disableMonitor: true,
                    opcode: 'data_deleteVariable',
                    func: 'data_deleteVariable',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'delete variable [VARIABLE]',
                    isDynamic: true,
                    color1: Colors.data.primary,
                    color2: Colors.data.secondary,
                    color3: Colors.data.tertiary,
                    arguments: {
                        VARIABLE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'my variable'
                        }
                    },
                },
                {
                    disableMonitor: true,
                    opcode: 'data_hasVariable',
                    func: 'data_hasVariable',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'variable [VARIABLE] exists?',
                    isDynamic: true,
                    color1: Colors.data.primary,
                    color2: Colors.data.secondary,
                    color3: Colors.data.tertiary,
                    arguments: {
                        VARIABLE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'my variable'
                        }
                    },
                },
                /* end variables blocks and start motion */
                {
                    opcode: 'rotationStyle',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'rotation style'
                }, {
                    opcode: 'moremotionchangexy',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'change x: [X] y: [Y]',
                    arguments: {
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotionpointto',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'point towards x: [X] y: [Y]',
                    arguments: {
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotionfence',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'manually fence'
                }, {
                    opcode: 'moremotionsteptowards',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'move [STEPS] steps towards x: [X] y: [Y]',
                    arguments: {
                        STEPS: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        },
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotiontweentowards',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'move [PERCENT]% of the way to x: [X] y: [Y]',
                    arguments: {
                        PERCENT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        },
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotiondirectionto',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'direction to x: [X] y: [Y]',
                    arguments: {
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotiondistanceto',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'distance from x: [X] y: [Y]',
                    arguments: {
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotionspritewh',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'sprite [WHAT]',
                    disableMonitor: true,
                    arguments: {
                        WHAT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'moremotionWHAT'
                        }
                    }
                }, {
                    opcode: 'moremotiontouchingxy',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'touching x: [X] y: [Y]?',
                    arguments: {
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    }
                }, {
                    opcode: 'moremotiontouchingrect',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'touching rectangle x1: [X1] y1: [Y1] x2: [X2] y2: [Y2]?',
                    arguments: {
                        X1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '-100'
                        },
                        Y1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '-100'
                        },
                        X2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '100'
                        },
                        Y2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '100'
                        }
                    }
                }
            ],
            menus: {
                variablesMenu: {
                    acceptReporters: true,
                    items: 'getVariables'
                },
                moremotionWHAT: {
                    acceptreporters: true,
                    items: [
                        'width', 'height', 'costume width', 'costume height'
                    ]
                }
            }
        }
    }
    /* this block of code is for the credits category */
    doNothing() {}
    credit() {
        credits_blob();
    }
    credit_version() {
        return version;
    }
    /* end credit blocks and start variables */
    /* this block of code is for the variables category */
    getVariables() {
        // @ts-expect-error - Blockly not typed yet
        // eslint-disable-next-line no-undef
        const variables = vm.runtime.getEditingTarget().getAllVariableNamesInScopeByType('', '');
        if (variables.length > 0) {
            return variables;
        } else {
            return [{
                text: "",
                value: ""
            }];
        }
    }
    data_test(args, util) {
        vm.runtime.visualReport(util.thread.peekStack(), 'Custom block in variables???');
    }
    data_getVariable(args, util) {
        let variable = getVariableByName(args.VARIABLE, util.target);
        if (variable == null || variable == undefined) return '';
        return variable.value;
        vm.runtime.visualReport(util.thread.peekStack(), 'W.I.P');
    }
    data_hasVariable(args, util) {
        return util.target.getAllVariableNamesInScopeByType('', '').includes(args.VARIABLE);
    }
    data_createVariable(args, util) {
        vm.runtime.visualReport(util.thread.peekStack(), 'W.I.P');
    }
    data_deleteVariable(args, util) {
        deleteVariableByName(args.VARIABLE, util.target);
    }
    /* end variables blocks and start motion */

    rotationStyle(args, util) {
        return util.target.rotationStyle;
    }
    //more motion extension
    moremotionchangexy(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        util.target.setXY(util.target.x + x, util.target.y + y);
    }

    // LORAX APPROVED
    moremotionpointto(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        if (util.target.y > y) {
            util.target.setDirection(((180 / Math.PI) * Math.atan((x - util.target.x) / (y - util.target.y))) + 180);
        } else {
            util.target.setDirection(((180 / Math.PI) * Math.atan((x - util.target.x) / (y - util.target.y))));
        }
    }

    moremotionfence(args, util) {
        const newpos = Scratch.vm.renderer.getFencedPositionOfDrawable(util.target.drawableID, [util.target.x, util.target.y]);
        util.target.setXY(newpos[0], newpos[1]);
    }

    moremotiondirectionto(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        if (util.target.y > y) {
            return ((180 / Math.PI) * Math.atan((x - util.target.x) / (y - util.target.y))) + 180;
        } else {
            return ((180 / Math.PI) * Math.atan((x - util.target.x) / (y - util.target.y)));
        }
    }

    moremotiondistanceto(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        // Shoutout to Pythagoras!
        return Math.sqrt(((x - util.target.x) ** 2) + ((y - util.target.y) ** 2));
    }

    moremotionsteptowards(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        const steps = Scratch.Cast.toNumber(args.STEPS);
        const val = steps / (Math.sqrt(((x - util.target.x) ** 2) + ((y - util.target.y) ** 2)));
        if (val >= 1) {
            util.target.setXY(x, y);
        } else {
            util.target.setXY(((x - util.target.x) * (val)) + util.target.x, ((y - util.target.y) * (val)) + util.target.y);
        }
    }

    moremotiontweentowards(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        const val = Scratch.Cast.toNumber(args.PERCENT);
        // Essentially a smooth glide script.
        util.target.setXY(((x - util.target.x) * (val / 100)) + util.target.x, ((y - util.target.y) * (val / 100)) + util.target.y);
    }

    moremotiontouchingrect(args, util) {
        let left = Scratch.Cast.toNumber(args.X1);
        let right = Scratch.Cast.toNumber(args.X2);
        let bottom = Scratch.Cast.toNumber(args.Y1);
        let top = Scratch.Cast.toNumber(args.Y2);

        // Fix argument order if they got it backwards
        if (left > right) {
            let temp = left;
            left = right;
            right = temp;
        }
        if (bottom > top) {
            let temp = bottom;
            bottom = top;
            bottom = temp;
        }

        const drawable = Scratch.vm.renderer._allDrawables[util.target.drawableID];
        if (!drawable) {
            return false;
        }

        // See renderer.isTouchingDrawables

        const drawableBounds = drawable.getFastBounds();
        drawableBounds.snapToInt();

        // This is bad, need to rewrite this when renderer exports Rectangle
        const Rectangle = Object.getPrototypeOf(drawableBounds).constructor;

        /** @type {RenderWebGL.Rectangle} */
        const containsBounds = new Rectangle();
        containsBounds.initFromBounds(left, right, bottom, top);
        containsBounds.snapToInt();

        if (!containsBounds.intersects(drawableBounds)) {
            return false;
        }

        drawable.updateCPURenderAttributes();

        /** @type {RenderWebGL.Rectangle} */
        const intersectingBounds = Rectangle.intersect(drawableBounds, containsBounds);
        for (let x = intersectingBounds.left; x < intersectingBounds.right; x++) {
            for (let y = intersectingBounds.bottom; y < intersectingBounds.top; y++) {
                // technically should be a twgl vec3, but does not actually need to be
                if (drawable.isTouching([x, y])) {
                    return true;
                }
            }
        }
        return false;
    }

    moremotiontouchingxy(args, util) {
        const x = Scratch.Cast.toNumber(args.X);
        const y = Scratch.Cast.toNumber(args.Y);
        const drawable = Scratch.vm.renderer._allDrawables[util.target.drawableID];
        if (!drawable) {
            return false;
        }
        // Position should technically be a twgl vec3, but it doesn't actually need to be
        drawable.updateCPURenderAttributes();
        return drawable.isTouching([x, y]);
    }

    moremotionspritewh(args, util) {
        if (args.WHAT === 'width' || args.WHAT === 'height') {
            const bounds = Scratch.vm.renderer.getBounds(util.target.drawableID);
            if (args.WHAT === 'width') {
                return Math.ceil(bounds.width);
            } else {
                return Math.ceil(bounds.height);
            }
        } else if (args.WHAT === 'costume width' || args.WHAT === 'costume height') {
            const costume = util.target.sprite.costumes[util.target.currentCostume];
            if (args.WHAT === 'costume width') {
                return Math.ceil(costume.size[0]);
            } else {
                return Math.ceil(costume.size[1]);
            }
        }
    }
    //end block
}

class TurboChargedCredits {
    getInfo() {
        return {
            id: '_credits',
            name: 'Credits 🪄',
            color1: '#4C97FF',
            color2: '#3373CC',
            blocks: []
        }
    }
}

const credits = function(isInitialSetup, isStage, targetId) {
    return `
<category name="Credits 🪄" id="credits" colour="#ffb6c1" secondaryColour="#ffc0cb"> //oooooo :D
<label text="/!\\ THIS IS ENGLISH ONLY /!\\"></label>
<button text="Credits" callbackKey="EXTENSION_CALLBACK" callbackData="motion_credit"></button>
<block type="motion_credit_version">
<mutation blockInfo='{"blockType":"reporter","terminal":false,"blockAllThreads":false,"arguments":{},"opcode":"credit_version","text":"TurboCharged Version","isDynamic":true,"color1":"#ffb6c1","isTerminal":false,"disableMonitor":true}'/> // this was extremely annoying but worth it.
</block>
${categorySeparator}
</category>`;
}

const motion = function(isInitialSetup, isStage, targetId) {
    const stageSelected = ScratchBlocks.Msg.MOTION_STAGE_SELECTED;
    return `
${credits(isInitialSetup, isStage, targetId)}
<category name="%{BKY_CATEGORY_MOTION} 🪄" id="motion" ${Colors.motion.xml}>
${isStage ? `
<label text="${stageSelected}"></label>
` : `
<block type="motion_movesteps">
    <value name="STEPS">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="motion_moremotionsteptowards">
<value name="STEPS">
    <shadow type="math_number">
<field name="NUM">10</field>
</shadow>
</value>
<value name="X">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="motion_changexby">
    <value name="DX">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="motion_setx">
    <value name="X">
        <shadow id="setx" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
<block type="motion_changeyby">
    <value name="DY">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="motion_sety">
    <value name="Y">
        <shadow id="sety" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
        <block type="motion_moremotionchangexy">
<value name="X">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
${blockSeparator}
<block type="motion_goto">
    <value name="TO">
        <shadow type="motion_goto_menu">
        </shadow>
    </value>
</block>
<block type="motion_gotoxy">
    <value name="X">
        <shadow id="movex" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    <value name="Y">
        <shadow id="movey" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
<block type="motion_glideto" id="motion_glideto">
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="TO">
        <shadow type="motion_glideto_menu">
        </shadow>
    </value>
</block>
<block type="motion_glidesecstoxy">
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="X">
        <shadow id="glidex" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    <value name="Y">
        <shadow id="glidey" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="motion_moremotiontweentowards">
<value name="PERCENT">
    <shadow type="math_number">
<field name="NUM">10</field>
</shadow>
</value>
<value name="X">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
${blockSeparator}
<block id="${targetId}_xposition" type="motion_xposition"/>
<block id="${targetId}_yposition" type="motion_yposition"/>
${blockSeparator}
<block type="motion_moremotiontouchingxy">
<value name="X">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="motion_moremotiontouchingrect">
    <value name="X1">
        <shadow type="math_number">
<field name="NUM">-100</field>
</shadow>
    </value>
    <value name="Y1">
        <shadow type="math_number">
<field name="NUM">-100</field>
</shadow>
    </value>
    <value name="X2">
        <shadow type="math_number">
<field name="NUM">100</field>
</shadow>
    </value>
    <value name="Y2">
        <shadow type="math_number">
<field name="NUM">100</field>
</shadow>
    </value>
</block>
${blockSeparator}
<block type="motion_pointindirection">
    <value name="DIRECTION">
        <shadow type="math_angle">
            <field name="NUM">90</field>
        </shadow>
    </value>
</block>
<block type="motion_pointtowards">
    <value name="TOWARDS">
        <shadow type="motion_pointtowards_menu">
        </shadow>
    </value>
</block>
<block type="motion_moremotionpointto">
<value name="X">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="motion_moremotiondirectionto">
<value name="X">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="motion_turnright">
    <value name="DEGREES">
        <shadow type="math_number">
            <field name="NUM">15</field>
        </shadow>
    </value>
</block>
<block type="motion_turnleft">
    <value name="DEGREES">
        <shadow type="math_number">
            <field name="NUM">15</field>
        </shadow>
    </value>
</block>
<block id="${targetId}_direction" type="motion_direction"/>
${blockSeparator}
<block type="motion_setrotationstyle"/>
<block id="${targetId}_rotationStyle" type="motion_rotationStyle"/>
<block type="motion_moremotionspritewh">
<value name="WHAT">
    <shadow type="motion_menu_moremotionWHAT">
</shadow>
</value>
</block>
${blockSeparator}
<block type="motion_ifonedgebounce"/>
${blockSeparator}
<block type="motion_moremotionfence">
</block>
`}
${categorySeparator}
</category>
`;
}

class TurboChargedOperators {
    getInfo() {
        return {
            id: 'operators',
            name: 'Operators 🪄',
            color1: Colors.operators.primary,
            color2: Colors.operators.secondary,
            color3: Colors.operators.tertiary,
            blocks: [{
                    opcode: 'percentof',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[PERCENT]% of [AMOUNT]?',
                    disableMonitor: true,
                    arguments: {
                        PERCENT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        },
                        AMOUNT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '50'
                        }
                    }
                },
                /*{
                    opcode: 'percentin',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[AMOUNT] is what percent of [MAX]?',
                    disableMonitor: true,
                    arguments: {
                        PERCENT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        },
                        MAX: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '50'
                        }
                    }
                },*/
                {
                    opcode: 'percentis',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[AMOUNT] is [PERCENT]% of what?',
                    disableMonitor: true,
                    arguments: {
                        PERCENT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '5'
                        },
                        MAX: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        }
                    }
                }, {
                    opcode: 'percentUD',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[AMOUNT] [MODE] by [PERCENT]%?',
                    disableMonitor: true,
                    arguments: {
                        AMOUNT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '45'
                        },
                        MODE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'percentMode'
                        },
                        PERCENT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '11.11'
                        }
                    }
                }, {
                    opcode: 'clamp',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'clamp [NUM] between [MIN] and [MAX]',
                    arguments: {
                        NUM: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 30
                        },
                        MIN: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 25
                        },
                        MAX: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 40
                        }
                    }
                }, {
                    opcode: 'egg',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'egg [TEXT]',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '🥚'
                        }
                    }
                }, {
                    opcode: 'gtEqual',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[OPERAND1] ≥ [OPERAND2]',
                    arguments: {
                        OPERAND1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ''
                        },
                        OPERAND2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '50'
                        }
                    }
                }, {
                    opcode: 'ltEqual',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[OPERAND1] ≤ [OPERAND2]',
                    arguments: {
                        OPERAND1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ''
                        },
                        OPERAND2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '50'
                        }
                    }
                }, {
                    opcode: 'nor',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[OPERAND1] nor [OPERAND2]',
                    arguments: {
                        OPERAND1: {
                            type: Scratch.ArgumentType.BOOLEAN,
                            defaultValue: ''
                        },
                        OPERAND2: {
                            type: Scratch.ArgumentType.BOOLEAN,
                            defaultValue: '50'
                        }
                    }
                }, {
                    opcode: 'xor',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[OPERAND1] xor [OPERAND2]',
                    arguments: {
                        OPERAND1: {
                            type: Scratch.ArgumentType.BOOLEAN,
                            defaultValue: ''
                        },
                        OPERAND2: {
                            type: Scratch.ArgumentType.BOOLEAN,
                            defaultValue: '50'
                        }
                    }
                }, {
                    opcode: 'substring',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'letters [START] to [END] of [STRING]',
                    arguments: {
                        START: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '1'
                        },
                        END: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '3'
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'apple'
                        }
                    }
                }, {
                    opcode: 'replace',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'replace [INPUT1] with [INPUT2] in [STRING]',
                    arguments: {
                        INPUT1: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Charged'
                        },
                        INPUT2: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Warp'
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'TurboCharged'
                        }
                    }
                }, {
                    opcode: 'true_block',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'true'
                }, {
                    opcode: 'false_block',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'false'
                }, {
                    opcode: 'bool_coupler',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[TEXT]',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'true'
                        }
                    }
                }, {
                    opcode: 'ifthenelse_reporter',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'if [CONDITION] then [TEXT1] else [TEXT2]',
                    arguments: {
                        CONDITION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        },
                        TEXT1: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'pass'
                        },
                        TEXT2: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'fail'
                        }
                    }
                }, {
                    opcode: 'test',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'test click me',
                    callback: 'test'
                }, {
                    opcode: 'presadd',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[A] + [B]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.2'
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        },
                    }
                }, {
                    opcode: 'pressubtract',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[A] - [B]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.4'
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        },
                    }
                }, {
                    opcode: 'presmultiply',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[A] * [B]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.3'
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        },
                    }
                }, {
                    opcode: 'presdivided',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[A] / [B] to precision of [PRE]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '10'
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '3'
                        },
                        PRE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '10'
                        },
                    }
                }, {
                    opcode: "textplusletters_of",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "letters [LETTER1] to [LETTER2] of [STRING]",
                    arguments: {
                        LETTER1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '2'
                        },
                        LETTER2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '4'
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        }
                    }
                }, {
                    opcode: "textplussplit",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "item [ITEM] of [STRING] split by [SPLIT]",
                    arguments: {
                        ITEM: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '3'
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        },
                        SPLIT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "p"
                        }
                    }
                }, {
                    opcode: "textpluscount",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "count [SUBSTRING] in [STRING]",
                    arguments: {
                        SUBSTRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "p"
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        }
                    }
                }, {
                    opcode: "textplusindexof",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "index of [SUBSTRING] in [STRING]",
                    arguments: {
                        SUBSTRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "p"
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        }
                    }
                }, {
                    opcode: "textplusreplace",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "replace [SUBSTRING] in [STRING] with [REPLACE]",
                    arguments: {
                        SUBSTRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "world"
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello world!"
                        },
                        REPLACE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "fellow Scratchers"
                        }
                    }
                }, {
                    opcode: "textplusrepeat",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "repeat [STRING] [REPEAT] times",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple "
                        },
                        REPEAT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '3'
                        }
                    }
                }, {
                    opcode: "textplusunicodeof",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "unicode of [STRING]",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "A"
                        }
                    }
                }, {
                    opcode: "textplusunicodefrom",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "unicode [NUM] as letter",
                    arguments: {
                        NUM: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '65'
                        }
                    }
                }, {
                    opcode: "textplusreplaceRegex",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "replace regex /[REGEX]/[FLAGS] in [STRING] with [REPLACE]",
                    arguments: {
                        REGEX: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "."
                        },
                        FLAGS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "g"
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello world!"
                        },
                        REPLACE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "$&$&"
                        }
                    }
                }, {
                    opcode: "textplusmatchRegex",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "item [ITEM] of [STRING] matched by regex /[REGEX]/[FLAGS]",
                    arguments: {
                        ITEM: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello world!"
                        },
                        REGEX: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "(.) (.{2})"
                        },
                        FLAGS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "g"
                        }
                    }
                }, {
                    opcode: "textpluscountRegex",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "count regex /[REGEX]/[FLAGS] in [STRING]",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello world!"
                        },
                        REGEX: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "[AEIOU]"
                        },
                        FLAGS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "i"
                        }
                    }
                }, {
                    opcode: "textplustestRegex",
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "[STRING] matches regex /[REGEX]/[FLAGS]?",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello world!"
                        },
                        REGEX: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "hello"
                        },
                        FLAGS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "i"
                        }
                    }
                }, {
                    opcode: "textplusidentical",
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "is [OPERAND1] identical to [OPERAND2]?",
                    arguments: {
                        OPERAND1: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "A"
                        },
                        OPERAND2: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "a"
                        }
                    }
                }, {
                    opcode: "textplusisCase",
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "is [STRING] [TEXTCASE]?",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        },
                        TEXTCASE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "textCase",
                            defaultValue: vm.TurboCharged.extensionData.textPlus.CaseParam.LOWERCASE
                        }
                    }
                }, {
                    opcode: "textplustoCase",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "convert [STRING] to [TEXTCASE]",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        },
                        TEXTCASE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "textCase",
                            defaultValue: vm.TurboCharged.extensionData.textPlus.CaseParam.UPPERCASE
                        }
                    }
                }, {
                    opcode: 'casttoType',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'cast [INPUT] to [TYPE]',
                    allowDropAnywhere: true,
                    disableMonitor: true,
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'apple'
                        },
                        TYPE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'castType'
                        }
                    }
                }, {
                    opcode: 'casttypeOf',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'type of [INPUT]',
                    disableMonitor: true,
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'apple'
                        }
                    }
                }, {
                    opcode: 'tweenValue',
                    text: '[MODE] ease [DIRECTION] [START] to [END] by [AMOUNT]%',
                    disableMonitor: true,
                    blockType: Scratch.BlockType.REPORTER,
                    arguments: {
                        MODE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'tweenmodes'
                        },
                        DIRECTION: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'tweendirection'
                        },
                        START: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        END: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                        AMOUNT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                    }
                }
            ],
            menus: {
                percentMode: {
                    acceptReporters: true,
                    items: [{
                        text: "increased",
                        value: "increased"
                    }, {
                        text: "decreased",
                        value: "decreased"
                    }]
                },
                textCase: {
                    acceptReporters: true,
                    items: [{
                        text: "lowercase",
                        value: vm.TurboCharged.extensionData.textPlus.CaseParam.LOWERCASE
                    }, {
                        text: "UPPERCASE",
                        value: vm.TurboCharged.extensionData.textPlus.CaseParam.UPPERCASE
                    }, {
                        text: "Title Case",
                        value: vm.TurboCharged.extensionData.textPlus.CaseParam.TITLECASE
                    }, {
                        text: "Exactly Title Case",
                        value: vm.TurboCharged.extensionData.textPlus.CaseParam.EXACTTITLECASE
                    }, {
                        text: "MiXeD CaSe",
                        value: vm.TurboCharged.extensionData.textPlus.CaseParam.MIXEDCASE
                    }]
                },
                castType: {
                    acceptReporters: true,
                    items: [
                        'number', 'string', 'boolean', 'default'
                    ]
                },
                tweenmodes: {
                    acceptReporters: true,
                    items: [
                        "linear", "sine", "quad", "cubic", "quart", "quint", "expo", "circ", "back", "elastic", "bounce"
                    ]
                },
                tweendirection: {
                    acceptReporters: true,
                    items: [
                        "in", "out", "in out"
                    ]
                }
            }
        };
    }

    clamp(args, util) {
        const NUM = args.NUM;
        const MIN = args.MIN;
        const MAX = args.MAX;
        if (MIN > MAX) {
            return Scratch.Cast.toNumber(Math.min(Math.max(NUM, MAX), MIN));
        } else {
            return Scratch.Cast.toNumber(Math.min(Math.max(NUM, MIN), MAX));
        }
    }
    ifthenelse_reporter({
        CONDITION,
        TEXT1,
        TEXT2
    }, util) {
        return (CONDITION ? TEXT1 : TEXT2);
    }
    egg({
        TEXT
    }, util) {
        alert(`${TEXT} is🥚`)
        return '🥚';
        //return Scratch.Cast.toNumber(NUM);
    }
    gtEqual(args, util) {
        return (args.OPERAND1 <= args.OPERAND2);
    }
    ltEqual(args, util) {
        return (args.OPERAND1 >= args.OPERAND2);
    }
    nor(args, util) {
        return !(args.OPERAND1 || args.OPERAND2);
    }
    xor(args, util) {
        return (args.OPERAND1 !== args.OPERAND1);
    }
    substring(args, util) {
        const START = args.START;
        const END = args.END;
        const STRING = args.STRING;
        return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
    }
    replace(args, util) {
        const INPUT1 = args.INPUT1
        const INPUT2 = args.INPUT2
        const STRING = args.STRING;
        return STRING.toString().replace(new RegExp(INPUT1, 'gi'), INPUT2);
    }
    true_block() {
        return true;
    }
    false_block() {
        return false;
    }
    bool_coupler({
        TEXT
    }) {
        return Scratch.Cast.toBoolean(TEXT);
    }
    test() {
        alert(1);
    }
    percentof(args) {
        return (Scratch.Cast.toNumber(args.AMOUNT) * Scratch.Cast.toNumber(args.PERCENT)) / 100;
    }
    percentis(args) {
        return (Scratch.Cast.toNumber(args.AMOUNT) * 100) / Scratch.Cast.toNumber(args.PERCENT);
    }
    percentin(args) {
        return (Scratch.Cast.toNumber(args.AMOUNT) * 100) / Scratch.Cast.toNumber(args.PERCENT);
    }
    percentUD(args) {
        args.AMOUNT = Scratch.Cast.toNumber(args.AMOUNT);
        args.PERCENT = Scratch.Cast.toNumber(args.PERCENT);
        var x = args.AMOUNT,
            p = args.PERCENT;
        var y1 = x * ((100 + p) / 100);
        var y2 = x * ((100 - p) / 100);
        switch (args.MODE) {
            case 'increased':
                return y1;
            case 'decreased':
                return y2;
            default:
                return y1;
        }
    }
    //start other extensions
    //high presicion extension
    presadd(args) {
        var num1 = Scratch.Cast.toString(args.A),
            num2 = Scratch.Cast.toString(args.B);
        let isNegative1 = false;
        let isNegative2 = false;
        if (num1[0] === '-') isNegative1 = true, num1 = num1.slice(1);
        if (num2[0] === '-') isNegative2 = true, num2 = num2.slice(1);
        let [intPart1, decimalPart1] = num1.split('.');
        let [intPart2, decimalPart2] = num2.split('.');
        if (!decimalPart1) decimalPart1 = '0';
        if (!decimalPart2) decimalPart2 = '0';
        const maxDecimalLength = Math.max(decimalPart1.length, decimalPart2.length);
        decimalPart1 = decimalPart1.padEnd(maxDecimalLength, '0');
        decimalPart2 = decimalPart2.padEnd(maxDecimalLength, '0');
        const combined1 = (isNegative1 ? '-' : '') + intPart1 + decimalPart1;
        const combined2 = (isNegative2 ? '-' : '') + intPart2 + decimalPart2;
        const sumBigInt = BigInt(combined1) + BigInt(combined2);
        let result = sumBigInt.toString();
        result = result.slice(0, -maxDecimalLength) + '.' + result.slice(-maxDecimalLength);
        if (result[0] == '.') result = '0' + result;
        const regex = /^[-0.0]*$/;
        if (regex.test(result)) return "0";
        return result;
    }
    pressubtract(args) {
        var num1 = Scratch.Cast.toString(args.A),
            num2 = Scratch.Cast.toString(args.B);
        let isNegative1 = false;
        let isNegative2 = false;
        if (num1[0] === '-') isNegative1 = true, num1 = num1.slice(1);
        if (num2[0] === '-') isNegative2 = true, num2 = num2.slice(1);
        let [intPart1, decimalPart1] = num1.split('.');
        let [intPart2, decimalPart2] = num2.split('.');
        if (!decimalPart1) decimalPart1 = '0';
        if (!decimalPart2) decimalPart2 = '0';
        const maxDecimalLength = Math.max(decimalPart1.length, decimalPart2.length);
        decimalPart1 = decimalPart1.padEnd(maxDecimalLength, '0');
        decimalPart2 = decimalPart2.padEnd(maxDecimalLength, '0');
        const combined1 = (isNegative1 ? '-' : '') + intPart1 + decimalPart1;
        const combined2 = (isNegative2 ? '-' : '') + intPart2 + decimalPart2;
        const differenceBigInt = BigInt(combined1) - BigInt(combined2);
        let result = differenceBigInt.toString();
        result = result.slice(0, -maxDecimalLength) + '.' + result.slice(-maxDecimalLength);
        if (result[0] == '.') result = '0' + result;
        const regex = /^[-0.0]*$/;
        if (regex.test(result)) return "0";
        return result;
    }
    presmultiply(args) {
        var num1 = Scratch.Cast.toString(args.A),
            num2 = Scratch.Cast.toString(args.B);
        let isNegative1 = false;
        let isNegative2 = false;
        if (num1[0] === '-') isNegative1 = true, num1 = num1.slice(1);
        if (num2[0] === '-') isNegative2 = true, num2 = num2.slice(1);
        let [intPart1, decimalPart1] = num1.split('.');
        let [intPart2, decimalPart2] = num2.split('.');
        if (!decimalPart1) decimalPart1 = '0';
        if (!decimalPart2) decimalPart2 = '0';
        const decimalLength = decimalPart1.length + decimalPart2.length;
        intPart1 = intPart1.replace(/^0+/, '');
        intPart2 = intPart2.replace(/^0+/, '');
        const intProduct = BigInt(intPart1) * BigInt(intPart2);
        let decimalProduct = BigInt(decimalPart1) * BigInt(decimalPart2);
        decimalProduct = decimalProduct.toString().padStart(decimalLength, '0');
        let result = (isNegative1 !== isNegative2 ? '-' : '') + intProduct.toString();
        if (decimalLength > 0) result += '.' + decimalProduct;
        const regex = /^[-0.0]*$/;
        if (regex.test(result)) return "0";
        return result;
    }
    presdivided(args) {
        var dividend = Scratch.Cast.toString(args.A),
            divisor = Scratch.Cast.toString(args.B);
        var precision = Scratch.Cast.toNumber(args.PRE);
        const dividendNum = parseFloat(dividend);
        const divisorNum = parseFloat(divisor);
        if (divisorNum === 0) return 'divisor can\'t is zero';
        const resultNum = dividendNum / divisorNum;
        let result = resultNum.toFixed(precision).toString();
        var last = '.' + '0'.repeat(precision);
        result = result.replace(/(\.[0-9]*[1-9])0+$/, '$1');
        if (result.endsWith(last)) return result.split(last)[0];
        return result;
    }
    //end block
    //text+ extension
    textplusidentical(args, util) {
        // Purposefully no casting, because
        // types ARE differentiated in this block
        return args.OPERAND1 === args.OPERAND2;
    }
    textplusunicodeof(args, util) {
        const chars = Array.from(args.STRING.toString());
        return chars.map((char) => char.charCodeAt(0)).join(" ");
    }
    textplusunicodefrom(args, util) {
        return String.fromCharCode(Number(args.NUM) || 0);
    }
    textplusletters_of(args, util) {
        args.STRING = args.STRING.toString();
        args.LETTER1 = Number(args.LETTER1) || 0;
        args.LETTER2 = Number(args.LETTER2) || 0;
        return args.STRING.substring(args.LETTER1 - 1, args.LETTER2);
    }
    _caseInsensitiveRegex(str) {
        return new RegExp(
            str.replaceAll(/[^a-zA-Z0-9]/g, "\\$&"), "gi"
        );
    }
    textplussplit(args, util) {
        args.STRING = (args.STRING ?? "").toString();
        args.SPLIT = (args.SPLIT ?? "").toString();
        args.ITEM = Number(args.ITEM) || 0;
        // Cache the last split
        if (!(
                vm.TurboCharged.extensionData.textPlus.splitCache &&
                vm.TurboCharged.extensionData.textPlus.splitCache.string === args.STRING &&
                vm.TurboCharged.extensionData.textPlus.splitCache.split === args.SPLIT
            )) {
            const regex = this._caseInsensitiveRegex(args.SPLIT);
            vm.TurboCharged.extensionData.textPlus.splitCache = {
                string: args.STRING,
                split: args.SPLIT,
                arr: args.STRING.split(regex)
            };
        }
        return vm.TurboCharged.extensionData.textPlus.splitCache.arr[args.ITEM - 1] || "";
    }
    textpluscount(args, util) {
        // Fill cache
        this.split({
            SPLIT: args.SUBSTRING,
            STRING: args.STRING,
            ITEM: 0
        }, util);
        return (vm.TurboCharged.extensionData.textPlus.splitCache.arr.length - 1) || 0;
    }
    textplusreplace(args, util) {
        args.STRING = args.STRING.toString();
        args.SUBSTRING = args.SUBSTRING.toString();
        args.REPLACE = args.REPLACE.toString();
        const regex = this._caseInsensitiveRegex(args.SUBSTRING);
        return args.STRING.replace(regex, args.REPLACE);
    }
    textplusindexof(args, util) {
        // .toLowerCase() for case insensitivity
        args.STRING = (args.STRING ?? "").toString().toLowerCase();
        args.SUBSTRING = (args.SUBSTRING ?? "").toString().toLowerCase();
        // Since both arguments are casted to strings beforehand,
        // we don't have to worry about type differences
        // like in the item number of in list block
        const found = args.STRING.indexOf(args.SUBSTRING);
        // indexOf returns -1 when no matches are found, we can just +1
        return found + 1;
    }
    textplusrepeat(args, util) {
        args.STRING = args.STRING.toString();
        args.REPEAT = Number(args.REPEAT) || 0;
        return args.STRING.repeat(args.REPEAT);
    }
    textplusreplaceRegex(args, util) {
        try {
            args.STRING = args.STRING.toString();
            args.REPLACE = args.REPLACE.toString();
            args.REGEX = args.REGEX.toString();
            args.FLAGS = args.FLAGS.toString();
            return args.STRING.replace(
                new RegExp(args.REGEX, args.FLAGS), args.REPLACE
            );
        } catch (e) {
            console.error(e);
            return "";
        }
    }
    textplusmatchRegex(args, util) {
        try {
            args.STRING = (args.STRING ?? "").toString();
            args.REGEX = (args.REGEX ?? "").toString();
            args.FLAGS = (args.FLAGS ?? "").toString();
            args.ITEM = Number(args.ITEM) || 0;
            // Cache the last matched string
            if (!(
                    vm.TurboCharged.extensionData.textPlus.matchCache &&
                    vm.TurboCharged.extensionData.textPlus.matchCache.string === args.STRING &&
                    vm.TurboCharged.extensionData.textPlus.matchCache.regex === args.REGEX &&
                    vm.TurboCharged.extensionData.textPlus.matchCache.flags === args.FLAGS
                )) {
                const newFlags = args.FLAGS.includes("g") ? args.FLAGS : args.FLAGS + "g";
                const regex = new RegExp(args.REGEX, newFlags);
                vm.TurboCharged.extensionData.textPlus.matchCache = {
                    string: args.STRING,
                    regex: args.REGEX,
                    flags: args.FLAGS,
                    arr: args.STRING.match(regex) || []
                };
            }
            return vm.TurboCharged.extensionData.textPlus.matchCache.arr[args.ITEM - 1] || "";
        } catch (e) {
            console.error(e);
            return "";
        }
    }
    textpluscountRegex(args, util) {
        // Fill cache
        // (ITEM is casted into 0,
        // but we don't care about the return value)
        this.matchRegex(args, util);
        return vm.TurboCharged.extensionData.textPlus.matchCache.arr.length || 0;
    }
    textplustestRegex(args, util) {
        try {
            args.STRING = args.STRING.toString();
            args.REGEX = args.REGEX.toString();
            args.FLAGS = args.FLAGS.toString();
            return new RegExp(args.REGEX, args.FLAGS).test(args.STRING);
        } catch (e) {
            console.error(e);
            return false;
        }
    }
    textplusisCase(args, util) {
        const string = args.STRING.toString();
        const textCase = args.TEXTCASE.toString();
        switch (textCase) {
            case vm.TurboCharged.extensionData.textPlus.CaseParam.LOWERCASE:
                return string.toLowerCase() === string;
            case vm.TurboCharged.extensionData.textPlus.CaseParam.UPPERCASE:
                return string.toUpperCase() === string;
            case vm.TurboCharged.extensionData.textPlus.CaseParam.MIXEDCASE:
                return (!(
                    string.toUpperCase() === string ||
                    string.toLowerCase() === string
                ));
            case vm.TurboCharged.extensionData.textPlus.CaseParam.TITLECASE:
                return string.split(/\b/g).every((word) => {
                    if (!word) return true;
                    const titleCased = word[0].toUpperCase() + word.substring(1);
                    return word === titleCased;
                });
            case vm.TurboCharged.extensionData.textPlus.CaseParam.EXACTTITLECASE:
                return string.split(/\b/g).every((word) => {
                    if (!word) return true;
                    const titleCased = word[0].toUpperCase() + word.substring(1).toLowerCase();
                    return word === titleCased;
                });
            default:
                return false;
        }
    }
    textplustoCase(args, util) {
        const string = args.STRING.toString();
        const textCase = args.TEXTCASE.toString();
        switch (textCase) {
            case vm.TurboCharged.extensionData.textPlus.CaseParam.LOWERCASE:
                return string.toLowerCase();
            case vm.TurboCharged.extensionData.textPlus.CaseParam.UPPERCASE:
                return string.toUpperCase();
            case vm.TurboCharged.extensionData.textPlus.CaseParam.MIXEDCASE:
                return Array.from(string).map(
                    (char, index) => index % 2 === 0 ?
                    char.toUpperCase() :
                    char.toLowerCase()
                ).join("");
            case vm.TurboCharged.extensionData.textPlus.CaseParam.TITLECASE:
                return string.split(/\b/g).map((word) => {
                    if (!word) return '';
                    return word[0].toUpperCase() + word.substring(1);
                }).join("");
            case vm.TurboCharged.extensionData.textPlus.CaseParam.EXACTTITLECASE:
                return string.split(/\b/g).map((word) => {
                    if (!word) return '';
                    return word[0].toUpperCase() + word.substring(1).toLowerCase();
                }).join("");
            default:
                return string;
        }
    }
    //end block
    //cast extension
    casttoType(args) {
        const input = args.INPUT;
        switch (args.TYPE) {
            case ('number'):
                return Scratch.Cast.toNumber(input);
            case ('string'):
                return Scratch.Cast.toString(input);
            case ('boolean'):
                return Scratch.Cast.toBoolean(input);
            default:
                return input;
        }
    }
    casttypeOf(args) {
        const input = args.INPUT;
        switch (typeof input) {
            case ('number'):
                return 'number';
            case ('string'):
                return 'string';
            case ('boolean'):
                return 'boolean';
            default:
                return '';
        }
    }
    //end block
    //tween extension
    // utilities
    multiplierToNormalNumber(mul, start, end) {
        const multiplier = end - start;
        const result = (mul * multiplier) + start;
        return result;
    }
    // blocks
    tweenValue(args) {
        const easeMethod = Scratch.Cast.toString(args.MODE);
        const easeDirection = Scratch.Cast.toString(args.DIRECTION);
        const start = Scratch.Cast.toNumber(args.START);
        const end = Scratch.Cast.toNumber(args.END);
        // easing method does not exist, return starting number
        const EasingMethods = [
            "linear", "sine", "quad", "cubic", "quart", "quint", "expo", "circ", "back", "elastic", "bounce"
        ];
        if (!EasingMethods.includes(easeMethod)) return start;
        // easing method is not implemented, return starting number
        if (!this[easeMethod]) return start;
        const progress = Scratch.Cast.toNumber(args.AMOUNT) / 100;
        const tweened = this[easeMethod](progress, easeDirection);
        return this.multiplierToNormalNumber(tweened, start, end);
    }
    // easing functions (placed below blocks for organization)
    linear(x) {
        // lol
        return x;
    }
    sine(x, dir) {
        switch (dir) {
            case "in": {
                return 1 - Math.cos((x * Math.PI) / 2);
            }
            case "out": {
                return Math.sin((x * Math.PI) / 2);
            }
            case "in out": {
                return -(Math.cos(Math.PI * x) - 1) / 2;
            }
            default:
                return 0;
        }
    }
    quad(x, dir) {
        switch (dir) {
            case "in": {
                return x * x;
            }
            case "out": {
                return 1 - (1 - x) * (1 - x);
            }
            case "in out": {
                return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
            }
            default:
                return 0;
        }
    }
    cubic(x, dir) {
        switch (dir) {
            case "in": {
                return x * x * x;
            }
            case "out": {
                return 1 - Math.pow(1 - x, 3);
            }
            case "in out": {
                return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
            }
            default:
                return 0;
        }
    }
    quart(x, dir) {
        switch (dir) {
            case "in": {
                return x * x * x * x;
            }
            case "out": {
                return 1 - Math.pow(1 - x, 4);
            }
            case "in out": {
                return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
            }
            default:
                return 0;
        }
    }
    quint(x, dir) {
        switch (dir) {
            case "in": {
                return x * x * x * x * x;
            }
            case "out": {
                return 1 - Math.pow(1 - x, 5);
            }
            case "in out": {
                return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
            }
            default:
                return 0;
        }
    }
    expo(x, dir) {
        switch (dir) {
            case "in": {
                return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
            }
            case "out": {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            }
            case "in out": {
                return x === 0 ?
                    0 : x === 1 ?
                    1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 :
                    (2 - Math.pow(2, -20 * x + 10)) / 2;
            }
            default:
                return 0;
        }
    }
    circ(x, dir) {
        switch (dir) {
            case "in": {
                return 1 - Math.sqrt(1 - Math.pow(x, 2));
            }
            case "out": {
                return Math.sqrt(1 - Math.pow(x - 1, 2));
            }
            case "in out": {
                return x < 0.5 ?
                    (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 :
                    (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
            }
            default:
                return 0;
        }
    }
    back(x, dir) {
        switch (dir) {
            case "in": {
                const c1 = 1.70158;
                const c3 = c1 + 1;
                return c3 * x * x * x - c1 * x * x;
            }
            case "out": {
                const c1 = 1.70158;
                const c3 = c1 + 1;
                return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
            }
            case "in out": {
                const c1 = 1.70158;
                const c2 = c1 * 1.525;
                return x < 0.5 ?
                    (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2 :
                    (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
            }
            default:
                return 0;
        }
    }
    elastic(x, dir) {
        switch (dir) {
            case "in": {
                const c4 = (2 * Math.PI) / 3;
                return x === 0 ?
                    0 : x === 1 ?
                    1 :
                    -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
            }
            case "out": {
                const c4 = (2 * Math.PI) / 3;
                return x === 0 ?
                    0 : x === 1 ?
                    1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
            }
            case "in out": {
                const c5 = (2 * Math.PI) / 4.5;
                return x === 0 ?
                    0 : x === 1 ?
                    1 : x < 0.5 ?
                    -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 :
                    (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
            }
            default:
                return 0;
        }
    }
    bounce(x, dir) {
        switch (dir) {
            case "in": {
                return 1 - this.bounce(1 - x, "out");
            }
            case "out": {
                const n1 = 7.5625;
                const d1 = 2.75;
                if (x < 1 / d1) {
                    return n1 * x * x;
                } else if (x < 2 / d1) {
                    return n1 * (x -= 1.5 / d1) * x + 0.75;
                } else if (x < 2.5 / d1) {
                    return n1 * (x -= 2.25 / d1) * x + 0.9375;
                } else {
                    return n1 * (x -= 2.625 / d1) * x + 0.984375;
                }
            }
            case "in out": {
                return x < 0.5 ?
                    (1 - this.bounce(1 - 2 * x, "out")) / 2 :
                    (1 + this.bounce(2 * x - 1, "out")) / 2;
            }
            default:
                return 0;
        }
    }
    //end block
}

const operators = function(isInitialSetup) {
    return `
<category name="%{BKY_CATEGORY_OPERATORS} 🪄" id="operators" ${Colors.operators.xml}>
<block type="operator_add">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
</block>
<block type="operator_subtract">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
</block>
<block type="operator_multiply">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
</block>
<block type="operator_divide">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_random">
    <value name="FROM">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="TO">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="operators_clamp"> // TurboCharged Block
    <value name="NUM">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
    <value name="MIN">
        <shadow type="math_number">
            <field name="NUM">25</field>
        </shadow>
    </value>
    <value name="MAX">
        <shadow type="math_number">
            <field name="NUM">40</field>
        </shadow>
    </value>
</block>
<block type="operators_ifthenelse_reporter">
    <value name="CONDITION">
        <shadow type="boolean">
            <field name="CONDITION"></field>
        </shadow>
    </value>
    <value name="TEXT1">
        <shadow type="text">
            <field name="TEXT">pass</field>
        </shadow>
    </value>
    <value name="TEXT2">
        <shadow type="text">
            <field name="TEXT">fail</field>
        </shadow>
    </value>
</block>
<block type="operators_egg">
    <value name="TEXT">
        <shadow type="text">
            <field name="TEXT">🥚</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_gt">
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operators_gtEqual"> // TurboCharged Block
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operator_lt">
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operators_ltEqual"> // TurboCharged Block
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operator_equals">
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
        <block type="operators_textplusidentical"> // TurboCharged Block
    <value name="OPERAND1">
            <shadow type="text">
                <field name="TEXT">A</field>
            </shadow>
        </value>
    <value name="OPERAND2">
            <shadow type="text">
                <field name="TEXT">a</field>
            </shadow>
        </value>
</block>
<block type="operators_textplusisCase"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
<value name="TEXTCASE">
        <shadow type="operators_menu_textCase"></shadow>
    </value>
</block>
<block type="operators_textplustoCase"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
<value name="TEXTCASE">
        <shadow type="operators_menu_textCase"></shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_and">
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
<block type="operator_or">
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
<block type="operators_nor"> // TurboCharged Block
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
<block type="operators_xor"> // TurboCharged Block
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
<block type="operator_not">
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_join">
    <value name="STRING1">
        <shadow type="text">
            <field name="TEXT">apple </field>
        </shadow>
    </value>
    <value name="STRING2">
        <shadow type="text">
            <field name="TEXT">banana</field>
        </shadow>
    </value>
</block>
<block type="operators_textplusrepeat"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple </field>
        </shadow>
    </value>
<value name="REPEAT">
        <shadow type="math_number">
            <field name="NUM">3</field>
        </shadow>
    </value>
</block>
<block type="operators_textplussplit"> // TurboCharged Block
<value name="ITEM">
        <shadow type="math_number">
            <field name="NUM">3</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
<value name="SPLIT">
        <shadow type="text">
            <field name="TEXT">p</field>
        </shadow>
    </value>
</block>
<block type="operator_letter_of">
    <value name="LETTER">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operators_textplusindexof"> // TurboCharged Block
<value name="SUBSTRING">
        <shadow type="text">
            <field name="TEXT">p</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operators_textpluscount"> // TurboCharged Block
<value name="SUBSTRING">
        <shadow type="text">
            <field name="TEXT">p</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operators_substring">
    <value name="START">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    <value name="END">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
    <value name="STRING">
            <shadow type="text">
                <field name="TEXT">apple</field>
            </shadow>
        </value>
</block>
<block type="operator_length">
    <value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operator_contains">
    <value name="STRING1">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
    <value name="STRING2">
        <shadow type="text">
            <field name="TEXT">a</field>
        </shadow>
    </value>
</block>
<block type="operators_replace"> // TurboCharged Block
    <value name="INPUT1">
        <shadow type="text">
            <field name="TEXT">Charged</field>
        </shadow>
    </value>
    <value name="INPUT2">
        <shadow type="text">
            <field name="TEXT">Warp</field>
        </shadow>
    </value>
    <value name="STRING">
        <shadow type="text">
            <field name="TEXT">TurboCharged</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operators_textplusunicodeof"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">A</field>
        </shadow>
    </value>
</block>
<block type="operators_textplusunicodefrom"> // TurboCharged Block
<value name="NUM">
        <shadow type="math_number">
            <field name="NUM">65</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operators_textplusreplaceRegex"> // TurboCharged Block
<value name="REGEX">
        <shadow type="text">
            <field name="TEXT">.</field>
        </shadow>
    </value>
<value name="FLAGS">
        <shadow type="text">
            <field name="TEXT">g</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">Hello world!</field>
        </shadow>
    </value>
<value name="REPLACE">
        <shadow type="text">
            <field name="TEXT">$&amp;$&amp;</field>
        </shadow>
    </value>
</block>
<block type="operators_textplusmatchRegex"> // TurboCharged Block
<value name="ITEM">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">Hello world!</field>
        </shadow>
    </value>
<value name="REGEX">
        <shadow type="text">
            <field name="TEXT">(.) (.{2})</field>
        </shadow>
    </value>
<value name="FLAGS">
        <shadow type="text">
            <field name="TEXT">g</field>
        </shadow>
    </value>
</block>
<block type="operators_textpluscountRegex"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">Hello world!</field>
        </shadow>
    </value>
<value name="REGEX">
        <shadow type="text">
            <field name="TEXT">[AEIOU]</field>
        </shadow>
    </value>
<value name="FLAGS">
        <shadow type="text">
            <field name="TEXT">i</field>
        </shadow>
    </value>
</block>
<block type="operators_textplustestRegex"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">Hello world!</field>
        </shadow>
    </value>
<value name="REGEX">
        <shadow type="text">
            <field name="TEXT">hello</field>
        </shadow>
    </value>
<value name="FLAGS">
        <shadow type="text">
            <field name="TEXT">i</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operators_tweenValue">
<value name="MODE">
        <shadow type="operators_menu_tweenmodes"></shadow>
    </value>
<value name="DIRECTION">
        <shadow type="operators_menu_tweendirection"></shadow>
    </value>
<value name="START">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
<value name="END">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
<value name="AMOUNT">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operator_mod"/>
<block type="operator_round"/>
${blockSeparator}
<block type="operators_percentof">
    <value name="PERCENT">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
    <value name="AMOUNT">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operators_percentis">
    <value name="PERCENT">
        <shadow type="math_number">
            <field name="NUM">5</field>
        </shadow>
    </value>
    <value name="AMOUNT">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="operators_percentUD">
    <value name="AMOUNT">
        <shadow type="math_number">
            <field name="NUM">45</field>
        </shadow>
    </value>
    <value name="MODE">
        <shadow type="operators_menu_percentMode"></shadow>
    </value>
    <value name="PERCENT">
        <shadow type="math_number">
            <field name="NUM">11.11</field>
        </shadow>
    </value>
</block>
${blockSeparator}
<block type="operator_mathop"/>
${blockSeparator}
<block type="operators_bool_coupler"> // TurboCharged Block
    <value name="TEXT">
        <shadow type="text">
            <field name="TEXT">true</field>
        </shadow>
    </value>
</block>
<block type="operators_true_block"> // TurboCharged Block
</block>
<block type="operators_false_block"> // TurboCharged Block
</block>
<block type="operators_casttoType"> // TurboCharged Block
    <value name="TYPE">
        <shadow type="operators_menu_castType"></shadow>
    </value>
    <value name="INPUT">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operators_casttypeOf"> // TurboCharged Block
<value name="INPUT">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>

<label text="High Precision Math"/>
<block type="operators_presadd"> // TurboCharged Block
<value name="A">
        <shadow type="text">
            <field name="TEXT">0.2</field>
        </shadow>
    </value>
<value name="B">
        <shadow type="text">
            <field name="TEXT">0.1</field>
        </shadow>
    </value>
</block>
<block type="operators_pressubtract"> // TurboCharged Block
<value name="A">
        <shadow type="text">
            <field name="TEXT">0.4</field>
        </shadow>
    </value>
<value name="B">
        <shadow type="text">
            <field name="TEXT">0.1</field>
        </shadow>
    </value>
</block>
<block type="operators_presmultiply"> // TurboCharged Block
<value name="A">
        <shadow type="text">
            <field name="TEXT">0.3</field>
        </shadow>
    </value>
<value name="B">
        <shadow type="text">
            <field name="TEXT">0.1</field>
        </shadow>
    </value>
</block>
<block type="operators_presdivided"> // TurboCharged Block
<value name="A">
        <shadow type="text">
            <field name="TEXT">10</field>
        </shadow>
    </value>
<value name="B">
        <shadow type="text">
            <field name="TEXT">3</field>
        </shadow>
    </value>
<value name="PRE">
        <shadow type="text">
            <field name="TEXT">10</field>
        </shadow>
    </value>
</block>
${categorySeparator}
</category>
`;
}
class TurboChargedSensing {
    getInfo() {
        return {
            id: 'sensing',
            name: 'Sensing 🪄',
            color1: Colors.sensing.primary,
            color2: Colors.sensing.secondary,
            color3: Colors.sensing.tertiary,
            blocks: []
        }
    }
}

const sensing = function(isInitialSetup, isStage) {
    const name = ScratchBlocks.ScratchMsgs.translate('SENSING_ASK_TEXT', 'What\'s your name?');
    return `
<category name="%{BKY_CATEGORY_SENSING} 🪄" id="sensing" ${Colors.sensing.xml}>
${isStage ? '' : `
    <block type="sensing_touchingobject">
        <value name="TOUCHINGOBJECTMENU">
            <shadow type="sensing_touchingobjectmenu"/>
        </value>
    </block>
    <block type="sensing_touchingcolor">
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="sensing_coloristouchingcolor">
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
        <value name="COLOR2">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="sensing_distanceto">
        <value name="DISTANCETOMENU">
            <shadow type="sensing_distancetomenu"/>
        </value>
    </block>
    ${blockSeparator}
`}
${isInitialSetup ? '' : `
    <block id="askandwait" type="sensing_askandwait">
        <value name="QUESTION">
            <shadow type="text">
                <field name="TEXT">${name}</field>
            </shadow>
        </value>
    </block>
`}
<block id="answer" type="sensing_answer"/>
${blockSeparator}
<block type="sensing_keypressed">
    <value name="KEY_OPTION">
        <shadow type="sensing_keyoptions"/>
    </value>
</block>
<block type="sensing_mousedown"/>
<block type="sensing_mousex"/>
<block type="sensing_mousey"/>
${isStage ? '' : `
    ${blockSeparator}
    '<block type="sensing_setdragmode" id="sensing_setdragmode"></block>'+
    ${blockSeparator}
`}
${blockSeparator}
<block id="loudness" type="sensing_loudness"/>
${blockSeparator}
<block id="timer" type="sensing_timer"/>
<block type="sensing_resettimer"/>
${blockSeparator}
<block id="of" type="sensing_of">
    <value name="OBJECT">
        <shadow id="sensing_of_object_menu" type="sensing_of_object_menu"/>
    </value>
</block>
${blockSeparator}
<block id="current" type="sensing_current"/>
<block type="sensing_dayssince2000"/>
${blockSeparator}
<block type="sensing_username"/>
${categorySeparator}
</category>
`;
};
class TurboChargedSound {
    getInfo() {
        return {
            id: 'sound',
            name: 'Sound 🪄',
            color1: Colors.sound.primary,
            color2: Colors.sound.secondary,
            color3: Colors.sound.tertiary,
            blocks: []
        }
    }
}

const sound = function(isInitialSetup, isStage, targetId, soundName) {
    return `
<category name="%{BKY_CATEGORY_SOUND} 🪄" id="sound" ${Colors.sound.xml}>
<block id="${targetId}_sound_playuntildone" type="sound_playuntildone">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${soundName}</field>
        </shadow>
    </value>
</block>
<block id="${targetId}_sound_play" type="sound_play">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${soundName}</field>
        </shadow>
    </value>
</block>
<block type="sound_stopallsounds"/>
${blockSeparator}
<block type="sound_changeeffectby">
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="sound_seteffectto">
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
</block>
<block type="sound_cleareffects"/>
${blockSeparator}
<block type="sound_changevolumeby">
    <value name="VOLUME">
        <shadow type="math_number">
            <field name="NUM">-10</field>
        </shadow>
    </value>
</block>
<block type="sound_setvolumeto">
    <value name="VOLUME">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
</block>
<block id="${targetId}_volume" type="sound_volume"/>
${categorySeparator}
</category>
`;
};
class TurboChargedBETAVariables {
    getInfo() {
        return {
            id: 'variables',
            name: 'Variables (extension) 🪄',
            color1: Colors.data.primary,
            color2: Colors.data.secondary,
            color3: Colors.data.tertiary,
            blocks: [],
            /*menus: []{
                variablesMenu: {
                    acceptReporters: false,
                    items: 'getVariables'
                },
            }*/
        }
    }/*
    getVariables() {
        // @ts-expect-error - Blockly not typed yet
        // eslint-disable-next-line no-undef
        const variables = typeof Blockly === 'undefined' ? [] : Blockly.getMainWorkspace()
            .getVariableMap()
            .getVariablesOfType('')
            .filter(model => model.isLocal)
            .map(model => ({
                text: model.name,
                value: model.getId()
            }));
        if (variables.length > 0) {
            return variables;
        } else {
            return [{
                text: "",
                value: ""
            }];
        }
    }*/
}

const MotionBlocks = blocksFromClassToObject(TurboChargedMotion);

function variables(isInitialSetup, target) {
    let LocalVariablesXML, GlobalVariablesXML;
    let LocalVariableBlocks = [], GlobalVariableBlocks = [];
    
    const variables = target.getAllVariableNamesInScopeByType('', '');
    const GlobalVariables = runtime.getTargetForStage().getAllVariableNamesInScopeByType('', '');
    const LocalVariables = variables.filter(varName => !GlobalVariables.includes(varName));

    for (let i = 0; i < GlobalVariables.length; i++) {
        let variable = target.lookupVariableByNameAndType(GlobalVariables[i]);
        let variableXML = generateVariableBlock(variable);
        GlobalVariableBlocks.push(variableXML);
    }
    if (!target.isStage) {
        for (let i = 0; i < LocalVariables.length; i++) {
            let variable = target.lookupVariableByNameAndType(LocalVariables[i]);
            let variableXML = generateVariableBlock(variable);
            LocalVariableBlocks.push(variableXML);
        }
    }

function lists(isInitialSetup, target) {
    let LocalListsXML, GlobalListsXML;
    let LocalListBlocks = [], GlobalListBlocks = [];
    
    const lists = target.getAllVariableNamesInScopeByType('list', '');
    const GlobalLists = runtime.getTargetForStage().getAllVariableNamesInScopeByType('list', '');
    const LocalLists = lists.filter(varName => !GlobalLists.includes(varName));

    let firstList = target.lookupVariableByNameAndType(lists[0], 'list') || 'my list';

    for (let i = 0; i < GlobalLists.length; i++) {
        let list = target.lookupVariableByNameAndType(GlobalLists[i], 'list');
        let listsXML = generateListBlock(list);
        GlobalListBlocks.push(listsXML);
    }
    if (!target.isStage) {
        for (let i = 0; i < LocalLists.length; i++) {
            let list = target.lookupVariableByNameAndType(LocalLists[i], 'list');
            let listsXML = generateListBlock(list);
            LocalListBlocks.push(listsXML);
        }
    }

    LocalListsXML = `
${(LocalListBlocks.length > 0 ? '<label text="For this sprite only:"/>' : '')}
${LocalListBlocks.join('\n')}`;
    GlobalListsXML = `
${(GlobalListBlocks.length > 0 ? '<label text="For all sprites:"/>' : '')}
${GlobalListBlocks.join('\n')}`;

    return `<category name="Lists 🪄" id="lists" ${Colors.data_lists.xml}>
    <button text="${ScratchBlocks.Msg.NEW_LIST}" callbackKey="CREATE_LIST"></button>
    ${GlobalListBlocks.length > 0 || LocalListBlocks.length > 0 ? `
    <block type="data_addtolist">
        ${generateListField(firstList)}
        <value name="ITEM">
            <shadow type="text">
                <field name="TEXT">thing</field>
            </shadow>
        </value>
    </block>
    <block type="data_deleteoflist">
        ${generateListField(firstList)}
        <value name="INDEX">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="data_deletealloflist">
        ${generateListField(firstList)}
    </block>
    <block type="data_insertatlist">
        ${generateListField(firstList)}
        <value name="INDEX">
            <shadow type="math_integer">
            <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="ITEM">
            <shadow type="text">
                <field name="TEXT">thing</field>
            </shadow>
        </value>
    </block>
    <block type="data_replaceitemoflist">
        ${generateListField(firstList)}
        <value name="INDEX">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="ITEM">
            <shadow type="text">
                <field name="TEXT">thing</field>
            </shadow>
        </value>
    </block>
    <block type="data_itemoflist">
        ${generateListField(firstList)}
        <value name="INDEX">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="data_itemnumoflist">
        <value name="ITEM">
            <shadow type="text">
                <field name="TEXT">thing</field>
            </shadow>
        </value>
        ${generateListField(firstList)}
    </block>
    <block type="data_lengthoflist">
        ${generateListField(firstList)}
    </block>
    <block type="data_listcontainsitem">
        ${generateListField(firstList)}
            <value name="ITEM">
                <shadow type="text">
                    <field name="TEXT">thing</field>
                </shadow>
            </value>
    </block>
    <block type="data_showlist">
        ${generateListField(firstList)}
    </block>
    <block type="data_hidelist">
        ${generateListField(firstList)}
    </block>
        ${GlobalListsXML}
        ${target.isStage ? '' : LocalListsXML}
    ` : ''}
    </category>`
}

    LocalVariablesXML = `
${(LocalVariableBlocks.length > 0 ? '<label text="For this sprite only:"/>' : '')}
${LocalVariableBlocks.join('\n')}`;
    GlobalVariablesXML = `
${(GlobalVariableBlocks.length > 0 ? '<label text="For all sprites:"/>' : '')}
${GlobalVariableBlocks.join('\n')}`;
    //<shadow type="data_variablemenu"></shadow>
    return `
<category name="%{BKY_CATEGORY_VARIABLES} 🪄" id="variables" ${Colors.data.xml} ${''/* we would put custom="VARIABLES" here but then it would not work */}>
<button text="${ScratchBlocks.Msg.NEW_VARIABLE}" callbackKey="CREATE_VARIABLE"></button>
${GlobalVariableBlocks.length > 0 || LocalVariableBlocks.length > 0 ?`
// <block type="motion_data_deleteVariable">
//     ${spawnMutator(MotionBlocks['data_deleteVariable'])}
//     <value name="VARIABLE">
//         <shadow type="text">
//             <field name="TEXT">my variable</field>
//         </shadow>
//     </value>
// </block>
<block type="data_setvariableto" gap="20">
    <value name="VARIABLE">
    <shadow type="control_menu_variablesMenu2"></shadow>
    </value>
    <value name="VALUE">
        <shadow type="text">
            <field name="TEXT">0</field>
        </shadow>
    </value>
</block>
<block type="data_changevariableby">
    <value name="VARIABLE">
        <shadow type="control_menu_variablesMenu2"></shadow>
    </value>
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
</block>
<block type="data_showvariable">
    <value name="VARIABLE">
        <shadow type="control_menu_variablesMenu2"></shadow>
    </value>
</block>
<block type="data_hidevariable">
    <value name="VARIABLE">
        <shadow type="control_menu_variablesMenu2"></shadow>
    </value>
</block>
<block type="motion_data_hasVariable">
    ${spawnMutator(MotionBlocks['data_hasVariable'])}
    <value name="VARIABLE">
        <shadow type="text">
            <field name="TEXT">my variable</field>
        </shadow>
    </value>
</block>
<block type="motion_data_getVariable">
    ${spawnMutator(MotionBlocks['data_getVariable'])}
    <value name="VARIABLE">
        <shadow type="text">
            <field name="TEXT">my variable</field>
        </shadow>
    </value>
</block>
${GlobalVariablesXML}
${(target.isStage ? '' : `
${LocalVariablesXML}
`)}` : ''}
</category>
${lists(isInitialSetup, target)}
`;
/*!
 * <category
    name="Lists"
    id="lists"
    colour="#FF661A"
    secondaryColour="#FF5500"
    custom="LIST">
    </category>"
*/
//yes
}
//The color changing code by Lily & xeltalliv/vadik-1
// Reimplementing the color parameters
runtime._convertBlockForScratchBlocks = function(blockInfo, categoryInfo) {
    const res = cbfsb(blockInfo, categoryInfo);
    //the color
    if (blockInfo.color1) {
        if (!res.json.color1) res.json.color1 = blockInfo.color1;
    }
    if (blockInfo.color2) {
        if (!res.json.color2) res.json.color2 = blockInfo.color2;
    }
    if (blockInfo.color3) {
        if (!res.json.color3) res.json.color3 = blockInfo.color3;
    }
    //Other block stuff
    if (blockInfo.outputShape) {
        if (!res.json.outputShape) res.json.outputShape = blockInfo.outputShape;
    }
    if (blockInfo.extensions) {
        if (!res.json.extensions) res.json.extensions = blockInfo.extensions;
    }
    if (!res.json.branchCount) res.json.branchCount = blockInfo.branchCount;
    return res;
};
function addMicrobitBlocks() {
    let runtime = vm.runtime;
    try {
        var tmp = runtime.ext_microbit
    } catch {
        return ('');
    };
    let ext = runtime.ext_microbit;
    if (ext.getInfoBound == undefined) ext.getInfoBound = ext.getInfo.bind(ext);
    let egi = ext.getInfoBound;
  //Matrix testing
  ext.matrixValidator = function({ MATRIX }, util) {
    MATRIX = Scratch.Cast.toString(MATRIX);

    //Making sure the length is correct
    if (MATRIX.length < 25 || (MATRIX.length % 25) != 0) return false;

    //Making sure its binary
    if ((MATRIX.replace(/[01]/g, '') !== '')) return false;

    //All checks to invalidate the matrix failed which means its a matrix.
    return true;
  }
  //Couplers
  ext.matrixCoupler = function({ A }, util) {
    return Scratch.Cast.toString(A);
  }
  ext.quadMatrixCoupler = function({ A, B, C, D }, util) {
    return (`${Scratch.Cast.toString(A)}${Scratch.Cast.toString(B)}${Scratch.Cast.toString(C)}${Scratch.Cast.toString(D)}`);
  }
  //Matrix handling
  ext.getMicrobitMatrix = function({ NUMBER, MATRIX }, util) {
    NUMBER = Math.round(Scratch.Cast.toNumber(NUMBER));
    MATRIX = Scratch.Cast.toString(MATRIX);
    return (MATRIX.slice((NUMBER-1)*25, ((NUMBER-1)*25)+25));
  }
  ext.getDigitAt = function({ ROW, COLLUM, MATRIX }, util) {
    ROW = Math.round(Scratch.Cast.toNumber(ROW));
    COLLUM = Math.round(Scratch.Cast.toNumber(COLLUM));
    MATRIX = Scratch.Cast.toString(MATRIX);

    //Clamping
    ROW = (ROW < 1 ? 1 : (ROW > 5 ? 5 : ROW));
    COLLUM = (COLLUM < 1 ? 1 : (COLLUM > 5 ? 5 : COLLUM));

    //Math!
    return MATRIX.charAt(((ROW-1)*5)+(COLLUM-1));
  }
    ext.getInfo = function() {
        const DefaultExtensions = vm.TurboCharged.extensionData.DefaultExtensions;
        let tmp = egi();
        let blocks = tmp.blocks;
        tmp.name = "micro:bit 🪄";
        blocks.push({
            blockType: "label",
            text: "Matrixes"
        });
        blocks = DefaultExtensions.addBlocks(blocks, [
            {
              blockType: Scratch.BlockType.BOOLEAN,
              opcode: 'matrixValidator',
              text: 'is binary [MATRIX] a valid matrix?',
              arguments: {
                MATRIX: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'matrixCoupler',
              text: '[A]',
              arguments: {
                A: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'quadMatrixCoupler',
              text: ['[A] [B]', '[C] [D]'],
              arguments: {
                A: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
                B: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
                C: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX},
                D: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX}
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'getMicrobitMatrix',
              text: 'get matrix number [NUMBER] out of binary [MATRIX]',
              arguments: {
                NUMBER: {defaultValue: 1, type: Scratch.ArgumentType.NUMBER},
                MATRIX: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.STRING}
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'getDigitAt',
              text: 'get pixel at row [ROW] and collum [COLLUM] of matrix [MATRIX]',
              arguments: {
                ROW: {defaultValue: 3, type: Scratch.ArgumentType.NUMBER},
                COLLUM: {defaultValue: 5, type: Scratch.ArgumentType.NUMBER},
                MATRIX: {defaultValue: '0101010101100010101000100', type: Scratch.ArgumentType.MATRIX}
              }
            }
          ]);
        return tmp;
    }
    vm.extensionManager.refreshBlocks();
}function addPenBlocks() {
    let runtime = vm.runtime;
    try {
        var tmp = runtime.ext_pen
    } catch {
        return ('');
    };
    let ext = runtime.ext_pen;
    if (ext.getInfoBound == undefined) ext.getInfoBound = ext.getInfo.bind(ext);
    let egi = ext.getInfoBound;

    //ext.test = function({  }, util) {}
    ext.getInfo = function() {
        const DefaultExtensions = window.extensionData.DefaultExtensions;
        let tmp = egi();
        let blocks = tmp.blocks;
        tmp.name = "Pen 🪄";
        blocks = DefaultExtensions.addBlocks(blocks, []);
        return tmp;
    }
    vm.extensionManager.refreshBlocks();
}vm.on('EXTENSION_ADDED', e => {
    function testBlocks() {
        if (!vm.TurboCharged.specialEnabled) return;
        if (e.id === 'microbit') addMicrobitBlocks();
        if (e.id === 'pen') addPenBlocks();
    }
    setTimeout(testBlocks, 150);
});

try { addMicrobitBlocks() } catch { console.error('micro:bit not found') };
try { addPenBlocks() } catch { console.error('pen not found') };
//The original code is credited to the very lovely lilymakesthings!
//Her scratch: https://scratch.mit.edu/users/LilyMakesThings
//XML Injector / Overrider
runtime.getBlocksXML = function(target) {
    const categoryInfo = this._blockInfo;
    const res = vm.TurboCharged.gbx(target);
    res.map(category => {
        if (vm.TurboCharged.blockedCategories.includes(category.id) || !vm.TurboCharged.enabled) return category;
        if (category.id === 'motion') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = motion(false, target.isStage, target.id);
        }
        if (category.id === 'looks') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = looks(false, target.isStage, target.id, target.getCurrentCostume().name, stage.getCurrentCostume().name);
        }
        if (category.id === 'sound') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = sound(false, target.isStage, target.id);
        }
        if (category.id === 'event') { //events is a bitch
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = events(false, target.isStage, target.id);
        }
        if (category.id === 'control') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = control(false, target.isStage, target.id);
        }
        if (category.id === 'sensing') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = sensing(false, target.isStage, target.id);
        }
        if (category.id === 'operators') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = operators(false, target.isStage, target.id);
        }
        if (category.id === 'data') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = variables(false, target);
        }
        if (category.id === 'myBlocks') {
            let {
                editingTarget: target,
                runtime
            } = vm;
            const stage = runtime.getTargetForStage();
            if (!target) target = stage;
            category.xml = myBlocks(false, target.isStage, target.id);
        }
        return category;
    });
    return res;
}
  // Bru ima keep this file name. its funny out of context.
  // From Xeltalliv's example:
  // https://github.com/Xeltalliv/extensions/blob/examples/examples/other-default-field-types.js

  //im sorry i have to change the bind name
  const transfBound = runtime._convertPlaceholders.bind(runtime);
  runtime._convertPlaceholders = function(context, match, placeholder) {
    const retVal = transfBound(context, match, placeholder);

    const argInfo = context.blockInfo.arguments[placeholder] || {};
    const argsName = `args${context.outLineNum}`;
    const blockArgs = context.blockJSON[argsName];
    const argJSON = blockArgs[blockArgs.length-1];
    
    if (argInfo.type === ArgumentType.VARIABLE) {
      argJSON.type = 'field_variable';
      argJSON.variableTypes = [argInfo.variableType ?? ''];
      if (argInfo.variable) argJSON.variable = argInfo.variable;
    }
    return retVal;
  }

//Credits is registered via some added XML
Scratch.extensions.register(new TurboChargedMotion());
Scratch.extensions.register(new TurboChargedLooks());
Scratch.extensions.register(new TurboChargedSound());
Scratch.extensions.register(new TurboChargedEvents());
Scratch.extensions.register(new TurboChargedControl());
Scratch.extensions.register(new TurboChargedSensing());
Scratch.extensions.register(new TurboChargedOperators());
//variables is not accesible
//update: we will try making our own Variables Category.
//Scratch.extensions.register(new TurboChargedBETAVariables());
})(Scratch);