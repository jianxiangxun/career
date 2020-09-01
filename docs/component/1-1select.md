# select

## new Date 在 safari 的坑

`new Date('2019-06-04 00:00:00')`在除了 Safari 的浏览器都能正常运行。
问题就出在 Safari 对于这个格式 `YYYY-MM-DD HH:MM:SS` 无法解析，所以我们需要做的是将其转化为 `YYYY/MM/DD HH:MM:SS`

```js
+new Date(val.replace(/-/g, '/')
```

## 获取元素宽度

说真的，我觉得前端麻烦的地方就是 API 太多了，我只是想获取一个元素的宽度居然有`getBoundingClientRect().width`

## 我使用 Async/Await 而不使用 Promises 的六个理由

本文主要来自于 [6 Reasons Why JavaScript’s Async/Await Blows Promises Away](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)，在 medium 上，需要翻墙阅读。

之前我很长一段时间内都是使用 promise 的，但遇到一些复杂业务的时候，发现还是写起来会很不爽，代码阅读性也有所欠缺。

1. 简洁

对比 Promise，我们不需要书写.then，不需要新建一个匿名函数处理响应，也不需要再把数据赋值给一个我们其实并不需要的变量

2. a

但 Async/Await 也不是没有缺点的，很多人经常会错用它。比如我一个组件创建的的时候会异步向服务器发送三个请求，`a`、` b``、c `。
很多人会这么写

```js
async function mount() {
  const resultA = await fetch('A')
  const resultB = await fetch('B')
  const resultC = await fetch('C')

  render(resultA, resultB, resultC)
}
```

虽然上面的这段写法相对于 promise 简洁了不少，但效率来说是不合格的。因为这个请求是异步的，毫无联系的，所有没必要顺序请求，他们三个明显可以异步并发的去请求。要想实现真正的异步，还是需要依赖 Promise.all 封装一层：

```js
async function mount() {
  const result = await Promise.all(
    fetch('a.json'),
    fetch('b.json'),
    fetch('c.json')
  )

  render(...result)
}
```

未完待续...