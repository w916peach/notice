(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{286:function(e,s,n){"use strict";n.r(s);var t=n(0),r=Object(t.a)({},function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("To see the results of our benchmarks visit https://github.com/broofa/node-uuid/wiki/Benchmark")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("To prepare and run the benchmark issue;")]),e._v(" "),e._m(4),n("p",[e._v("You'll see an output like this one:")]),e._v(" "),e._m(5),n("ul",[n("li",[e._v("The "),n("code",[e._v("uuid()")]),e._v(" entries are for Nikhil Marathe's "),n("a",{attrs:{href:"https://bitbucket.org/nikhilm/uuidjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("uuid module"),n("OutboundLink")],1),e._v(" which is a wrapper around the native libuuid library.")]),e._v(" "),n("li",[e._v("The "),n("code",[e._v("uuidjs()")]),e._v(" entries are for Patrick Negri's "),n("a",{attrs:{href:"https://github.com/pnegri/uuid-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("uuid-js module"),n("OutboundLink")],1),e._v(" which is a pure javascript implementation based on "),n("a",{attrs:{href:"https://github.com/LiosK/UUID.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("UUID.js"),n("OutboundLink")],1),e._v(" by LiosK.")])]),e._v(" "),n("p",[e._v("If you want to get more reliable results you can run the benchmark multiple times and write the output into a log file:")]),e._v(" "),e._m(6),n("p",[e._v("If you're interested in how performance varies between different node versions, you can issue the above command multiple times.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),n("p",[e._v("This assumes you have "),n("a",{attrs:{href:"http://www.gnuplot.info/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gnuplot"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"http://www.imagemagick.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ImageMagick"),n("OutboundLink")],1),e._v(" installed. You'll find a nice "),n("code",[e._v("bench.png")]),e._v(" graph in the "),n("code",[e._v("benchmark/")]),e._v(" directory then.")])])},[function(){var e=this.$createElement,s=this._self._c||e;return s("h1",{attrs:{id:"node-uuid-benchmarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-uuid-benchmarks","aria-hidden":"true"}},[this._v("#")]),this._v(" node-uuid Benchmarks")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#results","aria-hidden":"true"}},[this._v("#")]),this._v(" Results")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"run-them-yourself"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-them-yourself","aria-hidden":"true"}},[this._v("#")]),this._v(" Run them yourself")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("node-uuid comes with some benchmarks to measure performance of generating UUIDs. These can be run using node.js. node-uuid is being benchmarked against some other uuid modules, that are available through npm namely "),s("code",[this._v("uuid")]),this._v(" and "),s("code",[this._v("uuid-js")]),this._v(".")])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install uuid uuid-js\nnode benchmark/benchmark.js\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# v4\nnodeuuid.v4(): 854700 uuids/second\nnodeuuid.v4('binary'): 788643 uuids/second\nnodeuuid.v4('binary', buffer): 1336898 uuids/second\nuuid(): 479386 uuids/second\nuuid('binary'): 582072 uuids/second\nuuidjs.create(4): 312304 uuids/second\n\n# v1\nnodeuuid.v1(): 938086 uuids/second\nnodeuuid.v1('binary'): 683060 uuids/second\nnodeuuid.v1('binary', buffer): 1644736 uuids/second\nuuidjs.create(1): 190621 uuids/second\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("for i in {0..9}; do node benchmark/benchmark.js >> benchmark/bench_0.4.12.log; done;\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("You can then use the shell script "),s("code",[this._v("bench.sh")]),this._v(" provided in this directory to calculate the averages over all benchmark runs and draw a nice plot:")])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("(cd benchmark/ && ./bench.sh)\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])}],!1,null,null,null);r.options.__file="README.md";s.default=r.exports}}]);