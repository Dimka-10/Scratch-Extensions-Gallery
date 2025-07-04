(function() {
  // Реализация MD5
  class HashLib {
    // Полная реализация MD5
    _md5(string) {
      function safeAdd(x, y) {
        var lsw = (x & 0xffff) + (y & 0xffff);
        var msw = (x >>> 16) + (y >>> 16) + (lsw >>> 16);
        return (msw << 16) | (lsw & 0xffff);
      }

      function bitRotateLeft(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
      }

      function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
      }

      function md5ff(a, b, c, d, x, s, t) {
        return md5cmn((b & c) | (~b & d), a, b, x, s, t);
      }

      function md5gg(a, b, c, d, x, s, t) {
        return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
      }

      function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t);
      }

      function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t);
      }

      function binlMD5(x, len) {
        x[len >> 5] |= 0x80 << (len % 32);
        x[((len + 64) >>> 9) << 4] = len;

        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;

        for (var i = 0; i < x.length; i += 16) {
          var olda = a;
          var oldb = b;
          var oldc = c;
          var oldd = d;

          a = md5ff(a, b, c, d, x[i], 7, -680876936);
          d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

          a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5gg(b, c, d, a, x[i], 20, -373897302);
          a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5gg(d, a, b, c, x[i], 9, -51403784);
          c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

          a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5hh(d, a, b, c, x[i], 11, -358537222);
          c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);

          a = md5ii(a, b, c, d, x[i], 6, -198630844);
          d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);

          a = safeAdd(a, olda);
          b = safeAdd(b, oldb);
          c = safeAdd(c, oldc);
          d = safeAdd(d, oldd);
        }
        return [a, b, c, d];
      }

      function binl2hex(binarray) {
        var hexTab = "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length; i++) {
          var x = binarray[i];
          for (var j = 0; j < 4; j++) {
            str += hexTab.charAt((x >> (j * 8 + 4)) & 0x0f) + hexTab.charAt((x >> (j * 8)) & 0x0f);
          }
        }
        return str;
      }

      function rstr2binl(input) {
        var output = [];
        for (var i = 0; i < input.length; i++) {
          output[i >> 2] |= input.charCodeAt(i) << ((i % 4) * 8);
        }
        return output;
      }

      function str2rstrUTF8(input) {
        return unescape(encodeURIComponent(input));
      }

      var x = rstr2binl(str2rstrUTF8(string));
      var hash = binlMD5(x, string.length * 8);
      return binl2hex(hash);
    }

    // SHA-384
    async sha384(str) {
      const buffer = await crypto.subtle.digest('SHA-384', new TextEncoder().encode(str));
      return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    }
    // SHA-512
    async sha512(str) {
      const buffer = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(str));
      return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    }
    // SHA-256
    async sha256(str) {
      const buffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
      return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    }
  }

  class HashExtension {
    constructor() {
      this._hashLib = new HashLib();
    }

    getInfo() {
      return {
        id: 'hashLib',
        name: 'HashLib',
        blocks: [
          {
            opcode: 'md5',
            blockType: 'reporter',
            text: 'MD5 хеш [TEXT]',
            arguments: {
              TEXT: {
                type: 'string',
                defaultValue: 'привет'
              }
            }
          },
          {
            opcode: 'sha256',
            blockType: 'reporter',
            text: 'SHA-256 хеш [TEXT]',
            arguments: {
              TEXT: {
                type: 'string',
                defaultValue: 'привет'
              }
            }
          },
          {
            opcode: 'sha384',
            blockType: 'reporter',
            text: 'SHA-384 хеш [TEXT]',
            arguments: {
              TEXT: {
                type: 'string',
                defaultValue: 'привет'
              }
            }
          },
          {
            opcode: 'sha512',
            blockType: 'reporter',
            text: 'SHA-512 хеш [TEXT]',
            arguments: {
              TEXT: {
                type: 'string',
                defaultValue: 'привет'
              }
            }
          }
        ]
      };
    }

    md5({ TEXT }) {
      TEXT = Scratch.Cast.toString(TEXT);
      return this._hashLib._md5(TEXT);
    }

    async sha256({ TEXT }) {
      TEXT = Scratch.Cast.toString(TEXT);
      return await this._hashLib.sha256(TEXT);
    }

    async sha384({ TEXT }) {
      TEXT = Scratch.Cast.toString(TEXT);
      return await this._hashLib.sha384(TEXT);
    }

    async sha512({ TEXT }) {
      TEXT = Scratch.Cast.toString(TEXT);
      return await this._hashLib.sha512(TEXT);
    }
  }

  Scratch.extensions.register(new HashExtension());
})();