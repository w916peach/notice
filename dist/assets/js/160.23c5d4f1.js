(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{309:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"pure-js-character-encoding-conversion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pure-js-character-encoding-conversion","aria-hidden":"true"}},[t._v("#")]),t._v(" Pure JS character encoding conversion "),n("a",{attrs:{href:"https://travis-ci.org/ashtuchkin/iconv-lite",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://travis-ci.org/ashtuchkin/iconv-lite.svg?branch=master",alt:"Build Status"}}),n("OutboundLink")],1)]),t._v(" "),n("ul",[n("li",[t._v("Doesn't need native code compilation. Works on Windows and in sandboxed environments like "),n("a",{attrs:{href:"http://c9.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cloud9"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("li",[t._v("Used in popular projects like "),n("a",{attrs:{href:"https://github.com/expressjs/body-parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("Express.js (body_parser)"),n("OutboundLink")],1),t._v(",\n"),n("a",{attrs:{href:"http://gruntjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grunt"),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"http://www.nodemailer.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nodemailer"),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"http://yeoman.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yeoman"),n("OutboundLink")],1),t._v(" and others.")]),t._v(" "),n("li",[t._v("Faster than "),n("a",{attrs:{href:"https://github.com/bnoordhuis/node-iconv",target:"_blank",rel:"noopener noreferrer"}},[t._v("node-iconv"),n("OutboundLink")],1),t._v(" (see below for performance comparison).")]),t._v(" "),n("li",[t._v("Intuitive encode/decode API")]),t._v(" "),n("li",[t._v("Streaming support for Node v0.10+")]),t._v(" "),n("li",[t._v("[Deprecated] Can extend Node.js primitives (buffers, streams) to support all iconv-lite encodings.")]),t._v(" "),n("li",[t._v("In-browser usage via "),n("a",{attrs:{href:"https://github.com/substack/node-browserify",target:"_blank",rel:"noopener noreferrer"}},[t._v("Browserify"),n("OutboundLink")],1),t._v(" (~180k gzip compressed with Buffer shim included).")]),t._v(" "),n("li",[t._v("Typescript "),n("a",{attrs:{href:"https://github.com/ashtuchkin/iconv-lite/blob/master/lib/index.d.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("type definition file"),n("OutboundLink")],1),t._v(" included.")]),t._v(" "),t._m(0),t._v(" "),n("li",[t._v("License: MIT.")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://npmjs.org/packages/iconv-lite/",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://nodei.co/npm/iconv-lite.png?downloads=true&downloadRank=true",alt:"NPM Stats"}}),n("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),n("blockquote",[n("p",[t._v("NOTE: This doesn't work on latest Node versions. See "),n("a",{attrs:{href:"https://github.com/ashtuchkin/iconv-lite/wiki/Node-v4-compatibility",target:"_blank",rel:"noopener noreferrer"}},[t._v("details"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),n("p",[t._v("See "),n("a",{attrs:{href:"https://github.com/ashtuchkin/iconv-lite/wiki/Supported-Encodings",target:"_blank",rel:"noopener noreferrer"}},[t._v("all supported encodings on wiki"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("Most singlebyte encodings are generated automatically from "),n("a",{attrs:{href:"https://github.com/bnoordhuis/node-iconv",target:"_blank",rel:"noopener noreferrer"}},[t._v("node-iconv"),n("OutboundLink")],1),t._v(". Thank you Ben Noordhuis and libiconv authors!")]),t._v(" "),n("p",[t._v("Multibyte encodings are generated from "),n("a",{attrs:{href:"http://www.unicode.org/Public/MAPPINGS/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicode.org mappings"),n("OutboundLink")],1),t._v(" and "),n("a",{attrs:{href:"http://encoding.spec.whatwg.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WHATWG Encoding Standard mappings"),n("OutboundLink")],1),t._v(". Thank you, respective authors!")]),t._v(" "),t._m(10),t._v(" "),n("p",[t._v("Comparison with node-iconv module (1000x256kb, on MacBook Pro, Core i5/2.6 GHz, Node v0.12.0).\nNote: your results may vary, so please always check on your hardware.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),n("ul",[t._m(13),t._v(" "),n("li",[t._v("If you want to detect UTF-8 BOM when decoding other encodings, use "),n("a",{attrs:{href:"https://github.com/danielgindi/node-autodetect-decoder-stream",target:"_blank",rel:"noopener noreferrer"}},[t._v("node-autodetect-decoder-stream"),n("OutboundLink")],1),t._v(" module.")]),t._v(" "),t._m(14)]),t._v(" "),t._m(15),t._v(" "),n("p",[t._v("This library supports UTF-16LE, UTF-16BE and UTF-16 encodings. First two are straightforward, but UTF-16 is trying to be\nsmart about endianness in the following ways:")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),n("p",[t._v("When decoding, be sure to supply a Buffer to decode() method, otherwise "),n("a",{attrs:{href:"https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding",target:"_blank",rel:"noopener noreferrer"}},[t._v("bad things usually happen"),n("OutboundLink")],1),t._v("."),n("br"),t._v("\nUntranslatable characters are set to � or ?. No transliteration is currently supported."),n("br"),t._v("\nNode versions 0.10.31 and 0.11.13 are buggy, don't use them (see #65, #77).")]),t._v(" "),t._m(18),t._v(" "),t._m(19)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("React Native is supported (need to explicitly "),s("code",[this._v("npm install")]),this._v(" two more modules: "),s("code",[this._v("buffer")]),this._v(" and "),s("code",[this._v("stream")]),this._v(").")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"basic-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic API")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iconv "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'iconv-lite'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Convert from an encoded buffer to js string.")]),t._v("\nstr "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" iconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("decode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Buffer"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0x68")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0x65")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0x6c")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0x6c")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0x6f")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'win1251'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Convert from js string to an encoded buffer.")]),t._v("\nbuf "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" iconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("encode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Sample input string"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'win1251'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Check if encoding is supported")]),t._v("\niconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("encodingExists")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"us-ascii"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"streaming-api-node-v0-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#streaming-api-node-v0-10","aria-hidden":"true"}},[this._v("#")]),this._v(" Streaming API (Node v0.10+)")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Decode stream (from binary stream to js strings)")]),t._v("\nhttp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createServer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" converterStream "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" iconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("decodeStream")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'win1251'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("pipe")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("converterStream"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    converterStream"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'data'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// Do something with decoded strings, chunk-by-chunk.")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Convert encoding streaming example")]),t._v("\nfs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createReadStream")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'file-in-win1251.txt'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("pipe")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("decodeStream")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'win1251'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("pipe")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("encodeStream")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'ucs2'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("pipe")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createWriteStream")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'file-in-ucs2.txt'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Sugar: all encode/decode streams have .collect(cb) method to accumulate data.")]),t._v("\nhttp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createServer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("pipe")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("decodeStream")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'win1251'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("collect")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("assert")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" body "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'string'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// full request body string")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"deprecated-extend-node-js-own-encodings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-extend-node-js-own-encodings","aria-hidden":"true"}},[this._v("#")]),this._v(" [Deprecated] Extend Node.js own encodings")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// After this call all Node basic primitives will understand iconv-lite encodings.")]),t._v("\niconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("extendNodeEncodings")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Examples:")]),t._v("\nbuf "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Buffer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'win1251'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("write")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'gbk'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstr "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" buf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toString")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'latin1'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("assert")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Buffer"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("isEncoding")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'iso-8859-15'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nBuffer"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("byteLength")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'us-ascii'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nhttp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createServer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setEncoding")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'big5'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("collect")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createReadStream")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"file.txt"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"shift_jis"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// External modules are also supported (if they use Node primitives, which they probably do).")]),t._v("\nrequest "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'request'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("request")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"http://github.com/"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    encoding"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"cp932"')]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// To remove extensions")]),t._v("\niconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("undoExtendNodeEncodings")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-encodings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-encodings","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported encodings")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("All node.js native encodings: utf8, ucs2 / utf16-le, ascii, binary, base64, hex.")]),this._v(" "),s("li",[this._v("Additional unicode encodings: utf16, utf16-be, utf-7, utf-7-imap.")]),this._v(" "),s("li",[this._v("All widespread singlebyte encodings: Windows 125x family, ISO-8859 family,\nIBM/DOS codepages, Macintosh family, KOI8 family, all others supported by iconv library.\nAliases like 'latin1', 'us-ascii' also supported.")]),this._v(" "),s("li",[this._v("All widespread multibyte encodings: CP932, CP936, CP949, CP950, GB2312, GBK, GB18030, Big5, Shift_JIS, EUC-JP.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"encoding-decoding-speed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encoding-decoding-speed","aria-hidden":"true"}},[this._v("#")]),this._v(" Encoding/decoding speed")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("operation             iconv@2.1.4   iconv-lite@0.4.7\n----------------------------------------------------------\nencode('win1251')     ~96 Mb/s      ~320 Mb/s\ndecode('win1251')     ~95 Mb/s      ~246 Mb/s\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"bom-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bom-handling","aria-hidden":"true"}},[this._v("#")]),this._v(" BOM handling")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("Decoding: BOM is stripped by default, unless overridden by passing "),s("code",[this._v("stripBOM: false")]),this._v(" in options\n(f.ex. "),s("code",[this._v("iconv.decode(buf, enc, {stripBOM: false})")]),this._v(").\nA callback might also be given as a "),s("code",[this._v("stripBOM")]),this._v(" parameter - it'll be called if BOM character was actually found.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("Encoding: No BOM added, unless overridden by "),s("code",[this._v("addBOM: true")]),this._v(" option.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"utf-16-encodings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#utf-16-encodings","aria-hidden":"true"}},[this._v("#")]),this._v(" UTF-16 Encodings")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("Decoding: uses BOM and 'spaces heuristic' to determine input endianness. Default is UTF-16LE, but can be\noverridden with "),n("code",[t._v("defaultEncoding: 'utf-16be'")]),t._v(" option. Strips BOM unless "),n("code",[t._v("stripBOM: false")]),t._v(".")]),t._v(" "),n("li",[t._v("Encoding: uses UTF-16LE and writes BOM by default. Use "),n("code",[t._v("addBOM: false")]),t._v(" to override.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"other-notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Other notes")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:ashtuchkin/iconv-lite.git\n$ "),n("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" iconv-lite\n$ "),n("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("install")]),t._v("\n$ "),n("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("test")]),t._v("\n    \n$ "),n("span",{attrs:{class:"token comment"}},[t._v("# To view performance:")]),t._v("\n$ node test/performance.js\n\n$ "),n("span",{attrs:{class:"token comment"}},[t._v("# To view test coverage:")]),t._v("\n$ "),n("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run coverage\n$ "),n("span",{attrs:{class:"token function"}},[t._v("open")]),t._v(" coverage/lcov-report/index.html\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);