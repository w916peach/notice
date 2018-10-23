(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{319:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Comprehensive MIME type mapping API based on mime-db module.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Install with "),a("a",{attrs:{href:"http://github.com/isaacs/npm",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),a("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("E.g.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),a("p",[t._v("Map mime-type to charset")]),t._v(" "),t._m(18),a("p",[t._v("(The logic for charset lookups is pretty rudimentary.  Feel free to suggest improvements.)")]),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("Custom type mappings can be added on a per-project basis via the following APIs.")]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("Add custom mime/extension mappings")]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),a("p",[t._v('Load mappings from an Apache ".types" format file')]),t._v(" "),t._m(25),t._m(26)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"mime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime","aria-hidden":"true"}},[this._v("#")]),this._v(" mime")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("npm install mime\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"contributing-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributing-testing","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributing / Testing")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("npm run test\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"command-line"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-line","aria-hidden":"true"}},[this._v("#")]),this._v(" Command Line")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("mime [path_string]\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("> mime scripts/jquery.js\napplication/javascript\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-queries","aria-hidden":"true"}},[this._v("#")]),this._v(" API - Queries")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mime-lookup-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-lookup-path","aria-hidden":"true"}},[this._v("#")]),this._v(" mime.lookup(path)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Get the mime type associated with a file, if no mime type is found "),s("code",[this._v("application/octet-stream")]),this._v(" is returned. Performs a case-insensitive lookup using the extension in "),s("code",[this._v("path")]),this._v(" (the substring after the last '/' or '.').  E.g.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mime "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'mime'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("lookup")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/path/to/file.txt'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),a("span",{attrs:{class:"token comment"}},[t._v("// => 'text/plain'")]),t._v("\nmime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("lookup")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'file.txt'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                  "),a("span",{attrs:{class:"token comment"}},[t._v("// => 'text/plain'")]),t._v("\nmime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("lookup")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'.TXT'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                      "),a("span",{attrs:{class:"token comment"}},[t._v("// => 'text/plain'")]),t._v("\nmime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("lookup")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'htm'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                       "),a("span",{attrs:{class:"token comment"}},[t._v("// => 'text/html'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mime-default-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-default-type","aria-hidden":"true"}},[this._v("#")]),this._v(" mime.default_type")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Sets the mime type returned when "),s("code",[this._v("mime.lookup")]),this._v(" fails to find the extension searched for. (Default is "),s("code",[this._v("application/octet-stream")]),this._v(".)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mime-extension-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-extension-type","aria-hidden":"true"}},[this._v("#")]),this._v(" mime.extension(type)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Get the default extension for "),s("code",[this._v("type")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("extension")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'text/html'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                 "),a("span",{attrs:{class:"token comment"}},[t._v("// => 'html'")]),t._v("\nmime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("extension")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'application/octet-stream'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// => 'bin'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mime-charsets-lookup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-charsets-lookup","aria-hidden":"true"}},[this._v("#")]),this._v(" mime.charsets.lookup()")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("charsets"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("lookup")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'text/plain'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{attrs:{class:"token comment"}},[t._v("// => 'UTF-8'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api-defining-custom-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-defining-custom-types","aria-hidden":"true"}},[this._v("#")]),this._v(" API - Defining Custom Types")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mime-define"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-define","aria-hidden":"true"}},[this._v("#")]),this._v(" mime.define()")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("define")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'text/x-some-format'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'x-sf'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'x-sft'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'x-sfml'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'application/x-my-type'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'x-mt'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'x-mtt'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// etc ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("lookup")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'x-sft'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                 "),a("span",{attrs:{class:"token comment"}},[t._v("// => 'text/x-some-format'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The first entry in the extensions array is returned by "),s("code",[this._v("mime.extension()")]),this._v(". E.g.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("extension")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'text/x-some-format'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// => 'x-sf'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mime-load-filepath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-load-filepath","aria-hidden":"true"}},[this._v("#")]),this._v(" mime.load(filepath)")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("load")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./my_project.types'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The .types file format is simple -  See the "),s("code",[this._v("types")]),this._v(" dir for examples.")])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);