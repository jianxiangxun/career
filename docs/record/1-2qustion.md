# 问题记录

## mysql

Q:解决 MAC 电脑 Sequel Pro encountered an unexpected error 问题
A:遇见这种 mysql，也是有办法滴，使用 test\_ build 版本， https://sequelpro.com/test-builds

Q:MySQL 8 + macOS 错误：Authentication plugin 'caching*sha2_password' cannot be loaded
A:ALTER USER *'root'@'localhost'\_ IDENTIFIED WITH mysql_native_password BY 'yourpassword';

进入 MySQL
/usr/local/MySQL/bin/mysql\_ -u root -p

链接远程 MySQL
mysql -h _23.106.134.88_ -u root -p 123456

https://1c7.me/mysql-8-connect-error-2018/

## mongo

启动
mongod --dbpath ~/config/data/db/

https://www.jianshu.com/p/7241f7c83f4a

https://www.runoob.com/mongodb/mongodb-osx-install.html

[Navicat Premium for Mac v12.0.22.0 完全免费激活方法之完美破解](https://blog.csdn.net/marswill/article/details/79808416)

## npm

使用 nrm 工具切换淘宝源
npx nrm use taobao

如果之后需要切换回官方源可使用
npx nrm use npm

nvx nvm nrm

## bash-profile

https://stackoverflow.com/questions/33725639/npm-install-g-less-does-not-work-eacces-permission-denied

https://www.jianshu.com/p/ba42b0c7a736

https://gist.github.com/paulocheque/3667381

//切换到 zsh
chsh -s `which zsh`

//切换到 bash
chsh -s `which bash`

//查看 shell 版本
echo \$SHELL

其他 shell 可通过 cat /etc/shells 查看当前系统已安装的 shell 所有版本

## java 配置

/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home

## Android stutio

## homebrew

/bin/zsh -c "\$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

https://zhuanlan.zhihu.com/p/111014448

## GitHub

github,添加 DNS 不好用

https://cloud.tencent.com/developer/article/1600353

github 访问慢，`github.com`替换成`github.com.cnpmjs.org`

## cocoapods

[pod 使用小记](https://juejin.cn/post/6844903830535012365)

cocoapods 替换镜像源，解决安装缓慢、不成功问题：
https://mirrors.tuna.tsinghua.edu.cn/help/CocoaPods/

卸载：
https://www.jianshu.com/p/da85db9d9523

安装：
sudo gem install cocoapods

安装依赖包包:
发生执行 pod install 或 pod update 都卡在 Analyzing dependencies 的情况，是因为要升级 CocoaPods 的 spec 仓库，命令后添加`--verbose --no-repo-update` 参数可以省略此步。

[pod install 报错 fatal: unable to access ‘https://chromium.googlesource.com/webm/libwebp/’: Failed t…](https://www.codenong.com/js97e289cfa230/)

cocoapod 1.8 版本以后走 CDN，所以需要修改的是 `~/.cocoapods/repo//trunk/Specs/1/9/2/libwebp` 路径下的 source

## css

ios 端图片不显示
https://zhuscat.com/posts/img-not-show-problem

### node sass

https://www.cnblogs.com/renxiaoren/p/11903792.html

## websocket

create-react-app 中引用 websocket 时，代理时路径中不能只包含/websocket

## ruby

gem 慢，切换 gem 镜像源
[教程](https://www.runoob.com/ruby/ruby-rubygems.html)
[ruby-China](https://gems.ruby-china.com/)

gem install 安装不成功
https://blog.csdn.net/LYYCasablanca000/article/details/86024688
