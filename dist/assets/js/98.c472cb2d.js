(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{268:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("p",[a("a",{attrs:{href:"https://npmjs.org/package/parseurl",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/parseurl.svg",alt:"NPM Version"}}),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://npmjs.org/package/parseurl",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dm/parseurl.svg",alt:"NPM Downloads"}}),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/node/v/parseurl.svg",alt:"Node.js Version"}}),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://travis-ci.org/pillarjs/parseurl",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/travis/pillarjs/parseurl/master.svg",alt:"Build Status"}}),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://coveralls.io/r/pillarjs/parseurl?branch=master",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/coveralls/pillarjs/parseurl/master.svg",alt:"Test Coverage"}}),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("Parse a URL with memoization.")]),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("This is a "),a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js"),a("OutboundLink")],1),s._v(" module available through the\n"),a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm registry"),a("OutboundLink")],1),s._v(". Installation is done using the\n"),a("a",{attrs:{href:"https://docs.npmjs.com/getting-started/installing-npm-packages-locally",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("npm install")]),s._v(" command"),a("OutboundLink")],1),s._v(":")]),s._v(" "),s._m(2),s._m(3),s._v(" "),s._m(4),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),s._m(11),s._v(" "),s._m(12)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"parseurl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parseurl","aria-hidden":"true"}},[this._v("#")]),this._v(" parseurl")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm install parseurl\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" parseurl "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("require")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'parseurl'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"parseurl-req"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parseurl-req","aria-hidden":"true"}},[this._v("#")]),this._v(" parseurl(req)")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("Parse the URL of the given request object (looks at the "),a("code",[s._v("req.url")]),s._v(" property)\nand return the result. The result is the same as "),a("code",[s._v("url.parse")]),s._v(" in Node.js core.\nCalling this function multiple times on the same "),a("code",[s._v("req")]),s._v(" where "),a("code",[s._v("req.url")]),s._v(" does\nnot change will return a cached parsed object, rather than parsing again.")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"parseurl-original-req"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parseurl-original-req","aria-hidden":"true"}},[this._v("#")]),this._v(" parseurl.original(req)")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("Parse the original URL of the given request object and return the result.\nThis works by trying to parse "),a("code",[s._v("req.originalUrl")]),s._v(" if it is a string, otherwise\nparses "),a("code",[s._v("req.url")]),s._v(". The result is the same as "),a("code",[s._v("url.parse")]),s._v(" in Node.js core.\nCalling this function multiple times on the same "),a("code",[s._v("req")]),s._v(" where "),a("code",[s._v("req.originalUrl")]),s._v("\ndoes not change will return a cached parsed object, rather than parsing again.")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"benchmark"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#benchmark","aria-hidden":"true"}},[this._v("#")]),this._v(" Benchmark")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" run-script bench\n\n"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" parseurl@1.3.2 bench nodejs-parseurl\n"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" node benchmark/index.js\n\n  http_parser@2.7.0\n  node@4.8.4\n  v8@4.5.103.47\n  uv@1.9.1\n  zlib@1.2.11\n  ares@1.10.1-DEV\n  icu@56.1\n  modules@46\n  openssl@1.0.2k\n\n"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" node benchmark/fullurl.js\n\n  Parsing URL "),a("span",{attrs:{class:"token string"}},[s._v('"http://localhost:8888/foo/bar?user=tj&pet=fluffy"')]),s._v("\n\n  3 tests completed.\n\n  fasturl   x 1,246,766 ops/sec ±0.74% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("188 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl x    91,536 ops/sec ±0.54% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("189 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  parseurl  x    90,645 ops/sec ±0.38% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("189 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" node benchmark/pathquery.js\n\n  Parsing URL "),a("span",{attrs:{class:"token string"}},[s._v('"/foo/bar?user=tj&pet=fluffy"')]),s._v("\n\n  3 tests completed.\n\n  fasturl   x 2,077,650 ops/sec ±0.69% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("186 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl x   638,669 ops/sec ±0.67% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("189 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  parseurl  x 2,431,842 ops/sec ±0.71% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("189 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" node benchmark/samerequest.js\n\n  Parsing URL "),a("span",{attrs:{class:"token string"}},[s._v('"/foo/bar?user=tj&pet=fluffy"')]),s._v(" on same request object\n\n  3 tests completed.\n\n  fasturl   x  2,135,391 ops/sec ±0.69% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("188 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl x    672,809 ops/sec ±3.83% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("186 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  parseurl  x 11,604,947 ops/sec ±0.70% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("189 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" node benchmark/simplepath.js\n\n  Parsing URL "),a("span",{attrs:{class:"token string"}},[s._v('"/foo/bar"')]),s._v("\n\n  3 tests completed.\n\n  fasturl   x 4,961,391 ops/sec ±0.97% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("186 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl x   914,931 ops/sec ±0.83% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("186 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  parseurl  x 7,559,196 ops/sec ±0.66% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("188 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" node benchmark/slash.js\n\n  Parsing URL "),a("span",{attrs:{class:"token string"}},[s._v('"/"')]),s._v("\n\n  3 tests completed.\n\n  fasturl   x  4,053,379 ops/sec ±0.91% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("187 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nativeurl x    963,999 ops/sec ±0.58% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("189 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  parseurl  x 11,516,143 ops/sec ±0.58% "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("188 runs sampled"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("a",{attrs:{href:"LICENSE"}},[this._v("MIT")])])}],!1,null,null,null);e.options.__file="README.md";t.default=e.exports}}]);