(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{183:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("blockquote",[r("p",[t._v("参考文章  "),r("a",{attrs:{href:"https://juejin.im/post/6844903689094692871",target:"_blank",rel:"noopener noreferrer"}},[t._v("可能是最全面最易懂的解析前端浮动的文章"),r("OutboundLink")],1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("blockquote",[r("p",[t._v("参考文章  "),r("a",{attrs:{href:"https://juejin.im/post/6844903474774147086",target:"_blank",rel:"noopener noreferrer"}},[t._v("一劳永逸的搞定 flex 布局"),r("OutboundLink")],1)])]),t._v(" "),r("p",{attrs:{align:"center"}},[r("img",{attrs:{src:t.$withBase("/css/flex.png"),alt:"",width:"600px"}})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[this._v("#")]),this._v(" CSS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"浮动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浮动"}},[this._v("#")]),this._v(" 浮动")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("设计目的，实现文字环绕排版功能")]),t._v(" "),r("li",[r("code",[t._v("absolute")]),t._v("和"),r("code",[t._v("float")]),t._v("都不会去覆盖掉在他们之前的正常文档流")]),t._v(" "),r("li",[t._v("浮动影响了父容器的高度，造成了父容器高度塌陷，触发 bfc 使父容器包含浮动元素的高度")]),t._v(" "),r("li",[t._v("触发 bfc 的另一种写法，"),r("code",[t._v("display:flow-root")])]),t._v(" "),r("li",[t._v("在一个元素上设置伪元素，该伪元素作为当前元素的第一个或者最后一个子元素")]),t._v(" "),r("li",[r("strong",[t._v("给父元素增加一个伪元素来清除浮动的本质")]),t._v("，给父元素再加一个块级子容器，当然这个也就是父元素的最后一个块级子容器了。同时给这个块级子容器设置 clear 属性来清除其浮动，这样这个子容器就能排列在浮动元素的后面，同时也把父元素的高度撑起来了。那么父元素的同级元素也能正常排列了。所以这个子容器不能有高度和内容，不然会影响父元素的布局。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"flex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[this._v("#")]),this._v(" flex")])}],!1,null,null,null);e.default=a.exports}}]);