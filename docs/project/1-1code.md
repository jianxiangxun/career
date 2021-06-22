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

### jest

[]()

- test 方法和 expect 方法的原理，expect 抛出异常，test 捕获异常
- `npx jest init`,`jest.config.js`
- 配置`babelrc`使用 es6 语法，`babel-env`,转换成哪个环境识别的代码
- jest 集成了插件`babel-jest`，首先根据`babelrc`的内容进行转换，然后运行
- 匹配器，tobe...
  - testing-library/jest-dom,**扩充**匹配 dom 的 matcher
  - `expect.xxxContainiing`
  - `toEqual`类似于==，判断内容是否相等
  - `.not`
  - `toHaveBeenCalled`
  - `toMatch`
  - `resolves`
  - `rejects`
  - `toThrow`测试抛出异常
  - `toBe`类似于===或者 object.is
- 命令行启动 vscode
- watch 模式下的各种参数，如`-o`只运行在 Git 下有变化的文件
- test.only 只运行一个测试用例，忽略其他
- 测试异步代码
  - done
  - return promise
  - expect.assertions(1)，必须要有指定个数的 expect 被执行
  - resolves、rejects
  - async、await
- mock
  - .mock(calls、results、instance)
  - mock return value
  - mock Implementations
  - mock module，`jest.mock('axios');`
  - `__mocks__`模拟返回自定义的 mock function,`jest.mock(xxx)`
  - `jest.requireActual`返回真实函数，调过使用模拟函数
- 快照测试
  - toMatchSnapshot
  - Property Matchers,匹配变化的内容如时间，`expect.any(Date)`
  - Inline Snapshots
- timer
  - `jest.useFakeTimers()`
  - `jest.useRealTimers();`
  - `jest.runAllTimers();`
  - `jest.runOnlyPendingTimers();`运行 pending 中的 timer
  - `jest.advanceTimersByTime(1000);`快进时间
- mock es6 module
  - 假设 xxx 中方法很复杂，jest.mock(xxx)自动把 xxx 构造函数和方法替换成 jest.fn
  - **单元测试只关注本身，不关注引用的函数、方法，会常用到 mock，忽略关联**
  - 集成测试，对单元以及单元关联的内容都做测试
  -
- **改变 props 后，要重新获取 element**，`wrapper = mount(<App />)`
- TDD/BDD、集成测试
  - 优缺点
- 异步测试
  - ReactWrapper.update
  - ReactWrapper.debug

### testing-library

- findBy 是异步的，是 waitFor+getBy 的组合
- queryBy 查找不到返回 null

### 练习

- `fireEvent.change`不好使
- 多使用`userEvent`代替
