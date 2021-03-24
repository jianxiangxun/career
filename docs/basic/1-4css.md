# CSS ⭐

[You-need-to-know-css](https://lhammer.cn/You-need-to-know-css/#/zh-cn/)

[那些你总是记不住但又总是要用的 css](https://juejin.im/post/6869659680496041991)

[CSS 大全](https://css-tricks.com/almanac/)

[1.5 万字 CSS 基础拾遗（核心知识、常见需求）](https://mp.weixin.qq.com/s/fV5friirT_3Oemvaunjemw)

## 浮动

> 参考文章 [可能是最全面最易懂的解析前端浮动的文章](https://juejin.im/post/6844903689094692871)

- 设计目的，实现文字环绕排版功能
- `absolute`和`float`都不会去覆盖掉在他们之前的正常文档流
- 浮动影响了父容器的高度，造成了父容器高度塌陷，触发 bfc 使父容器包含浮动元素的高度
- 触发 bfc 的另一种写法，`display:flow-root`
- 在一个元素上设置伪元素，该伪元素作为当前元素的第一个或者最后一个子元素
- **给父元素增加一个伪元素来清除浮动的本质**，给父元素再加一个块级子容器，当然这个也就是父元素的最后一个块级子容器了。同时给这个块级子容器设置 clear 属性来清除其浮动，这样这个子容器就能排列在浮动元素的后面，同时也把父元素的高度撑起来了。那么父元素的同级元素也能正常排列了。所以这个子容器不能有高度和内容，不然会影响父元素的布局。

## flex

> 参考文章 [一劳永逸的搞定 flex 布局](https://juejin.im/post/6844903474774147086)

<p align="center" >
 <img :src="$withBase('/css/flex.png')" alt="" width="600px">
</p>

## 单位

## 布局

[几种常见的 CSS 布局](https://juejin.cn/post/6844903710070407182#heading-17)

## BFC
