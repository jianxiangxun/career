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

![873690ef19a9308f2431ca1b1992869b.png](evernotecid://9C5AAC4E-C6EE-4474-B33A-6ABCAFD93386/appyinxiangcom/25870804/ENResource/p45)

## homebrew

/bin/zsh -c "\$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

https://zhuanlan.zhihu.com/p/111014448

## 访问网站慢的问题

github,添加 DNS 不好用
https://cloud.tencent.com/developer/article/1600353
github 访问慢，`github.com`替换成`github.com.cnpmjs.org`

cocoapods
https://mirrors.tuna.tsinghua.edu.cn/help/CocoaPods/

github:码云

## node sass

https://www.cnblogs.com/renxiaoren/p/11903792.html
