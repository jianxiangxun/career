# React

## 概念

### hook

[详解 useCallback & useMemo](https://juejin.im/post/6844904101445124110)

[useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/) ⭐

[深入浅出 React Hooks](https://juejin.im/post/6844903858662014983#heading-24)

[「react 进阶」一文吃透 react-hooks 原理](https://juejin.cn/post/6944863057000529933)

[在 React 项目中全量使用 Hooks](https://juejin.im/post/6844904093824073742)

### 其他

[谈谈 React 事件机制和未来(react-events)](https://zhuanlan.zhihu.com/p/78669634)

> 事件委托、合成事件、触发优先级

自定义事件系统原因：

- 抹平浏览器之间的兼容性差异
- 事件‘合成’, 即事件自定义
- 抽象跨平台事件机制
- React 打算做更多优化,React 需要自己模拟一套事件冒泡的机制
- React 打算干预事件的分发

[React 中组件间通信的几种方式](https://www.jianshu.com/p/fb915d9c99c4)

[TypeScript 在 React 中使用总结](https://juejin.im/post/6844903684422254606#heading-2)⭐

[你想知道的关于 Refs 的知识都在这了](https://juejin.im/post/6844903982725349390#heading-5)⭐

[React 16.x 折腾记 - (1) React Router V4 和 antd 侧边栏的正确关联及动态 title 的实现](https://juejin.im/post/5b6be6c7e51d4519044ad684)

[聊一聊我对 React Context 的理解以及应用](https://juejin.im/post/5a90e0545188257a63112977)

[从一个需求出发，聊聊 useRef 三兄弟](https://juejin.im/post/6888616874171432973)

## 性能优化

[React 性能优化完全指南，将自己这几年的心血总结成这篇！](https://mp.weixin.qq.com/s/p4MGOhEa5MoGMU1MscjAJw)

[React 性能优化大挑战：一次理解 Immutable data 跟 shouldComponentUpdate](https://mp.weixin.qq.com/s/oxy3yXipelNKYKi7t2KbeA)

[我在大厂写 React，学到了什么？性能优化篇](https://juejin.im/post/6889247428797530126)

- 尽量提升渲染无关的子组件元素到「有状态组件」的外部。
- 在需要的情况下对 Context 进行读写分离。
- 包装 Context 的使用，注意错误处理。
- 组合多个 Context，优化代码。

[浅谈 React 性能优化的方向](https://zhuanlan.zhihu.com/p/74229420)

> 减少渲染的节点/降低渲染计算量(复杂度)

- 0️⃣ 不要在渲染函数都进行不必要的计算
- 1️⃣ 减少不必要的嵌套
- 2️⃣ 虚拟列表
- 3️⃣ 惰性渲染
- 4️⃣ 选择合适的样式方案

> 避免重新渲染

- 0️⃣ 简化 props
- 1️⃣ 不变的事件处理器
- 2️⃣ 不可变数据
- 3️⃣ 简化 state
- 4️⃣ 使用 recompose 精细化比对

> 精细化渲染

- 0️⃣ 响应式数据的精细化渲染
- 1️⃣ 不要滥用 Context

[React 项目性能分析及优化](https://zhuanlan.zhihu.com/p/120748634)

- 减少不必要的 render，PureComponent/ShouldComponentUpdate
- react.useMemo
- react.useCallback
- 谨慎使用 context
- 小心使用 redux
- 不可变数据，immer.js

[你也想做掌控全局的 React 大师吗？](https://zhuanlan.zhihu.com/p/48059589)

- 发现不必要的渲染，[why-did-you-update](https://github.com/maicki/why-did-you-update)

[Airbnb 爱彼迎房源详情页中的 React 性能优化](https://zhuanlan.zhihu.com/p/44404836)

[React 性能测量和分析](https://juejin.im/post/6844903869378641933)

[React + Redux 性能优化（二）工具篇： Immutablejs](https://zhuanlan.zhihu.com/p/34802753)

[项目实战中 React 性能优化](https://zhuanlan.zhihu.com/p/93268933)

[21 项优化 React App 性能的技术](https://juejin.im/post/6844903881676161031#heading-12)

## 项目

- [react-admin](https://marmelab.com/react-admin/Readme.html)，定制化的后台管理系统。

  - layout
  - theme
  - auth
  - data provider
  - crud

- [react hooks+redux+immutable.js 仿网易云音乐打造精美 webApp](https://github.com/sanyuan0704/react-cloud-music)

  - diff 原理
  - immutable + purecomponent/memo 优化的原理
  - betterscroll 使用
  - transform
  - react-transition-group 使用
  - styled-components
  - swiper
  - React.lazy
  - react-lazyload 插件

- [Joplin - an open source note taking and to-do application with synchronization capabilities for every platform](https://github.com/laurent22/joplin)

- [Mattermost is an open source, self-hosted Slack-alternative from mattermost.org](https://github.com/mattermost/mattermost-webapp)
  - [开发文档](https://developers.mattermost.com/contribute/getting-started/)

## 面试题

[大厂面试中遇到的几十道 webpack 与 react 面试题](https://juejin.im/post/6844904031735775245)

## 移动端

- [react 移动端适配](https://github.com/caoxiaoke/react-vw-layout)，有个毛病，没有生命 postcss-preset-env

## 组件库

- https://github.com/brillout/awesome-react-components
- https://ant.design/index-cn
- https://mobile.ant.design/index-cn
- https://rn.mobile.ant.design/index-cn
- https://github.com/styled-components/styled-components
- https://github.com/react-bootstrap/react-bootstrap
- https://material-ui.com/zh/
- https://github.com/elemefe/element-react

[react-component](https://github.com/react-component?type=source)

[react 组件库](https://github.com/brillout/awesome-react-components#ui-navigation)

### checkbox

> 优点：

- 漂亮的 check 效果，让人印象深刻
- 尝试使用如 context 等特性来简化状态管理
- useCallback 与 useMemo 的使用说明重视性能
- 测试较全面，重点需求都照顾到了

> 可以改进的地方：

- 一个重要需求未正确实现：多列时，每一列顺序应该从上到下，而不是每一行从左右到
- MultiCheck 传入的 label 未使用
- 组件属性比如 selectAllCheckboxProps 放在外面定义成变量，而不是写成组件形式，可读性不佳
- context 在这个组件中使用有点重，且其中 onChange 的语义不明确
- useCallback 与 useMemo 的使用不完全正确，依赖项有缺失
- 很多 let 可以使用 const，更安全
- Checkbox 中 handleChange 中的逻辑复杂难以理解
- 测试写法有问题，大量写了 setTimeout 的测试永远不会失败

[git 地址](https://github.com/jianxiangxun/checkbox)

### tabs

#### css

- css 按照层级结构去书写，清晰；命名按照层级去命名，以`-`连接，如`rc-tabs-tab-nav-list`
- css 分文件，index 写主要的结构，附加的写到单独的文件，如样式`positiion`,`type中的card样式`,`size`；功能`dropdown`。。。
- 前缀变量，如`rc-tabs`,`rc-checkbox`
- tab 滑动时，不用滚动条`overflow:hidden`,监控 on-wheel 事件通过 **_transform-translate_** 改变元素位置，**_提高性能_**
- `offsetHeight`,`offsetWidth`等的大量使用
- 样式文件不直接引入，放到单独的 style 文件夹中，在入口 index 中引入所有组件的样式文件，最终可以一次导入

## 状态管理

### redux

- createStore
  - 返回 state、subscribe、dispatch
- combineReducers
- applyMiddleware
  - 调用 compose

### 不可变对象

[关于 react, redux, react-redux 和 reselect 的一些思考](https://zhuanlan.zhihu.com/p/33985606)

[Immutable 详解及 React 中实践 #3](https://github.com/camsong/blog/issues/3)

[React Tips (2) - Reselect](https://zhuanlan.zhihu.com/p/29415032)

[Immutable.js 与 React,Redux 及 reselect 的实践](https://zhuanlan.zhihu.com/p/29370325)
