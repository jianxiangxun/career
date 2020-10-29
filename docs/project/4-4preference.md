# 性能优化

> HTTP 优化：

- 减少请求次数
- 减少单次请求所花费的时间
- 减小文件大小
- tree-shaking 删除无效资源
- 提取公共代码
- 按需加载
- 开启 gzip 压缩
- 有损大图片 jpg,无损小图标 png,webp,耗性能不失真 svg，base64，懒加载

> 缓存：

- 强缓存，cache-control，max-age，expire。smaxage 代理服务器，public 和默认 private，private 不能被代理服务器缓存。
- 协商缓存，last-modify、etag，if-modify-since,if-none-match。
- memory cache，disk cache，service work cache 等。
- 本地存储，cookie，4KB，web storage，indexDB。

> cdn：

- 近距离拉取文件，减少某个服务器负担，缓存与回源。TCP 请求数，不携带 cookie。

> 浏览器渲染：

- 服务端渲染
- 浏览器内核，渲染引擎和 JS 引擎，（HTML 解释器、CSS 解释器、图层布局计算模块、视图绘制模块与 JavaScript 引擎）
- CSS 查找从右到左
- CSS 阻塞，js 阻塞
- js 加载 async、defer

> DOM 操作：

- 减少 DOM 操作，fragment
- （eventloop 过程，取出一个宏任务执行，取出一队微任务执行，执行渲染操作，更新节目，处理 work 相关任务），异步更新策略封装为微任务
- 减少重排重绘。几何形状的改变，回流也叫重排 reflow。颜色的改变重绘 repaint。
- offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight 会导致回流，因为需要实时计算得出结果。
- 批量操作 DOM，将 DOM 隐藏，flush 队列减少重排
- 应用防抖与节流

> 性能检测工具：

- performance
- Lighthouse
