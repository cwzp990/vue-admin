# vue-admin

## 项目起因

因在两家公司都是做的后台管理系统，加上对Vue比较熟悉，于是打算自己动手做一个简易的Vue版的后台管理系统，里面模块虽然不多，但是涉及了后台系统常用的模块。麻雀虽小五脏俱全~

## 数据来源

本项目采用大搜车的mock.js进行模拟，有真实的后台数据交互。

(2018.10.14更新)

因为官网经常瘫痪，学习了在本地部署了大搜车的mock.js项目，以后再也不用担心官网瘫痪请求不到数据啦~

顺便记录下启动本地mock的步骤：

+ net start mongo启动mongo

+ redis-server 启动redis

+ 进入easy-mock文件夹启动npm run dev

+ 浏览器输入http://127.0.0.1:7300启动easy-mock

![index](https://github.com/cwzp990/vue-music/blob/master/src/assets/gifs/all.gif)
