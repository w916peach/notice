(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{322:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[e("a",{attrs:{href:"https://npmjs.org/package/mime-types",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badgen.net/npm/v/mime-types",alt:"NPM Version"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://npmjs.org/package/mime-types",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badgen.net/npm/dm/mime-types",alt:"NPM Downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badgen.net/npm/node/mime-types",alt:"Node.js Version"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://travis-ci.org/jshttp/mime-types",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badgen.net/travis/jshttp/mime-types/master",alt:"Build Status"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://coveralls.io/r/jshttp/mime-types?branch=master",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badgen.net/coveralls/c/github/jshttp/mime-types/master",alt:"Test Coverage"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("The ultimate javascript content-type utility.")]),t._v(" "),e("p",[t._v("Similar to "),e("a",{attrs:{href:"https://www.npmjs.com/package/mime",target:"_blank",rel:"noopener noreferrer"}},[t._v("the "),e("code",[t._v("mime@1.x")]),t._v(" module"),e("OutboundLink")],1),t._v(", except:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("This is a "),e("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),e("OutboundLink")],1),t._v(" module available through the\n"),e("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm registry"),e("OutboundLink")],1),t._v(". Installation is done using the\n"),e("a",{attrs:{href:"https://docs.npmjs.com/getting-started/installing-npm-packages-locally",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("npm install")]),t._v(" command"),e("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(4),t._m(5),t._v(" "),e("p",[t._v("All mime types are based on "),e("a",{attrs:{href:"https://www.npmjs.com/package/mime-db",target:"_blank",rel:"noopener noreferrer"}},[t._v("mime-db"),e("OutboundLink")],1),t._v(",\nso open a PR there if you'd like to add mime types.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("Lookup the content-type associated with a file.")]),t._v(" "),t._m(10),t._m(11),t._v(" "),e("p",[t._v("Create a full content-type header given a content-type or extension.")]),t._v(" "),t._m(12),t._m(13),t._v(" "),e("p",[t._v("Get the default extension for a content-type.")]),t._v(" "),t._m(14),t._m(15),t._v(" "),e("p",[t._v("Lookup the implied default charset of a content-type.")]),t._v(" "),t._m(16),t._m(17),t._v(" "),e("p",[t._v("A map of content-types by extension.")]),t._v(" "),t._m(18),t._v(" "),e("p",[t._v("A map of extensions by content-type.")]),t._v(" "),t._m(19),t._v(" "),t._m(20)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"mime-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-types","aria-hidden":"true"}},[this._v("#")]),this._v(" mime-types")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("strong",[t._v("No fallbacks.")]),t._v(" Instead of naively returning the first available type,\n"),e("code",[t._v("mime-types")]),t._v(" simply returns "),e("code",[t._v("false")]),t._v(", so do\n"),e("code",[t._v("var type = mime.lookup('unrecognized') || 'application/octet-stream'")]),t._v(".")]),t._v(" "),e("li",[t._v("No "),e("code",[t._v("new Mime()")]),t._v(" business, so you could do "),e("code",[t._v("var lookup = require('mime-types').lookup")]),t._v(".")]),t._v(" "),e("li",[t._v("No "),e("code",[t._v(".define()")]),t._v(" functionality")]),t._v(" "),e("li",[t._v("Bug fixes for "),e("code",[t._v(".lookup(path)")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Otherwise, the API is compatible with "),s("code",[this._v("mime")]),this._v(" 1.x.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm install mime-types\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"adding-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding Types")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mime "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("require")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'mime-types'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("All functions return "),s("code",[this._v("false")]),this._v(" if input is invalid or not found.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mime-lookup-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-lookup-path","aria-hidden":"true"}},[this._v("#")]),this._v(" mime.lookup(path)")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("mime"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("lookup")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'json'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("             "),e("span",{attrs:{class:"token comment"}},[t._v("// 'application/json'")]),t._v("\nmime"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("lookup")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'.md'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),e("span",{attrs:{class:"token comment"}},[t._v("// 'text/markdown'")]),t._v("\nmime"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("lookup")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'file.html'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),e("span",{attrs:{class:"token comment"}},[t._v("// 'text/html'")]),t._v("\nmime"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("lookup")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'folder/file.js'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),e("span",{attrs:{class:"token comment"}},[t._v("// 'application/javascript'")]),t._v("\nmime"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("lookup")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'folder/.htaccess'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\nmime"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("lookup")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'cats'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mime-contenttype-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-contenttype-type","aria-hidden":"true"}},[this._v("#")]),this._v(" mime.contentType(type)")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("mime"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("contentType")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'markdown'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{attrs:{class:"token comment"}},[t._v("// 'text/x-markdown; charset=utf-8'")]),t._v("\nmime"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("contentType")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'file.json'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// 'application/json; charset=utf-8'")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// from a full path")]),t._v("\nmime"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("contentType")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("extname")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'/path/to/file.json'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// 'application/json; charset=utf-8'")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mime-extension-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-extension-type","aria-hidden":"true"}},[this._v("#")]),this._v(" mime.extension(type)")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("mime"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("extension")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'application/octet-stream'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// 'bin'")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mime-charset-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-charset-type","aria-hidden":"true"}},[this._v("#")]),this._v(" mime.charset(type)")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("mime"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("charset")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'text/markdown'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// 'UTF-8'")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"var-type-mime-types-extension"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#var-type-mime-types-extension","aria-hidden":"true"}},[this._v("#")]),this._v(" var type = mime.types[extension]")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"extensions-mime-extensions-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extensions-mime-extensions-type","aria-hidden":"true"}},[this._v("#")]),this._v(" [extensions...] = mime.extensions[type]")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"LICENSE"}},[this._v("MIT")])])}],!1,null,null,null);a.options.__file="README.md";s.default=a.exports}}]);