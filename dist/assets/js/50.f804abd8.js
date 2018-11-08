(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{312:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[e("a",{attrs:{href:"https://npmjs.org/package/destroy",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/destroy.svg?style=flat-square",alt:"NPM version"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://travis-ci.org/stream-utils/destroy",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/travis/stream-utils/destroy.svg?style=flat-square",alt:"Build status"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://coveralls.io/r/stream-utils/destroy?branch=master",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/coveralls/stream-utils/destroy.svg?style=flat-square",alt:"Test coverage"}}),e("OutboundLink")],1),t._v(" "),e("router-link",{attrs:{to:"./LICENSE.html"}},[e("img",{attrs:{src:"http://img.shields.io/npm/l/destroy.svg?style=flat-square",alt:"License"}})]),t._v(" "),e("a",{attrs:{href:"https://npmjs.org/package/destroy",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://img.shields.io/npm/dm/destroy.svg?style=flat-square",alt:"Downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.gittip.com/jonathanong/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/gittip/jonathanong.svg?style=flat-square",alt:"Gittip"}}),e("OutboundLink")],1)],1),t._v(" "),e("p",[t._v("Destroy a stream.")]),t._v(" "),e("p",[t._v("This module is meant to ensure a stream gets destroyed, handling different APIs\nand Node.js bugs.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"destroy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destroy","aria-hidden":"true"}},[this._v("#")]),this._v(" Destroy")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" destroy "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("require")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'destroy'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"destroy-stream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destroy-stream","aria-hidden":"true"}},[this._v("#")]),this._v(" destroy(stream)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Destroy the given stream. In most cases, this is identical to a simple\n"),s("code",[this._v("stream.destroy()")]),this._v(" call. The rules are as follows for a given stream:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[t._v("If the "),e("code",[t._v("stream")]),t._v(" is an instance of "),e("code",[t._v("ReadStream")]),t._v(", then call "),e("code",[t._v("stream.destroy()")]),t._v("\nand add a listener to the "),e("code",[t._v("open")]),t._v(" event to call "),e("code",[t._v("stream.close()")]),t._v(" if it is\nfired. This is for a Node.js bug that will leak a file descriptor if\n"),e("code",[t._v(".destroy()")]),t._v(" is called before "),e("code",[t._v("open")]),t._v(".")]),t._v(" "),e("li",[t._v("If the "),e("code",[t._v("stream")]),t._v(" is not an instance of "),e("code",[t._v("Stream")]),t._v(", then nothing happens.")]),t._v(" "),e("li",[t._v("If the "),e("code",[t._v("stream")]),t._v(" has a "),e("code",[t._v(".destroy()")]),t._v(" method, then call it.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The function returns the "),s("code",[this._v("stream")]),this._v(" passed in as the argument.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" destroy "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("require")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'destroy'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("require")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'fs'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" stream "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("createReadStream")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'package.json'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// ... and later")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("destroy")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stream"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])}],!1,null,null,null);r.options.__file="README.md";s.default=r.exports}}]);