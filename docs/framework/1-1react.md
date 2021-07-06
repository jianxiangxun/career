# React

## 概念

### hook

- Basic Hooks
  - useState
  - useEffect
  - useContext
- Additional Hooks
  - useReducer
  - useCallback
  - useMemo
  - useRef
  - useImperativeHandle
  - useLayoutEffect
  - useDebugValue

[详解 useCallback & useMemo](https://juejin.im/post/6844904101445124110)

- 将 useCallback 依赖的第二个参数变成了一个空的数组，由于 JS 的静态作用域导致此函数内 的值 永远都不变
- 使用 useRef 可以生成一个变量让其在组件每个生命周期内都能访问到
- useCallback 是要配合子组件的 shouldComponentUpdate 或者 React.memo 一起来使用的，否则就是反向优化。
- 可以将 useMemo 的返回值定义为返回一个函数这样就可以变通的实现了 useCallback

[useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/) ⭐

- 每一次渲染都有它自己的 state、props、函数、effect。。。
- class 组件中 setState 的运行方式和函数式组件的不同，多次放在`setTimeout`中调用的情况
- 组件内的每一个函数（包括事件处理函数，effects，定时器或者 API 调用等等）会捕获定义它们的那次渲染中的 props 和 state
- **顺序：**浏览器绘制后渲染、运行上一次的清除 effectReact、运行本次的 effect（大多数 effects 并不会阻塞屏幕的更新）
- 为什么有时候在 effect 里拿到的是旧的 state 或 prop 呢？Effect 拿到的总是定义它的那次渲染中的 props 和 state。
- 有时候你可能想在 effect 的回调函数里读取最新的值而不是捕获的值。最简单的实现方法是使用 refs
- 那 Effect 中的清理，本质上，它的目的是消除副作用（effect)，比如取消订阅。
- **同步的**概念，每一次渲染有自己的值，希望看到的是**最终结果**
- `effect、usememo、usecallback`依赖项,**函数**作为依赖项
  - setState 中传递函数，减少依赖项的传递，找到更新的**最小状态**
  - 减少间接依赖，把函数用`usecallback`包裹，然后作为依赖项
  - `eslint-plugin-react-hooks` 插件的`exhaustive-depslint`规则
- useReducer 的使用，React 会保证 dispatch 在组件的声明周期内保持不变。它会在下一次渲染中再次调用 reducer（最新，可以使用 props，但是不建议）
- 竟态，通过设置标志位解决

