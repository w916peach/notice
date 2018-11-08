(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{344:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[n("a",{attrs:{href:"https://travis-ci.org/bcoe/cliui",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://travis-ci.org/bcoe/cliui.png",alt:"Build Status"}}),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://coveralls.io/r/bcoe/cliui?branch=",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://coveralls.io/repos/bcoe/cliui/badge.svg?branch=",alt:"Coverage Status"}}),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://www.npmjs.com/package/cliui",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/npm/v/cliui.svg",alt:"NPM version"}}),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("easily create complex multi-column command-line-interfaces.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),n("p",[t._v("cliui exposes a simple layout DSL:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),n("p",[t._v("Specify the maximum width of the UI being generated.")]),t._v(" "),t._m(13),t._v(" "),n("p",[t._v("Enable or disable the wrapping of text in a column.")]),t._v(" "),t._m(14),t._v(" "),n("p",[t._v("Create a row with any number of columns, a column\ncan either be a string, or an object with the following\noptions:")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"cliui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cliui","aria-hidden":"true"}},[this._v("#")]),this._v(" cliui")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ui "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'cliui'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  width"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nui"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Usage: $0 [command] [options]'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nui"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Options:'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  padding"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nui"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"-f, --file"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("40")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    padding"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"the file to load"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("25")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"[required]"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    align"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'right'")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ui"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toString")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"layout-dsl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layout-dsl","aria-hidden":"true"}},[this._v("#")]),this._v(" Layout DSL")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you create a single "),s("code",[this._v("ui.row")]),this._v(", passing a string rather than an\nobject:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("\\n")]),this._v(": characters will be interpreted as new rows.")]),this._v(" "),s("li",[s("code",[this._v("\\t")]),this._v(": characters will be interpreted as new columns.")]),this._v(" "),s("li",[s("code"),this._v(": characters will be interpreted as padding.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("as an example...")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ui "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  width"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("60")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nui"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'Usage: node ./bin/foo.js\\n'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'  <regex>\\t  provide a regex\\n'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'  <glob>\\t  provide a glob\\t [required]'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ui"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toString")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("will output:")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("Usage: node ./bin/foo.js\n  "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("regex"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("  provide a regex\n  "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("glob"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("   provide a glob          "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("required"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("cliui "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'cliui'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"cliui-width-integer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cliui-width-integer","aria-hidden":"true"}},[this._v("#")]),this._v(" cliui({width: integer})")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"cliui-wrap-boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cliui-wrap-boolean","aria-hidden":"true"}},[this._v("#")]),this._v(" cliui({wrap: boolean})")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"cliui-div-column-column-column"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cliui-div-column-column-column","aria-hidden":"true"}},[this._v("#")]),this._v(" cliui.div(column, column, column)")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("strong",[t._v("width:")]),t._v(" the width of a column.")]),t._v(" "),n("li",[n("strong",[t._v("align:")]),t._v(" alignment, "),n("code",[t._v("right")]),t._v(" or "),n("code",[t._v("center")]),t._v(".")]),t._v(" "),n("li",[n("strong",[t._v("padding:")]),t._v(" "),n("code",[t._v("[top, right, bottom, left]")]),t._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"cliui-span-column-column-column"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cliui-span-column-column-column","aria-hidden":"true"}},[this._v("#")]),this._v(" cliui.span(column, column, column)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Similar to "),s("code",[this._v("div")]),this._v(", except the next row will be appended without\na new line being created.")])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);