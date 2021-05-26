# 代码相关

## babel

[Babel 用户手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)

[不容错过的 Babel7 知识](https://juejin.cn/post/6844904008679686152#refetch)

[深入浅出 Babel 上篇：架构和原理 + 实战](https://juejin.cn/post/6844903956905197576)

[深入浅出 Babel 下篇：既生 Plugin 何生 Macros](https://juejin.cn/post/6844903961820921869#refetch)

## eslint

- 分为几部分,`extends`,`plugins`,,`rules`,
- `settings`:共享的属性放在 setting 中
- `overrides`:覆写，如`typescript`、`jest`等
- `root`:设置为 true 不在向上级查找
- `env`：支持的环境,node、jest、browser、ecma...
- `parser`,`parserOptions`:解析器、`babel-eslint`
- `eslintignore`排除不需要检查的文件

[官网](https://eslint.org/)

[深入浅出 eslint——关于我学习 eslint 的心得](https://juejin.cn/post/6844903684522917902#heading-6)

create-react-app 中的使用：

- 使用 eslint-plugiin-react-app
- 进入 eslint-plugiin-react-app 源代码，分成两部分
  - 一部分针对本身，extends 了基础 base 配置，base 中是基础配置，并使用了 eslint-plugin-react 插件
  - 一部分针对 jest。在 jest 中对于后缀为 test 的文件覆写了一些规则
- 配置：
  - 在新版本中从作为 loader 使用，改成作为 plugin 使用，`eslint-webpack-plugin`
  - 通过 option 传递配置项

## typescript

## test

[How to use React Testing Library Tutorial](https://www.robinwieruch.de/react-testing-library)

- jest 是一个 test runner，gives you the ability to run tests
- Jest offers you functions for test suites, test cases, and assertions. Of course the frameworks offers more than this (e.g. spies, mocks, stubs, etc.)。能够渲染 react
- React Testing Library 辅助测试 **_react_** 项目的工具

[测试相关文章，来自掘金](https://juejin.cn/collection/6866385817200394247)

[那些年错过的 React 组件单元测试（上）](https://juejin.cn/post/6943430853972852750)

[那些年错过的 React 组件单元测试（下）](https://juejin.cn/post/6946008649026240519)
