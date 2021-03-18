# VUE

[vue 文章合集](https://juejin.im/collection/6845244138305093646)

[vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/guide/#%E5%8A%9F%E8%83%BD)

## 概念

[ 20 个 Vue 技巧](https://juejin.im/post/6872128694639394830#heading-22)⭐

- 透传所有监听事件，`v-on="$listeners"`
- 插槽 slot
  - 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的
  - 作用域插槽实现 UI 和业务逻辑的分离，通过类似 `v-slot:default="slotProps"` 接受子组件传递过来的数据
  - [从 slot 到无渲染组件](https://juejin.im/post/6869537683736100871)
- 动态的指令参数，`@[someEvent]`
- hookEvent,监听子组件的声明周期
- v-for 中的 key 的使用，router-view 中添加 key
- v-model 语法糖，model 选项
- CSS 中 scope 选项，深度选择器`>>>,::v-deep,/deep/`
- watch 中 `immediate`的使用
- v-cloak 解决页面闪烁
- v-once,v-pre 提高性能
- 声明 `functional: true`，表明它是一个函数式组件
- `Vue.observable` 实现状态共享
- `$event`

[如何实现组件属性透传？](https://juejin.im/post/6865451649817640968#heading-3)

- `v-bind=$attrs`
- 动态组件透传，渲染函数，`render、createElement`

## 性能优化

[vue 性能优化篇](https://zhuanlan.zhihu.com/p/222017168)

## 项目

[vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/guide/#%E5%8A%9F%E8%83%BD)

## 面试题

[30 道 Vue 面试题](https://juejin.im/post/6844903918753808398)

## 问题&坑
