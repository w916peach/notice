(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{250:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://npmjs.org/package/range-parser",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/range-parser.svg",alt:"NPM Version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://npmjs.org/package/range-parser",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dm/range-parser.svg",alt:"NPM Downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://nodejs.org/endownload",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/node/v/range-parser.svg",alt:"Node.js Version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://travis-ci.org/jshttp/range-parser",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/travis/jshttp/range-parser.svg",alt:"Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://coveralls.io/r/jshttp/range-parser",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/coveralls/jshttp/range-parser.svg",alt:"Test Coverage"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Range header field parser.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("These properties are accepted in the options object.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"range-parser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#range-parser","aria-hidden":"true"}},[this._v("#")]),this._v(" range-parser")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm install range-parser\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" parseRange "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'range-parser'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"parserange-size-header-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parserange-size-header-options","aria-hidden":"true"}},[this._v("#")]),this._v(" parseRange(size, header, options)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Parse the given "),s("code",[this._v("header")]),this._v(" string where "),s("code",[this._v("size")]),this._v(" is the maximum size of the resource.\nAn array of ranges will be returned or negative numbers indicating an error parsing.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("-2")]),this._v(" signals a malformed header string")]),this._v(" "),s("li",[s("code",[this._v("-1")]),this._v(" signals an unsatisfiable range")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// parse header from request")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" range "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("parseRange")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("range"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// the type of the range")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("range"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'bytes'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// the ranges")]),t._v("\n  range"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forEach")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// do something with r.start and r.end")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"combine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#combine","aria-hidden":"true"}},[this._v("#")]),this._v(" combine")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Specifies if overlapping & adjacent ranges should be combined, defaults to "),s("code",[this._v("false")]),this._v(".\nWhen "),s("code",[this._v("true")]),this._v(", ranges will be combined and returned as if they were specified that\nway in the header.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("parseRange")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'bytes=50-55,0-10,5-10,56-60'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" combine"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => [")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//      { start: 0,  end: 10 },")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//      { start: 50, end: 60 }")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//    ]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"LICENSE"}},[this._v("MIT")])])}],!1,null,null,null);n.options.__file="README.md";s.default=n.exports}}]);