[玩转 react-hooks,自定义 hooks 设计模式及其实战](https://juejin.cn/post/6890738145671938062) ⭐

- react 新增的钩子 API，目的是**增加代码的可复用性**，逻辑性，弥补无状态组件没有生命周期，没有数据管理状态 state 的缺陷。
- hooks 专注的就是**逻辑复用**
- 要特别～特别～特别关注的是**传进去什么**，**返回什么**

[深入浅出 React Hooks](https://juejin.im/post/6844903858662014983#heading-24)

[Hooks FAQ](https://reactjs.org/docs/hooks-faq.html) ⭐

### api

[React 全部 api 解读+基础实践大全](https://juejin.cn/post/6950063294270930980)

- 组件类、工具类、hook 类、DOM 类
- forwardRef、lazy、suspense、profiler、strictMode
- createElement、cloneElement、isValidElement、Children 系列
- hooks
  - useEffect 执行顺序: 组件更新挂载完成 -> 浏览器 dom 绘制完成 -> 执行 useEffect 回调。
  - useLayoutEffect 执行顺序: 组件更新挂载完成 -> 执行 useLayoutEffect 回调-> 浏览器 dom 绘制完成。
  - useImperativeHandle,自定义通过 ref 获取的内容，如各种方法。
- createPortal、flushSync

### refs

[你想知道的关于 Refs 的知识都在这了](https://juejin.im/post/6844903982725349390#heading-5)⭐

[从一个需求出发，聊聊 useRef 三兄弟](https://juejin.im/post/6888616874171432973)

### 组件通信

[React 中组件间通信的几种方式](https://www.jianshu.com/p/fb915d9c99c4)

[聊一聊我对 React Context 的理解以及应用](https://juejin.im/post/5a90e0545188257a63112977)

### 其他

[漫谈 React 异步组件前世与今生](https://juejin.cn/post/6970845778713509919)

- componentDidCatch,子组件有异常时捕获错误,called during the “commit” phase,提交阶段
- 异步组件
  - 异步模式：请求数据-> 渲染组件。
  - 传统模式：渲染组件-> 请求数据 -> 再渲染组件。
- suspense 原理，在 componentDidCatch 中捕获异常，更改状态应用 fallback,reslove 后渲染组件
- lazy 原理，通过抛出异常阻止同步组件渲染，lazy 返回一个 promise，pending 阶段抛出异常并返回一个对象，resolve 后在渲染组件
- [relay](https://relay.dev/docs/getting-started/step-by-step-guide/)

[函数式组件与类组件有何不同？](https://overreacted.io/zh-hans/how-are-function-components-different-from-classes/)

[How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)

[React as a UI Runtime](https://overreacted.i## 深入原理

[React 源码解析](https://react.jokcy.me/)

[谈谈 React 事件机制和未来(react-events)](https://zhuanlan.zhihu.com/p/78669634)

- 事件委托、合成事件、触发优先级
- 自定义事件系统原因：
  - 抹平浏览器之间的兼容性差异
  - 事件‘合成’, 即事件自定义
  - 抽象跨平台事件机制
  - React 打算做更多优化,React 需要自己模拟一套事件冒泡的机制
  - React 打算干预事件的分发

[「react 进阶」一文吃透 react 事件系统原理](https://juejin.cn/post/6955636911214067720)

- 什么是合成事件
  - 我们绑定的事件 onClick 等，并不是原生事件，而是由原生事件合成的 React 事件，比如 click 事件合成为 onClick 事件。比如 blur , change , input , keydown , keyup 等 , 合成为 onChange。
  - 将事件绑定在 document 统一管理，防止很多事件直接绑定在原生的 dom 元素上。
  - React 想实现一个全浏览器的框架， 为了实现这种目标就需要提供全浏览器一致性的事件系统，以此抹平不同浏览器的差异。
  - react 并不是一开始，把所有的事件都绑定在 document 上，而是采取了一种按需绑定，比如发现了 onClick 事件,再去绑定 document click 事件。
- 事件初始化、事件合成
  - **构建初始化 React 合成事件和原生事件的对应关系**
- 事件绑定
  - 根据对应管理，找到对应的原生事件，调用 addTrappedEventListener 绑定在 document 上
  - 只有上述那几个特殊事件比如 scorll,focus,blur 等是在事件捕获阶段发生的，其他的都是在事件冒泡阶段发生的，无论是 onClick 还是 onClickCapture 都是发生在冒泡阶段
- 事件触发
  - dispatchEvent
  - 通过 e.target 找到真实 DOM 元素
  - 模拟事件冒泡

[「源码解析 」这一次彻底弄懂 react-router 路由原理](https://juejin.cn/post/6886290490640039943)

- react-router-dom 和 react-router 和 history 库三者关系
- 单页面应用路由实现**原理**是，切换 url，监听 url 变化，从而渲染不同的页面组件。
  - history、hash 通过 history.pushState、location.hash 改变 URL，通过 popstate、hashchange 事件监听
- history
  - 点击链接/push 方法 > 监听 > 触发 > setState > 通知 router
- react-router
  - Router,接收 location 变化，派发更新流， 作用是把 history location 等路由信息传递下去
  - Switch-匹配正确的唯一的路由
  - Route-组件页面承载容器，匹配 path,渲染组件。
    - 作为路由组件的容器,可以根据将实际的组件渲染出来。
    - 通过 RouterContext.Consume 取出当前上一级的 location,match 等信息。作为 prop 传递给页面组件。
    - 使得我们可以在页面组件中的 props 中获取 location ,match 等信息。
  - Redirect-没有符合的路由，那么重定向
- 总结
  - 当地址栏改变 url，组件的更新渲染都经历了什么？
    - 拿 history 模式做参考。当 url 改变，首先触发 histoy，调用事件监听 popstate 事件， 触发回调函数 handlePopState，触发 history 下面的 setstate 方法。
    - 产生新的 location 对象，然后通知 Router 组件更新 location 并通过 context 上下文传递，switch 通过传递的更新流，匹配出符合的 Route 组件渲染，最后有 Route 组件取出 context 内容，传递给渲染页面，渲染更新。
  - 当我们调用 history.push 方法，切换路由，组件的更新渲染又都经历了什么呢？
    - 我们还是拿 history 模式作为参考，当我们调用 history.push 方法，首先调用 history 的 push 方法，通过 history.pushState 来改变当前 url，接下来触发 history 下面的 setState 方法，接下来的步骤就和上面一样

[「react 进阶」一文吃透 react-hooks 原理](https://juejin.cn/post/6944863057000529933)

## 性能优化

[React 性能优化完全指南，将自己这几年的心血总结成这篇！](https://juejin.cn/post/6935584878071119885)

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

### 项目实践

[React 16.x 折腾记 - (1) React Router V4 和 antd 侧边栏的正确关联及动态 title 的实现](https://juejin.im/post/5b6be6c7e51d4519044ad684)

[TypeScript 在 React 中使用总结](https://juejin.im/post/6844903684422254606#heading-2)⭐

- 内部移动端聊天项目（问题记录）

  - hook 的写法，哪些变量应该放到`useRef`中，那个可以直接声明，尤其`new`出来的对象
  - websocket 在开发环境，路径不能只是，会与 wds(webpack dev server)产生冲突？
  - 功能尽量拆分出单独的方法，调用方法

- 做一个项目，开始时做设计，结束做总结：
  - 项目中用到的技术点，组件
  - 开发中可能遇到的技术难点
  - 整体的项目结构，工程化需要用到的工具
  - 会用到哪些组件、手写还是引用第三方开源
  - 工具方法的提炼，也可以写成 hook 的形式
  - CSS 的组织，需要用到哪些变量
  - hooks(useState,useEffect,useRef...)只能用到函数式组件的内部，或者自定义 hook 中
  - 可以通过路由组织页面结构
  - 完成后总结遇到的问题，进度慢的原因，避免边做边想，陷入细节，做的过程中发现方向性问题
  -
- 学一个东西，学个大概，关注整体，先忽略细节

### 开源项目

- [react-admin，marmelab 定制化的后台管理系统。](https://marmelab.com/react-admin/Readme.html)

  - layout
  - theme
  - auth
  - data provider
  - crud

- [react-admin system solution : react 后台管理系统解决方案](https://github.com/yezihaohao/react-admin)

  - 路由的编程式写法，包含嵌套
  - 菜单栏根据路由生成，权限控制

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

- [A web-based notes app for developers.](https://github.com/taniarascia/takenote)
  - typescript
  - testing-library-react
  - cypress
  -

## 面试题

[大厂面试中遇到的几十道 webpack 与 react 面试题](https://juejin.im/post/6844904031735775245)

## 移动端

- [react 移动端适配](https://github.com/caoxiaoke/react-vw-layout)，有个毛病，没有生命 postcss-preset-env

## 组件库

- 组件分类
  - 通用
  - 展示数据
  - 表单
  - 反馈
  - 导航
- 复杂组件

  - tree 树状结构
  - table 表格
  - datapicker 日期选择
  - calendar 日历

- 开源组件库
  - https://github.com/brillout/awesome-react-components
  - https://ant.design/index-cn
  - https://mobile.ant.design/index-cn
  - https://rn.mobile.ant.design/index-cn
  - https://github.com/styled-components/styled-components
  - https://github.com/react-bootstrap/react-bootstrap
  - https://material-ui.com/zh/
  - https://github.com/elemefe/element-react
  - [react 组件库,awesome-react-components](https://github.com/brillout/awesome-react-components)
  - [antd 的基础库，react-component](https://github.com/react-component?type=source)
    - ant-design 在 react-component 组件之上包装一层，加上一些公用的属性，如`size`,`diriction`,`position`等
    -

### checkbox

#### ant-design 实现的 CheckBox

- [rc-checkbox](https://github.com/react-component/checkbox)

  - 当从 props 中获取值作为 state 时，可以使用 getDerivedStateFromProps
  - onChange 事件的处理
  - classnames 处理 class 名称，命名规则按照（前缀+层级+状态/形状。。。），常用的如`prefix`,`wrapper`,`inner`,`item`...
  -

- [antd-checkbox](https://github.com/ant-design/ant-design/tree/master/components/checkbox)

  - typescript 的使用
    - `React.CSSProperties`,`React.MouseEventHandler<HTMLElement>`,`React.KeyboardEventHandler<HTMLElement>`
  - group(关键的两步，**_registerValue_**,**_toggleOption_**)

    - 主要的信息都通过`context`传递给子组件,`toggleOption`,`value`,`disabled`,`name`,`registerValue`,`cancelValue`,
    - 接收到的初始`value`数组，作为初始值出传递给`useState`
    - `toggleOption`更新`CheckBox`是否选中，暴露给用户的`onChange`接口 API 也在该方法中调用，api 接受`value`数组，并被`registeredValues`过滤过，保证值对应的组件在页面上
    - `registerValue`、`cancelValue`传递给子组件，注册或者取消注册子组件，当删除或者新增的时候调用
    - 通过 options 生成对应的一个或者多个`CheckBox`
    - 组件通过 memo 包装了一层

  - CheckBox
    - 对于在`group`中使用的`CheckBox`，第一次渲染完成，判断是否有传递过来的`registerValue`,有则调用注册当前`CheckBox`
    - 对于在`group`中使用的`CheckBox`，当`value`变化并且与之前的值不相等，重新`registerValue`
    - 对于在`group`中使用的`CheckBox`，在`props`的`onChange`方法中调用 **_`toggleOption`_** ,单独使用 CheckBox 时直接调用`onChange`
    - 单独使用`CheckBox`时，透传大部分`props`，其他属性如`checked`结合`ClassName`生成对应的`ClassName`
    - CheckBox 在 rc-checkbox 基础上包装一层`label`

#### 自己实现的 CheckBox

[git 地址](https://github.com/jianxiangxun/checkbox)

- 优点：

  - 漂亮的 check 效果，让人印象深刻
  - 尝试使用如 context 等特性来简化状态管理
  - useCallback 与 useMemo 的使用说明重视性能
  - 测试较全面，重点需求都照顾到了

- 可以改进的地方：

  - 未实现的功能：
    - 一个重要需求未正确实现：多列时，每一列顺序应该从上到下，而不是每一行从左右到
    - MultiCheck 传入的 `label` 未使用
  - 变量定义：
    - 很多 `let` 可以使用 `const`，更安全
    - 组件属性比如 `selectAllCheckboxProps` 放在外面定义成变量，而不是写成组件形式，可读性不佳
  - hook 的使用问题：
    - `useCallback` 与 `useMemo` 的使用不完全正确，依赖项有缺失
  - 代码不容易理解：
    - Checkbox 中 `handleChange` 中的逻辑复杂难以理解
    - `context` 在这个组件中使用有点重，`context`中 `onChange` 的语义不明确
  - 单元测试：
    - 测试写法有问题，大量写了 `setTimeout` 的测试永远不会失败

- 疑问
  - 父子组件中写测试的问题，在父组件中操作子组件，通过方法是否被调用判断
  - 暴露出的组件的`onChange`方法调用`setState`，并把`setState`的`value`提供给组件？

### tabs

- css
  - css 按照层级结构去书写，清晰；命名按照层级去命名，以`-`连接，如`rc-tabs-tab-nav-list`
  - css 分文件，index 写主要的结构，附加的写到单独的文件，如样式`positiion`,`type中的card样式`,`size`；功能`dropdown`。。。
  - 前缀变量，如`rc-tabs`,`rc-checkbox`
  - tab 滑动时，不用滚动条`overflow:hidden`,监控`wheel`事件通过 **_transform:(translate)_** 改变元素位置，**提高性能**
  - `offsetHeight`,`offsetWidth`等的大量使用
  - 样式文件不直接引入，放到单独的 style 文件夹中，在整个项目入口 `index` 中引入所有组件的样式文件，最终可以一次导入
- hooks
  - 通过改变值，把值作为 effect 的依赖，从而来做对应的操作
- 知识点
-

### progress

- 圆形 circle 由 SVG 实现

### slider

- on

### dropdown

### menu

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

## 视频中的知识点

- [mksz428 - React+TypeScript 高仿 AntDesign 开发企业级 UI 组件库](https://coding.imooc.com/class/428.html)
  - typescript
    - ts-node,工具
    - 鸭子类型，意思是主要叫的像鸭子就把他当做鸭子
    - class 类的概念，修饰符`private`,`public`,`protect`,`readonly`,`static`
    - `typescript`目录，查看文件`/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib`
    - `lib.dom.d.ts`,`lib.es5.d.ts`文件分别定义了 DOM 相关类型，方法和各种类型等
    - 继承`extends`,实现`implements`
    - 常量枚举的概念，提高性能
    - **泛型约束**，`extends`
    - 接口`interface`
    - 类型别名`type`,类型断言`as`,`(str as string).length`,`(<string>str).length`
    - 声明文件`declare`,`declare var jQuery`
  - react
    - `npx create-react-app demo-app`
    - `node_modules/.bin/mocha`在`.bin`文件夹中执行相应的命令，执行时把`.bin`加入系统变量`PATH`,执行完删除
  - 组件起步
    - 通过 `CSS` 类名去应用样式，比直接 `inline` 样式性能要好
    - 定义 `sass` 通用样式，颜色、字体、边框、圆角。色彩体系、字体体系等
    - 定义 `sass` 通用方法 `mixin`，一组 `CSS` 属性在不同状态下时很有用
    - `normalize.css`统一各个浏览器的通用样式，添加基础样式
    - 原生`button`属性很多，可以继承已经写好的`interface`，然后在这个基础上扩展
  - storybook
    - [测试、部署工具](https://www.chromatic.com/start)
    - storybook 的各种插件，对各种工具的支持，如 addon-info、react-docgen、jsdoc
    - storybook 的配置，webpack 处理特定的文件格式
    - 装饰器、全局装饰器
    - 使用 typescript，对应在 webpack 做配置以解析`ts`,`tsx`文件
    - stories 默认导出中包括 component,title,decorator 等,`Template.bind({})`
    - 快照测试,`snap test`,`@storybook/addon-storyshots`
    - 自动化测试，结合`testing-library/react`,`@storybook/testing-react`
    - 容器组件，react-redux 连接容器组件，获取数据，用 mock 数据包装展示组件
    - Controls
  - 组件测试
    - 测试金字塔，单元测试、集成测试、e2e 测试的比重
    - [jest-dom](https://github.com/testing-library/jest-dom),扩展 Tobe 语句，如`toBeInTheDocument`,`toHaveClass`
    - `testing-library`中`fireEvent.click(element)`
  - 组件
    - menu 组件
      - 先写组件的基本结构，在扩展功能。**自己写组件、阅读组件**也是先写基本功能，在扩展
      - `await wait(()=>{})`
      - **问题？？？**，创建样式文件控制元素显示隐藏
    - upload 组件
      - 测试异步组件、测试拖拽组件
      - jest.mock()
  - 打包
    - 通过 tsc 编译代码到指定版本，抽取出声明文件
    - 入口文件，把所有组件导入到 index.ts 中，把所有样式文件导入到 index.scss 中
    - npm link 生成软连接在本地引用
    - eslint 配置，覆盖默认规则
  - 发布
    - package.json 中,files 字段,指定发布哪些文件夹
    - 配置 Travis
    - 配置 GitHub token
    - 通过 husky，添加钩子
