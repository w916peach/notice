(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{282:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[n("a",{attrs:{href:"https://npmjs.org/package/encodeurl",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/npm/v/encodeurl.svg",alt:"NPM Version"}}),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://npmjs.org/package/encodeurl",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/npm/dm/encodeurl.svg",alt:"NPM Downloads"}}),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/node/v/encodeurl.svg",alt:"Node.js Version"}}),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://travis-ci.org/pillarjs/encodeurl",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/travis/pillarjs/encodeurl.svg",alt:"Build Status"}}),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://coveralls.io/r/pillarjs/encodeurl?branch=master",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/coveralls/pillarjs/encodeurl.svg",alt:"Test Coverage"}}),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("Encode a URL to a percent-encoded form, excluding already-encoded sequences")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("This is a "),n("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),n("OutboundLink")],1),t._v(" module available through the\n"),n("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm registry"),n("OutboundLink")],1),t._v(". Installation is done using the\n"),n("a",{attrs:{href:"https://docs.npmjs.com/getting-started/installing-npm-packages-locally",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("npm install")]),t._v(" command"),n("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),n("p",[t._v("Encode a URL to a percent-encoded form, excluding already-encoded sequences.")]),t._v(" "),t._m(6),t._v(" "),n("p",[t._v('This encode is meant to be "safe" and does not throw errors. It will try as\nhard as it can to properly encode the given URL, including replacing any raw,\nunpaired surrogate pairs with the Unicode replacement character prior to\nencoding.')]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://tools.ietf.org/html/rfc3986",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 3986: Uniform Resource Identifier (URI): Generic Syntax"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://url.spec.whatwg.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WHATWG URL Living Standard"),n("OutboundLink")],1)])]),t._v(" "),t._m(16),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"encodeurl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encodeurl","aria-hidden":"true"}},[this._v("#")]),this._v(" encodeurl")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm install encodeurl\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" encodeUrl "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'encodeurl'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"encodeurl-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encodeurl-url","aria-hidden":"true"}},[this._v("#")]),this._v(" encodeUrl(url)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v('This function will take an already-encoded URL and encode all the non-URL\ncode points (as UTF-8 byte sequences). This function will not encode the\n"%" character unless it is not part of a valid sequence ('),s("code",[this._v("%20")]),this._v(" will be\nleft as-is, but "),s("code",[this._v("%foo")]),this._v(" will be encoded as "),s("code",[this._v("%25foo")]),this._v(").")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("This function is "),n("em",[t._v("similar")]),t._v(" to the intrinsic function "),n("code",[t._v("encodeURI")]),t._v(", except it\nwill not encode the "),n("code",[t._v("%")]),t._v(" character if that is part of a valid sequence, will\nnot encode "),n("code",[t._v("[")]),t._v(" and "),n("code",[t._v("]")]),t._v(" (for IPv6 hostnames) and will replace raw, unpaired\nsurrogate pairs with the Unicode replacement character (instead of throwing).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"encode-a-url-containing-user-controled-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encode-a-url-containing-user-controled-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Encode a URL containing user-controled data")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" encodeUrl "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'encodeurl'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" escapeHtml "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'escape-html'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nhttp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createServer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("onRequest")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// get encoded form of inbound url")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("encodeUrl")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// create html message")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" body "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'<p>Location '")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("escapeHtml")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("' not found</p>'")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// send a 404")]),t._v("\n  res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusCode "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("404")]),t._v("\n  res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setHeader")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'text/html; charset=UTF-8'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setHeader")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Content-Length'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("String")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Buffer"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("byteLength")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"encode-a-url-for-use-in-a-header-field"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encode-a-url-for-use-in-a-header-field","aria-hidden":"true"}},[this._v("#")]),this._v(" Encode a URL for use in a header field")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" encodeUrl "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'encodeurl'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" escapeHtml "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'escape-html'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'url'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nhttp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createServer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("onRequest")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// parse inbound url")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" href "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("parse")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// set new host for redirect")]),t._v("\n  href"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'localhost'")]),t._v("\n  href"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protocol "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'https:'")]),t._v("\n  href"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slashes "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// create location header")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" location "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("encodeUrl")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("format")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("href"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// create html message")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" body "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'<p>Redirecting to new site: '")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("escapeHtml")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'</p>'")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// send a 301")]),t._v("\n  res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusCode "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("301")]),t._v("\n  res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setHeader")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'text/html; charset=UTF-8'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setHeader")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Content-Length'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("String")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Buffer"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("byteLength")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setHeader")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Location'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" location"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm test\n$ npm run lint\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"LICENSE"}},[this._v("MIT")])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);