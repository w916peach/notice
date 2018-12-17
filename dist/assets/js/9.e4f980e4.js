(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{275:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试题","aria-hidden":"true"}},[t._v("#")]),t._v(" 面试题")]),t._v(" "),a("h2",{attrs:{id:"调用-setstate-之后发生了什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用-setstate-之后发生了什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 调用 setState 之后发生了什么？")]),t._v(" "),a("p",[t._v("在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程（Reconciliation）。\n经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。\n在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。\n在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。")]),t._v(" "),a("h2",{attrs:{id:"react-中-element-与-component-的区别是？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-中-element-与-component-的区别是？","aria-hidden":"true"}},[t._v("#")]),t._v(" React 中 Element 与 Component 的区别是？")]),t._v(" "),a("p",[t._v("简单而言，React Element 是描述屏幕上所见内容的数据结构，是对于 UI 的对象表述。典型的 React Element 就是利用 JSX 构建的声明式代码片然后被转化为createElement的调用组合。而 React Component 则是可以接收参数输入并且返回某个 React Element 的函数或者类。更多介绍可以参考React Elements vs React Components。")]),t._v(" "),a("h2",{attrs:{id:"在什么情况下你会优先选择使用-class-component-而不是-functional-component？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在什么情况下你会优先选择使用-class-component-而不是-functional-component？","aria-hidden":"true"}},[t._v("#")]),t._v(" 在什么情况下你会优先选择使用 Class Component 而不是 Functional Component？")]),t._v(" "),a("p",[t._v("在组件需要包含内部状态或者使用到生命周期函数的时候使用 Class Component ，否则使用函数式组件。")]),t._v(" "),a("h2",{attrs:{id:"react-中-refs-的作用是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-中-refs-的作用是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" React 中 refs 的作用是什么？")]),t._v(" "),a("p",[t._v("this.refs.textInputRefs 是 React 提供给我们的安全访问 DOM 元素或者某个组件实例的句柄。\n我们可以为元素添加ref属性然后在回调函数中接受该元素在 DOM 树中的句柄，该值会作为回调函数的第一个参数返回：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CustomForm")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{attrs:{class:"token function-variable function"}},[t._v("handleSubmit")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Input Value: "')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    "),a("span",{attrs:{class:"token function"}},[t._v("render")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("form onSubmit"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleSubmit"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("input  type"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'text'")]),t._v(" ref"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" input"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("button type"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'submit'")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Submit"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("    \n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("上述代码中的input域包含了一个ref属性，该属性声明的回调函数会接收input对应的 DOM 元素，我们将其绑定到this指针以便在其他的类函数中使用。另外值得一提的是，refs 并不是类组件的专属，函数式组件同样能够利用闭包暂存其值：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("CustomForm")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("handleSubmit"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" inputElement  \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("form onSubmit"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("handleSubmit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputElement"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'text'")]),t._v(" ref"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" inputElement "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" input"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("button type"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'submit'")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Submit"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n       "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"react-中-keys-的作用是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-中-keys-的作用是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" React 中 keys 的作用是什么？")]),t._v(" "),a("p",[t._v("Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("render")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("ul"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("todoItems"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("map")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("task"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uid"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("        \n                "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("li key"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uid"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("task"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("      \n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。在 React Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染。此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系，因此我们绝不可忽视转换函数中 Key 的重要性。")]),t._v(" "),a("h2",{attrs:{id:"controlled-component-受控组件-与-uncontrolled-component-非受控组件-之间的区别是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controlled-component-受控组件-与-uncontrolled-component-非受控组件-之间的区别是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" Controlled Component(受控组件) 与 Uncontrolled Component(非受控组件) 之间的区别是什么？")]),t._v(" "),a("p",[t._v("React 的核心组成之一就是能够维持内部状态的自治组件，不过当我们引入原生的HTML表单元素时（input,select,textarea 等），我们是否应该将所有的数据托管到 React 组件中还是将其仍然保留在 DOM 元素中呢？\n这个问题的答案就是受控组件与非受控组件的定义分割。受控组件（Controlled Component）代指那些交由 React 控制并且所有的表单数据统一存放的组件。\n譬如下面这段代码中username变量值并没有存放到DOM元素中，而是存放在组件状态数据中。\n任何时候我们需要改变username变量值时，我们应当调用setState函数进行修改。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ControlledForm")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    state "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("username"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    "),a("span",{attrs:{class:"token function-variable function"}},[t._v("updateUsername")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("username"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    "),a("span",{attrs:{class:"token function-variable function"}},[t._v("handleSubmit")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),a("span",{attrs:{class:"token function"}},[t._v("render")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("form onSubmit"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleSubmit"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'text'")]),t._v(" value"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" onChange"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updateUsername"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("button type"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'submit'")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Submit"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("而非受控组件（Uncontrolled Component）则是由DOM存放表单数据，并非存放在 React 组件中。我们可以使用 refs 来操控DOM元素：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("UnControlledForm")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{attrs:{class:"token function-variable function"}},[t._v("handleSubmit")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Input Value: "')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    "),a("span",{attrs:{class:"token function"}},[t._v("render")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("form onSubmit"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleSubmit"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'text'")]),t._v(" ref"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" input"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("button type"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'submit'")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Submit"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("竟然非受控组件看上去更好实现，我们可以直接从 DOM 中抓取数据，而不需要添加额外的代码。不过实际开发中我们并不提倡使用非受控组件，因为实际情况下我们需要更多的考虑表单验证、选择性的开启或者关闭按钮点击、强制输入格式等功能支持，而此时我们将数据托管到 React 中有助于我们更好地以声明式的方式完成这些功能。引入 React 或者其他 MVVM 框架最初的原因就是为了将我们从繁重的直接操作 DOM 中解放出来。\nReact 下一代调和算法 Fiber 会通过开始或停止渲染的方式优化应用性能，其会影响到 componentWillMount 的触发次数。对于 componentWillMount 这个生命周期函数的调用次数会变得不确定，React 可能会多次频繁调用 componentWillMount。如果我们将 AJAX 请求放到 componentWillMount 函数中，那么显而易见其会被触发多次，自然也就不是好的选择。")]),t._v(" "),a("h2",{attrs:{id:"在生命周期中的哪一步你应该发起-ajax-请求？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在生命周期中的哪一步你应该发起-ajax-请求？","aria-hidden":"true"}},[t._v("#")]),t._v(" 在生命周期中的哪一步你应该发起 AJAX 请求？")]),t._v(" "),a("p",[t._v("我们应当将AJAX 请求放到 "),a("code",[t._v("componentDidMount")]),t._v(" 函数中执行，主要原因有下：\n如果我们将 AJAX 请求放置在生命周期的其他函数中，我们并不能保证请求仅在组件挂载完毕后才会要求响应。如果我们的数据请求在组件挂载之前就完成，并且调用了setState函数将数据添加到组件状态中，对于未挂载的组件则会报错。而在 "),a("code",[t._v("componentDidMount")]),t._v(" 函数中进行 AJAX 请求则能有效避免这个问题。")]),t._v(" "),a("h2",{attrs:{id:"shouldcomponentupdate-的作用是啥以及为何它这么重要？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate-的作用是啥以及为何它这么重要？","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("shouldComponentUpdate")]),t._v(" 的作用是啥以及为何它这么重要？")]),t._v(" "),a("p",[a("code",[t._v("shouldComponentUpdate")]),t._v(" 允许我们手动地判断是否要进行组件更新，根据组件的应用场景设置函数的合理返回值能够帮我们避免不必要的更新。")]),t._v(" "),a("h2",{attrs:{id:"如何告诉-react-它应该编译生产环境版本？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何告诉-react-它应该编译生产环境版本？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何告诉 React 它应该编译生产环境版本？")]),t._v(" "),a("p",[t._v("通常情况下我们会使用 Webpack 的 DefinePlugin 方法来将 NODE_ENV 变量值设置为 production。编译版本中 React 会忽略 propType 验证以及其他的告警信息，同时还会降低代码库的大小，React 使用了 Uglify 插件来移除生产环境下不必要的注释等信息。")]),t._v(" "),a("h2",{attrs:{id:"概述下-react-中的事件处理逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述下-react-中的事件处理逻辑","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述下 React 中的事件处理逻辑")]),t._v(" "),a("p",[t._v("为了解决跨浏览器兼容性问题，React 会将浏览器原生事件（Browser Native Event）封装为合成事件（SyntheticEvent）传入设置的事件处理器中。这里的合成事件提供了与原生事件相同的接口，不过它们屏蔽了底层浏览器的细节差异，保证了行为的一致性。另外有意思的是，React 并没有直接将事件附着到子元素上，而是以单一事件监听器的方式将所有的事件发送到顶层进行处理。这样 React 在更新 DOM 的时候就不需要考虑如何去处理附着在 DOM 上的事件监听器，最终达到优化性能的目的。")]),t._v(" "),a("h2",{attrs:{id:"createelement-与-cloneelement-的区别是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createelement-与-cloneelement-的区别是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" createElement 与 cloneElement 的区别是什么？")]),t._v(" "),a("p",[t._v("createElement 函数是 JSX 编译之后使用的创建 React Element 的函数，而 cloneElement 则是用于复制某个元素并传入新的 Props。")]),t._v(" "),a("h2",{attrs:{id:"传入-setstate-函数的第二个参数的作用是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传入-setstate-函数的第二个参数的作用是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 传入 setState 函数的第二个参数的作用是什么？")]),t._v(" "),a("p",[t._v("是个函数，该函数会在setState函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" username"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'tylermcginnis33'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'setState has finished and the component has re-rendered.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("下述代码有错吗？")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevState"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("streak"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prevState"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("streak "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" props"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("这段代码没啥问题，不过只是不太常用罢了")]),t._v(" "),a("h2",{attrs:{id:"react中state与props的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react中state与props的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" react中state与props的区别?")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("props:props是一个组件的设置参数，可以在父控件中选择性设置。父组件对子控件的props进行赋值，并且props的值不可改变。一个子控件自身不能改变自己的 props。")])]),t._v(" "),a("li",[a("p",[t._v("state:当一个组件 mounts的时候，state如果设置有默认值的会被使用，并且state可能时刻的被改变。一个子控件自身可以管理自己的state，但是需要注意的是，无法管理其子控件的state。所以可以认为，state是子控件自身私有的。")])])]),t._v(" "),a("h2",{attrs:{id:"react中的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react中的生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" react中的生命周期")]),t._v(" "),a("p",[t._v("我们可以把react组件的活动过程分为三个大的方面： 实例期、存在期、销毁期")]),t._v(" "),a("ol",[a("li",[t._v("实例期-此时是组件第一被加载的过程时候，生命周期如下：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("constructor "),a("span",{attrs:{class:"token comment"}},[t._v("// 实例一些初始化妆台")]),t._v("\ncomponentWillMount "),a("span",{attrs:{class:"token comment"}},[t._v("// dom节点被加载之前")]),t._v("\nrender "),a("span",{attrs:{class:"token comment"}},[t._v("// 计算出虚拟dom")]),t._v("\ncomponentDidMount "),a("span",{attrs:{class:"token comment"}},[t._v("// dom节点加载完成后")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("存在期-此时是组件内部的状态(调用setState)或者是属性被重新传入(props改变)的时候触发")])]),t._v(" "),a("p",[a("strong",[t._v("内部状态改变")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("shouldComponentUpdate "),a("span",{attrs:{class:"token comment"}},[t._v("// 该函数会返回一个布尔值决定视图是否更新")]),t._v("\ncomponentWillUpdate "),a("span",{attrs:{class:"token comment"}},[t._v("// 视图更新之前调用")]),t._v("\nrender "),a("span",{attrs:{class:"token comment"}},[t._v("// 重新计算出一份虚拟dom")]),t._v("\ncomponentDidMount "),a("span",{attrs:{class:"token comment"}},[t._v("// 视图更新完成，dom节点更改结束")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("strong",[t._v("属性被重新传入")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("componentWillReceiveProps "),a("span",{attrs:{class:"token comment"}},[t._v("// 接收到新属性，可在这里调用setState")]),t._v("\nshouldComponentUpdate "),a("span",{attrs:{class:"token comment"}},[t._v("// 该函数会返回一个布尔值决定视图是否更新")]),t._v("\ncomponentWillUpdate "),a("span",{attrs:{class:"token comment"}},[t._v("// 视图更新之前调用")]),t._v("\nrender "),a("span",{attrs:{class:"token comment"}},[t._v("// 重新计算出一份虚拟dom")]),t._v("\ncomponentDidMount "),a("span",{attrs:{class:"token comment"}},[t._v("// 视图更新完成，dom节点更改结束")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("销毁期")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("componentWillUnmount "),a("span",{attrs:{class:"token comment"}},[t._v("// 组件被销毁时调用，一般可以清楚一些组件内部的东西，比如 定时器，原生事件等")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}],!1,null,null,null);e.options.__file="2.md";s.default=e.exports}}]);