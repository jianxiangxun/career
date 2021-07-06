# Node

[官方文档](https://nodejs.org/api/process.html)

## 开源 API 接口

[Open source Node.js Headless CMS to easily build customisable APIs](https://github.com/strapi/strapi)

[网易云音乐 Node.js API service](https://github.com/Binaryify/NeteaseCloudMusicApi)

[The Node.js best practices list (April 2021)](https://github.com/goldbergyoni/nodebestpractices?utm_source=gold_browser_extension)

[The world easiest & fastest tool belts to mock your APIs|](https://designer.mocky.io/)

[]()

## 概念

[菜鸟教程](https://www.runoob.com/nodejs/nodejs-tutorial.html)

- eventEmitter
- buffer
- stream
  - read
  - write
- 路由
- URL 模块
- querystring
- 全局变量
  - `__filename`
  - `__dirname`
  - `process`
    - 事件
    - 属性
      - `argv` 返回一个数组，由命令行执行脚本时的各个参数组成
      - `env` 返回一个对象，成员为当前 shell 的环境变量
      - `pid`、`title`、`platform`
    - 方法
      - `nextTick`
- fs 模块
  - readfile
  - openfile
  - stat 文件信息
  - writeFile
  - close
  - ftruncate 截取文件
  - unlink 删除文件
  - mkdir 创建文件目录
  - readdir 读取目录
  - rmdir 删除目录
- http 模块
  - createServer
  - request
  - response
- path 模块
  - resolve 解析为绝对路径
  - relative 绝对路径转换为相对路径
- 多进程
  - child_process
    - child_process.exec 使用子进程执行命令
    - spawn - child_process.spawn 使用指定的命令行参数创建新进程
    - fork - child_process.fork 是 spawn()的特殊形式，用于在子进程中运行的模块
    - `const child_process = require('child_process')`;

[Express](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction#%E6%89%98%E7%AE%A1%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6)

- 中间件
- 路由,expess.Router();
- express.static,托管静态文件
- Express 应用对象还提供了为其它所有 HTTP 动词定义路由处理器的方法，大多数处理器的使用方式完全一致
  - get()
  - delete()
  - post()
  - header()
  - put()
  - ...
- 错误处理,`(err, req, res, next)`
