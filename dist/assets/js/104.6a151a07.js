(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{259:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://npmjs.org/package/proxy-addr",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/proxy-addr.svg",alt:"NPM Version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://npmjs.org/package/proxy-addr",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dm/proxy-addr.svg",alt:"NPM Downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/node/v/proxy-addr.svg",alt:"Node.js Version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://travis-ci.org/jshttp/proxy-addr",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/travis/jshttp/proxy-addr/master.svg",alt:"Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://coveralls.io/r/jshttp/proxy-addr?branch=master",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/coveralls/jshttp/proxy-addr/master.svg",alt:"Test Coverage"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Determine address of proxied request")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("This is a "),a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),a("OutboundLink")],1),t._v(" module available through the\n"),a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm registry"),a("OutboundLink")],1),t._v(". Installation is done using the\n"),a("a",{attrs:{href:"https://docs.npmjs.com/getting-started/installing-npm-packages-locally",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("npm install")]),t._v(" command"),a("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("As a convenience, this module also takes certain pre-defined names\nin addition to IP addresses, which expand into IP addresses:")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"proxy-addr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy-addr","aria-hidden":"true"}},[this._v("#")]),this._v(" proxy-addr")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm install proxy-addr\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" proxyaddr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'proxy-addr'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"proxyaddr-req-trust"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxyaddr-req-trust","aria-hidden":"true"}},[this._v("#")]),this._v(" proxyaddr(req, trust)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Return the address of the request, using the given "),s("code",[this._v("trust")]),this._v(" parameter.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("trust")]),this._v(" argument is a function that returns "),s("code",[this._v("true")]),this._v(" if you trust\nthe address, "),s("code",[this._v("false")]),this._v(" if you don't. The closest untrusted address is\nreturned.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("proxyaddr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" addr "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("proxyaddr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("trust")]),this._v(" arugment may also be a single IP address string or an\narray of trusted addresses, as plain IP addresses, CIDR-formatted\nstrings, or IP/netmask strings.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("proxyaddr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("proxyaddr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'127.0.0.0/8'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'10.0.0.0/8'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("proxyaddr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'127.0.0.0/255.0.0.0'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'192.168.0.0/255.255.0.0'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This module also supports IPv6. Your IPv6 addresses will be normalized\nautomatically (i.e. "),s("code",[this._v("fe80::00ed:1")]),this._v(" equals "),s("code",[this._v("fe80:0:0:0:0:0:ed:1")]),this._v(").")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("proxyaddr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'::1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("proxyaddr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'::1/128'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'fe80::/10'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This module will automatically work with IPv4-mapped IPv6 addresses\nas well to support node.js in IPv6-only mode. This means that you do\nnot have to specify both "),s("code",[this._v("::ffff:a00:1")]),this._v(" and "),s("code",[this._v("10.0.0.1")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("proxyaddr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'loopback'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("proxyaddr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'loopback'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'fc00:ac:1ab5:fff::1/64'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("loopback")]),t._v(": IPv4 and IPv6 loopback addresses (like "),a("code",[t._v("::1")]),t._v(" and\n"),a("code",[t._v("127.0.0.1")]),t._v(").")]),t._v(" "),a("li",[a("code",[t._v("linklocal")]),t._v(": IPv4 and IPv6 link-local addresses (like\n"),a("code",[t._v("fe80::1:1:1:1")]),t._v(" and "),a("code",[t._v("169.254.0.1")]),t._v(").")]),t._v(" "),a("li",[a("code",[t._v("uniquelocal")]),t._v(": IPv4 private addresses and IPv6 unique-local\naddresses (like "),a("code",[t._v("fc00:ac:1ab5:fff::1")]),t._v(" and "),a("code",[t._v("192.168.0.1")]),t._v(").")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("When "),a("code",[t._v("trust")]),t._v(" is specified as a function, it will be called for each\naddress to determine if it is a trusted address. The function is\ngiven two arguments: "),a("code",[t._v("addr")]),t._v(" and "),a("code",[t._v("i")]),t._v(", where "),a("code",[t._v("addr")]),t._v(" is a string of\nthe address to check and "),a("code",[t._v("i")]),t._v(" is a number that represents the distance\nfrom the socket address.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"proxyaddr-all-req-trust"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxyaddr-all-req-trust","aria-hidden":"true"}},[this._v("#")]),this._v(" proxyaddr.all(req, [trust])")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Return all the addresses of the request, optionally stopping at the\nfirst untrusted. This array is ordered from closest to furthest\n(i.e. "),s("code",[this._v("arr[0] === req.connection.remoteAddress")]),this._v(").")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("proxyaddr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("all")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The optional "),s("code",[this._v("trust")]),this._v(" argument takes the same arguments as "),s("code",[this._v("trust")]),this._v("\ndoes in "),s("code",[this._v("proxyaddr(req, trust)")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("proxyaddr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("all")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'loopback'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"proxyaddr-compile-val"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxyaddr-compile-val","aria-hidden":"true"}},[this._v("#")]),this._v(" proxyaddr.compile(val)")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Compiles argument "),a("code",[t._v("val")]),t._v(" into a "),a("code",[t._v("trust")]),t._v(" function. This function takes\nthe same arguments as "),a("code",[t._v("trust")]),t._v(" does in "),a("code",[t._v("proxyaddr(req, trust)")]),t._v(" and\nreturns a function suitable for "),a("code",[t._v("proxyaddr(req, trust)")]),t._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" trust "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" proxyaddr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("compile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'loopback'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("proxyaddr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trust"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This function is meant to be optimized for use against every request.\nIt is recommend to compile a trust function up-front for the trusted\nconfiguration and pass that to "),s("code",[this._v("proxyaddr(req, trust)")]),this._v(" for each request.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm test\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"benchmarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#benchmarks","aria-hidden":"true"}},[this._v("#")]),this._v(" Benchmarks")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm run-script bench\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"LICENSE"}},[this._v("MIT")])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);