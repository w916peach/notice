(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{220:function(e,t,s){"use strict";s.r(t);var n=s(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("It will find all the potentially unsafe places in your own code (with some considerably unlikely\nexceptions).")]),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("If you’re using Node.js ≥ 8.0.0 (which is recommended), Node.js exposes multiple options that help with finding the relevant pieces of code:")]),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("You can set these flags using an environment variable:")]),e._v(" "),e._m(8),e._m(9),e._v(" "),s("p",[e._v("Eslint rules "),s("a",{attrs:{href:"https://eslint.org/docs/rules/no-buffer-constructor",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-buffer-constructor"),s("OutboundLink")],1),e._v("\nor\n"),s("a",{attrs:{href:"https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("node/no-deprecated-api"),s("OutboundLink")],1),e._v("\nalso find calls to deprecated "),s("code",[e._v("Buffer()")]),e._v(" API. Those rules are included in some pre-sets.")]),e._v(" "),s("p",[e._v("There is a drawback, though, that it doesn't always\n"),s("a",{attrs:{href:"https://github.com/chalker/safer-buffer#why-not-safe-buffer",target:"_blank",rel:"noopener noreferrer"}},[e._v("work correctly"),s("OutboundLink")],1),e._v(" when "),s("code",[e._v("Buffer")]),e._v(" is\noverriden e.g. with a polyfill, so recommended is a combination of this and some other method\ndescribed above.")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),s("p",[e._v("This is the recommended solution nowadays that would imply only minimal overhead.")]),e._v(" "),s("p",[e._v("The Node.js 5.x release line has been unsupported since July 2016, and the Node.js 4.x release line reaches its End of Life in April 2018 (→ "),s("a",{attrs:{href:"https://github.com/nodejs/Release#release-schedule",target:"_blank",rel:"noopener noreferrer"}},[e._v("Schedule"),s("OutboundLink")],1),e._v("). This means that these versions of Node.js will "),s("em",[e._v("not")]),e._v(" receive any updates, even in case of security issues, so using these release lines should be avoided, if at all possible.")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),s("p",[e._v("Enabling eslint rule "),s("a",{attrs:{href:"https://eslint.org/docs/rules/no-buffer-constructor",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-buffer-constructor"),s("OutboundLink")],1),e._v("\nor\n"),s("a",{attrs:{href:"https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("node/no-deprecated-api"),s("OutboundLink")],1),e._v("\nis recommended to avoid accidential unsafe Buffer API usage.")]),e._v(" "),s("p",[e._v("There is also a "),s("a",{attrs:{href:"https://github.com/joyeecheung/node-dep-codemod#dep005",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSCodeshift codemod"),s("OutboundLink")],1),e._v("\nfor automatically migrating Buffer constructors to "),s("code",[e._v("Buffer.alloc()")]),e._v(" or "),s("code",[e._v("Buffer.from()")]),e._v(".\nNote that it currently only works with cases where the arguments are literals or where the\nconstructor is invoked with two arguments.")]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),s("p",[e._v("Utilize "),s("a",{attrs:{href:"https://www.npmjs.com/package/safer-buffer",target:"_blank",rel:"noopener noreferrer"}},[e._v("safer-buffer"),s("OutboundLink")],1),e._v(" as a polyfill to support older\nNode.js versions.")]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),s("p",[e._v("Alternatively, you could use "),s("a",{attrs:{href:"https://www.npmjs.com/package/buffer-from",target:"_blank",rel:"noopener noreferrer"}},[e._v("buffer-from"),s("OutboundLink")],1),e._v(" and/or\n"),s("a",{attrs:{href:"https://www.npmjs.com/package/buffer-alloc",target:"_blank",rel:"noopener noreferrer"}},[e._v("buffer-alloc"),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://ponyfill.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ponyfills"),s("OutboundLink")],1),e._v(" —\nthose are great, the only downsides being 4 deps in the tree and slightly more code changes to\nmigrate off them (as you would be using e.g. "),s("code",[e._v("Buffer.from")]),e._v(" under a different name). If you need only\n"),s("code",[e._v("Buffer.from")]),e._v(" polyfilled — "),s("code",[e._v("buffer-from")]),e._v(" alone which comes with no extra dependencies.")]),e._v(" "),s("p",[s("em",[e._v("Alternatively, you could use "),s("a",{attrs:{href:"https://www.npmjs.com/package/safe-buffer",target:"_blank",rel:"noopener noreferrer"}},[e._v("safe-buffer"),s("OutboundLink")],1),e._v(" — it also\nprovides a polyfill, but takes a different approach which has\n"),s("a",{attrs:{href:"https://github.com/chalker/safer-buffer#why-not-safe-buffer",target:"_blank",rel:"noopener noreferrer"}},[e._v("it's drawbacks"),s("OutboundLink")],1),e._v(". It will allow you\nto also use the older "),s("code",[e._v("new Buffer()")]),e._v(" API in your code, though — but that's arguably a benefit, as\nit is problematic, can cause issues in your code, and will start emitting runtime deprecation\nwarnings starting with Node.js 10.")])]),e._v(" "),e._m(20),e._v(" "),s("p",[e._v("Enabling eslint rule "),s("a",{attrs:{href:"https://eslint.org/docs/rules/no-buffer-constructor",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-buffer-constructor"),s("OutboundLink")],1),e._v("\nor\n"),s("a",{attrs:{href:"https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("node/no-deprecated-api"),s("OutboundLink")],1),e._v("\nis recommended.")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),s("p",[e._v("This is useful if you create Buffer instances in only a few places (e.g. one), or you have your own\nwrapper around them.")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),s("p",[e._v("Before:")]),e._v(" "),e._m(27),s("p",[e._v("After:")]),e._v(" "),e._m(28),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),s("p",[e._v("For Node.js 0.10.x (and below) support:")]),e._v(" "),e._m(34),s("p",[e._v("Otherwise (Node.js ≥ 0.12.x):")]),e._v(" "),e._m(35),e._m(36),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._v(" "),e._m(45),e._v(" "),e._m(46),e._v(" "),e._m(47),e._v(" "),e._m(48),e._v(" "),e._m(49),e._m(50),e._v(" "),e._m(51),e._v(" "),s("p",[e._v("Because of the missing type check, an attacker could intentionally send a number\nas part of the request. Using this, they can either:")]),e._v(" "),e._m(52),e._v(" "),s("p",[e._v("Both of these scenarios are considered serious security issues in a real-world\nweb server context.")]),e._v(" "),e._m(53),e._v(" "),e._m(54),e._v(" "),e._m(55),e._v(" "),e._m(56)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"porting-to-the-buffer-from-buffer-alloc-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#porting-to-the-buffer-from-buffer-alloc-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Porting to the Buffer.from/Buffer.alloc API")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{id:"overview"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"#variant-1"}},[e._v("Variant 1: Drop support for Node.js ≤ 4.4.x and 5.0.0 — 5.9.x.")]),e._v(" ("),s("em",[e._v("recommended")]),e._v(")")]),e._v(" "),s("li",[s("a",{attrs:{href:"#variant-2"}},[e._v("Variant 2: Use a polyfill")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#variant-3"}},[e._v("Variant 3: manual detection, with safeguards")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"finding-problematic-bits-of-code-using-grep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-problematic-bits-of-code-using-grep","aria-hidden":"true"}},[this._v("#")]),this._v(" Finding problematic bits of code using grep")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Just run "),t("code",[this._v("grep -nrE '[^a-zA-Z](Slow)?Buffer\\s*\\(' --exclude-dir node_modules")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"finding-problematic-bits-of-code-using-node-js-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-problematic-bits-of-code-using-node-js-8","aria-hidden":"true"}},[this._v("#")]),this._v(" Finding problematic bits of code using Node.js 8")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("--trace-warnings")]),e._v(" will make Node.js show a stack trace for this warning and other warnings that are printed by Node.js.")]),e._v(" "),s("li",[s("code",[e._v("--trace-deprecation")]),e._v(" does the same thing, but only for deprecation warnings.")]),e._v(" "),s("li",[s("code",[e._v("--pending-deprecation")]),e._v(" will show more types of deprecation warnings. In particular, it will show the "),s("code",[e._v("Buffer()")]),e._v(" deprecation warning, even on Node.js 8.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-console line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ export NODE_OPTIONS='--trace-warnings --pending-deprecation'\n$ cat example.js\n'use strict';\nconst foo = new Buffer('foo');\n$ node example.js\n(node:7147) [DEP0005] DeprecationWarning: The Buffer() and new Buffer() constructors are not recommended for use due to security and usability concerns. Please use the new Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() construction methods instead.\n    at showFlaggedDeprecation (buffer.js:127:13)\n    at new Buffer (buffer.js:148:3)\n    at Object.<anonymous> (/path/to/example.js:2:13)\n    [... more stack trace lines ...]\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"finding-problematic-bits-of-code-using-linters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-problematic-bits-of-code-using-linters","aria-hidden":"true"}},[this._v("#")]),this._v(" Finding problematic bits of code using linters")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{id:"variant-1"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"variant-1-drop-support-for-node-js-≤-4-4-x-and-5-0-0-—-5-9-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variant-1-drop-support-for-node-js-≤-4-4-x-and-5-0-0-—-5-9-x","aria-hidden":"true"}},[this._v("#")]),this._v(" Variant 1: Drop support for Node.js ≤ 4.4.x and 5.0.0 — 5.9.x.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("What you would do in this case is to convert all "),s("code",[e._v("new Buffer()")]),e._v(" or "),s("code",[e._v("Buffer()")]),e._v(" calls to use "),s("code",[e._v("Buffer.alloc()")]),e._v(" or "),s("code",[e._v("Buffer.from()")]),e._v(", in the following way:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("For "),s("code",[e._v("new Buffer(number)")]),e._v(", replace it with "),s("code",[e._v("Buffer.alloc(number)")]),e._v(".")]),e._v(" "),s("li",[e._v("For "),s("code",[e._v("new Buffer(string)")]),e._v(" (or "),s("code",[e._v("new Buffer(string, encoding)")]),e._v("), replace it with "),s("code",[e._v("Buffer.from(string)")]),e._v(" (or "),s("code",[e._v("Buffer.from(string, encoding)")]),e._v(").")]),e._v(" "),s("li",[e._v("For all other combinations of arguments (these are much rarer), also replace "),s("code",[e._v("new Buffer(...arguments)")]),e._v(" with "),s("code",[e._v("Buffer.from(...arguments)")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Note that "),t("code",[this._v("Buffer.alloc()")]),this._v(" is also "),t("em",[this._v("faster")]),this._v(" on the current Node.js versions than\n"),t("code",[this._v("new Buffer(size).fill(0)")]),this._v(", which is what you would otherwise need to ensure zero-filling.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("If you currently support those older Node.js versions and dropping them would be a semver-major change\nfor you, or if you support older branches of your packages, consider using "),t("a",{attrs:{href:"#variant-2"}},[this._v("Variant 2")]),this._v("\nor "),t("a",{attrs:{href:"#variant-3"}},[this._v("Variant 3")]),this._v(" on older branches, so people using those older branches will also receive\nthe fix. That way, you will eradicate potential issues caused by unguarded Buffer API usage and\nyour users will not observe a runtime deprecation warning when running your code on Node.js 10.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{id:"variant-2"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"variant-2-use-a-polyfill"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variant-2-use-a-polyfill","aria-hidden":"true"}},[this._v("#")]),this._v(" Variant 2: Use a polyfill")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You would take exacly the same steps as in "),t("a",{attrs:{href:"#variant-1"}},[this._v("Variant 1")]),this._v(", but with a polyfill\n"),t("code",[this._v("const Buffer = require('safer-buffer').Buffer")]),this._v(" in all files where you use the new "),t("code",[this._v("Buffer")]),this._v(" api.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Make sure that you do not use old "),t("code",[this._v("new Buffer")]),this._v(" API — in any files where the line above is added,\nusing old "),t("code",[this._v("new Buffer()")]),this._v(" API will "),t("em",[this._v("throw")]),this._v(". It will be easy to notice that in CI, though.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Note that in either case, it is important that you also remove all calls to the old Buffer\nAPI manually — just throwing in "),t("code",[this._v("safe-buffer")]),this._v(" doesn't fix the problem by itself, it just provides\na polyfill for the new API. I have seen people doing that mistake.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Don't forget to drop the polyfill usage once you drop support for Node.js < 4.5.0.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{id:"variant-3"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"variant-3-—-manual-detection-with-safeguards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variant-3-—-manual-detection-with-safeguards","aria-hidden":"true"}},[this._v("#")]),this._v(" Variant 3 — manual detection, with safeguards")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"buffer-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buffer-0","aria-hidden":"true"}},[this._v("#")]),this._v(" Buffer(0)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This special case for creating empty buffers can be safely replaced with "),t("code",[this._v("Buffer.concat([])")]),this._v(", which\nreturns the same result all the way down to Node.js 0.8.x.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"buffer-notnumber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buffer-notnumber","aria-hidden":"true"}},[this._v("#")]),this._v(" Buffer(notNumber)")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[e._v("var")]),e._v(" buf "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("Buffer")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("notNumber"),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" encoding"),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[e._v("var")]),e._v(" buf"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Buffer"),s("span",{attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("&&")]),e._v(" Buffer"),s("span",{attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("!==")]),e._v(" Uint8Array"),s("span",{attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{attrs:{class:"token keyword"}},[e._v("from")]),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  buf "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" Buffer"),s("span",{attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{attrs:{class:"token keyword"}},[e._v("from")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("notNumber"),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" encoding"),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{attrs:{class:"token keyword"}},[e._v("else")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{attrs:{class:"token keyword"}},[e._v("typeof")]),e._v(" notNumber "),s("span",{attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v("'number'")]),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{attrs:{class:"token keyword"}},[e._v("throw")]),e._v(" "),s("span",{attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("Error")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{attrs:{class:"token string"}},[e._v("'The \"size\" argument must be of type number.'")]),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  buf "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("Buffer")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("notNumber"),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" encoding"),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("encoding")]),this._v(" is optional.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Note that the "),s("code",[e._v("typeof notNumber")]),e._v(" before "),s("code",[e._v("new Buffer")]),e._v(" is required (for cases when "),s("code",[e._v("notNumber")]),e._v(" argument is not\nhard-coded) and "),s("em",[e._v("is not caused by the deprecation of Buffer constructor")]),e._v(" — it's exactly "),s("em",[e._v("why")]),e._v(" the\nBuffer constructor is deprecated. Ecosystem packages lacking this type-check caused numereous\nsecurity issues — situations when unsanitized user input could end up in the "),s("code",[e._v("Buffer(arg)")]),e._v(" create\nproblems ranging from DoS to leaking sensitive information to the attacker from the process memory.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("When "),s("code",[e._v("notNumber")]),e._v(" argument is hardcoded (e.g. literal "),s("code",[e._v('"abc"')]),e._v(" or "),s("code",[e._v("[0,1,2]")]),e._v("), the "),s("code",[e._v("typeof")]),e._v(" check can\nbe omitted.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Also note that using TypeScript does not fix this problem for you — when libs written in\n"),t("code",[this._v("TypeScript")]),this._v(" are used from JS, or when user input ends up there — it behaves exactly as pure JS, as\nall type checks are translation-time only and are not present in the actual JS code which TS\ncompiles to.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"buffer-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buffer-number","aria-hidden":"true"}},[this._v("#")]),this._v(" Buffer(number)")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[e._v("var")]),e._v(" buf"),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Buffer"),s("span",{attrs:{class:"token punctuation"}},[e._v(".")]),e._v("alloc"),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  buf "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" Buffer"),s("span",{attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{attrs:{class:"token function"}},[e._v("alloc")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("number"),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{attrs:{class:"token keyword"}},[e._v("else")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  buf "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("Buffer")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("number"),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  buf"),s("span",{attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{attrs:{class:"token function"}},[e._v("fill")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{attrs:{class:"token number"}},[e._v("0")]),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[e._v("const")]),e._v(" buf "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" Buffer"),s("span",{attrs:{class:"token punctuation"}},[e._v(".")]),e._v("alloc "),s("span",{attrs:{class:"token operator"}},[e._v("?")]),e._v(" Buffer"),s("span",{attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{attrs:{class:"token function"}},[e._v("alloc")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("number"),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("Buffer")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("number"),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{attrs:{class:"token function"}},[e._v("fill")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{attrs:{class:"token number"}},[e._v("0")]),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"regarding-buffer-allocunsafe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regarding-buffer-allocunsafe","aria-hidden":"true"}},[this._v("#")]),this._v(" Regarding Buffer.allocUnsafe")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Be extra cautious when using "),t("code",[this._v("Buffer.allocUnsafe")]),this._v(":")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Don't use it if you don't have a good reason to\n"),s("ul",[s("li",[e._v("e.g. you probably won't ever see a performance difference for small buffers, in fact, those\nmight be even faster with "),s("code",[e._v("Buffer.alloc()")]),e._v(",")]),e._v(" "),s("li",[e._v("if your code is not in the hot code path — you also probably won't notice a difference,")]),e._v(" "),s("li",[e._v("keep in mind that zero-filling minimizes the potential risks.")])])]),e._v(" "),s("li",[e._v("If you use it, make sure that you never return the buffer in a partially-filled state,\n"),s("ul",[s("li",[e._v("if you are writing to it sequentially — always truncate it to the actuall written length")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Errors in handling buffers allocated with "),t("code",[this._v("Buffer.allocUnsafe")]),this._v(" could result in various issues,\nranged from undefined behaviour of your code to sensitive data (user input, passwords, certs)\nleaking to the remote attacker.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Note that the same applies to "),t("code",[this._v("new Buffer")]),this._v(" usage without zero-filling, depending on the Node.js\nversion (and lacking type checks also adds DoS to the list of potential problems).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{id:"faq"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[this._v("#")]),this._v(" FAQ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{id:"design-flaws"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"what-is-wrong-with-the-buffer-constructor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-wrong-with-the-buffer-constructor","aria-hidden":"true"}},[this._v("#")]),this._v(" What is wrong with the "),t("code",[this._v("Buffer")]),this._v(" constructor?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("Buffer")]),this._v(" constructor could be used to create a buffer in many different ways:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("new Buffer(42)")]),e._v(" creates a "),s("code",[e._v("Buffer")]),e._v(" of 42 bytes. Before Node.js 8, this buffer contained\n"),s("em",[e._v("arbitrary memory")]),e._v(" for performance reasons, which could include anything ranging from\nprogram source code to passwords and encryption keys.")]),e._v(" "),s("li",[s("code",[e._v("new Buffer('abc')")]),e._v(" creates a "),s("code",[e._v("Buffer")]),e._v(" that contains the UTF-8-encoded version of\nthe string "),s("code",[e._v("'abc'")]),e._v(". A second argument could specify another encoding: For example,\n"),s("code",[e._v("new Buffer(string, 'base64')")]),e._v(" could be used to convert a Base64 string into the original\nsequence of bytes that it represents.")]),e._v(" "),s("li",[e._v("There are several other combinations of arguments.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This meant that, in code like "),t("code",[this._v("var buffer = new Buffer(foo);")]),this._v(", "),t("em",[this._v("it is not possible to tell\nwhat exactly the contents of the generated buffer are")]),this._v(" without knowing the type of "),t("code",[this._v("foo")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Sometimes, the value of "),t("code",[this._v("foo")]),this._v(" comes from an external source. For example, this function\ncould be exposed as a service on a web server, converting a UTF-8 string into its Base64 form:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function stringToBase64(req, res) {\n  // The request body should have the format of `{ string: 'foobar' }`\n  const rawBytes = new Buffer(req.body.string)\n  const encoded = rawBytes.toString('base64')\n  res.end({ encoded: encoded })\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Note that this code does "),t("em",[this._v("not")]),this._v(" validate the type of "),t("code",[this._v("req.body.string")]),this._v(":")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("req.body.string")]),e._v(" is expected to be a string. If this is the case, all goes well.")]),e._v(" "),s("li",[s("code",[e._v("req.body.string")]),e._v(" is controlled by the client that sends the request.")]),e._v(" "),s("li",[e._v("If "),s("code",[e._v("req.body.string")]),e._v(" is the "),s("em",[e._v("number")]),e._v(" "),s("code",[e._v("50")]),e._v(", the "),s("code",[e._v("rawBytes")]),e._v(" would be 50 bytes:\n"),s("ul",[s("li",[e._v("Before Node.js 8, the content would be uninitialized")]),e._v(" "),s("li",[e._v("After Node.js 8, the content would be "),s("code",[e._v("50")]),e._v(" bytes with the value "),s("code",[e._v("0")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Read uninitialized memory. This "),t("strong",[this._v("will")]),this._v(" leak passwords, encryption keys and other\nkinds of sensitive information. (Information leak)")]),this._v(" "),t("li",[this._v("Force the program to allocate a large amount of memory. For example, when specifying\n"),t("code",[this._v("500000000")]),this._v(" as the input value, each request will allocate 500MB of memory.\nThis can be used to either exhaust the memory available of a program completely\nand make it crash, or slow it down significantly. (Denial of Service)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("when using "),t("code",[this._v("Buffer.from(req.body.string)")]),this._v(" instead, passing a number will always\nthrow an exception instead, giving a controlled behaviour that can always be\nhandled by the program.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{id:"ecosystem-usage"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-buffer-constructor-has-been-deprecated-for-a-while-is-this-really-an-issue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-buffer-constructor-has-been-deprecated-for-a-while-is-this-really-an-issue","aria-hidden":"true"}},[this._v("#")]),this._v(" The "),t("code",[this._v("Buffer()")]),this._v(" constructor has been deprecated for a while. Is this really an issue?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Surveys of code in the "),t("code",[this._v("npm")]),this._v(" ecosystem have shown that the "),t("code",[this._v("Buffer()")]),this._v(" constructor is still\nwidely used. This includes new code, and overall usage of such code has actually been\n"),t("em",[this._v("increasing")]),this._v(".")])}],!1,null,null,null);a.options.__file="Porting-Buffer.md";t.default=a.exports}}]);