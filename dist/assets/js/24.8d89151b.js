(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{228:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"camelcase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#camelcase","aria-hidden":"true"}},[s._v("#")]),s._v(" camelcase "),a("a",{attrs:{href:"https://travis-ci.org/sindresorhus/camelcase",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.org/sindresorhus/camelcase.svg?branch=master",alt:"Build Status"}}),a("OutboundLink")],1)]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._m(3),s._v(" "),s._m(4),s._m(5),s._v(" "),a("p",[s._v("See "),a("a",{attrs:{href:"https://github.com/sindresorhus/decamelize",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("decamelize")]),a("OutboundLink")],1),s._v(" for the inverse.")]),s._v(" "),s._m(6),s._v(" "),a("p",[s._v("MIT © "),a("a",{attrs:{href:"http://sindresorhus.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sindre Sorhus"),a("OutboundLink")],1)])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("Convert a dash/dot/underscore/space separated string to camelCase: "),t("code",[this._v("foo-bar")]),this._v(" → "),t("code",[this._v("fooBar")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ npm install --save camelcase\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" camelCase "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("require")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'camelcase'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("camelCase")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'foo-bar'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//=> fooBar")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("camelCase")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'foo_bar'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//=> fooBar")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("camelCase")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'Foo-Bar'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//=> fooBar")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("camelCase")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'--foo.bar'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//=> fooBar")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("camelCase")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'__foo__bar__'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//=> fooBar")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("camelCase")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'foo bar'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//=> fooBar")]),s._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token number"}},[s._v("3")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//=> --foo-bar")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("camelCase")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token number"}},[s._v("3")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//=> fooBar")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("camelCase")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'bar'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//=> fooBar")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("camelCase")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'__foo__'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'--bar'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//=> fooBar")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"related"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related","aria-hidden":"true"}},[this._v("#")]),this._v(" Related")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);e.options.__file="readme.md";t.default=e.exports}}]);