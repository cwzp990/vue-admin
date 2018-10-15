# vue-admin

## 项目起因

因在两家公司都是做的后台管理系统，加上对Vue比较熟悉，于是打算自己动手做一个简易的Vue版的后台管理系统，里面模块虽然不多，但是涉及了后台系统常用的模块。麻雀虽小五脏俱全~

![index](https://github.com/cwzp990/vue-admin/blob/master/src/assets/index.png)

## 数据来源

本项目采用大搜车的mock.js进行模拟，有真实的后台数据交互。

(2018.10.14更新)

因为官网经常瘫痪，学习了在本地部署了大搜车的mock.js项目，以后再也不用担心官网瘫痪请求不到数据啦~

顺便记录下启动本地mock的步骤：

+ net start mongo启动mongo

+ redis-server 启动redis

+ 进入easy-mock文件夹启动npm run dev

+ 浏览器输入http://127.0.0.1:7300启动easy-mock

![mock](https://github.com/cwzp990/vue-admin/blob/master/src/assets/mock.png)

## 功能介绍

通常，后台系统都是有权限控制功能的，有些页面只能拥有此权限的客户才能看到，此项目模拟了两个权限用户，admin和editor，在权限控制子页面，admin页面只有admin账号能看到，all页面是两者都能看到

其次后台系统的侧边栏是动态生成的，此部分需要和后端联调，从后台请求到相应的路由，通过Vue提供的router.addRoutes添加此项路由

一般的后台系统都有使用图表和地图处理数据的需求，这里使用了echarts和高德地图

本项目借助element-ui进行快速开发，一些关于element-ui的坑，我也记录在了github另外的项目中

项目还在持续完善中...

## 工具 & 技能

Vue + Vuex + VueRouter + Axios + EasyMock + ElementUI


## 使用

git clone https://github.com/cwzp990/vue-admin.git

cd vue-admin

npm install 

## 一些问题

侧边栏动画问题（正在解决）

## 目录结构

```js

│  .gitignore
│  babel.config.js
│  list.txt
│  package.json
│  README.md
│  vue.config.js
│  yarn-error.log
│  yarn.lock
├─public
│      favicon.ico
│      index.html
│      
└─src
    │  App.vue
    │  main.js
    │  
    ├─api--------------------------统一封装api
    │      charts.js
    │      list.js
    │      login.js
    │      
    ├─assets-----------------------静态资源文件
    │      
    ├─components-------------------可复用的组件目录
    │  ├─box-card------------------首页技能树组件
    │  │      index.vue
    │  │      
    │  ├─panel---------------------首页面板组件
    │  │      index.vue
    │  │      
    │  ├─svg-icon------------------svg组件
    │  │      index.vue
    │  │      
    │  ├─switch--------------------头部切换按钮
    │  │      index.vue
    │  │      
    │  └─todo-list-----------------首页todolist组件
    │          index.vue
    │          
    ├─icons------------------------svg图标
    │          
    ├─pages
    │  ├─about---------------------关于作者页面
    │  │      resume.vue
    │  │      
    │  ├─charts--------------------图标页面
    │  │      charts.vue
    │  │      index.vue
    │  │      
    │  ├─dashboard-----------------首页
    │  │      index.vue
    │  │      
    │  ├─errorPage-----------------出错页面
    │  │      401.vue
    │  │      404.vue
    │  │      
    │  ├─layout--------------------布局页面
    │  │  │  index.vue
    │  │  │  
    │  │  └─children
    │  │      │  app-main.vue------展示页面
    │  │      │  index.js
    │  │      │  navbar.vue--------头部导航
    │  │      │  tags-view.vue-----面包屑导航
    │  │      │  
    │  │      └─sidebar------------侧边栏
    │  │              index.vue
    │  │              item.vue
    │  │              sidebar-item.vue
    │  │              
    │  ├─list----------------------列表页面
    │  │      index.vue
    │  │      options.vue
    │  │      
    │  ├─lock----------------------锁屏页面(正在完善)
    │  │      lock.vue
    │  │      
    │  ├─login---------------------登录页面
    │  │      index.vue
    │  │      
    │  ├─maps----------------------地图页面
    │  │      index.vue
    │  │      
    │  ├─nested--------------------嵌套页面
    │  │  ├─menu1
    │  │  │  │  index.vue
    │  │  │  │  
    │  │  │  ├─menu1-1
    │  │  │  │      index.vue
    │  │  │  │      
    │  │  │  ├─menu1-2
    │  │  │  │  │  index.vue
    │  │  │  │  │  
    │  │  │  │  ├─menu1-2-1
    │  │  │  │  │      index.vue
    │  │  │  │  │      
    │  │  │  │  └─menu1-2-2
    │  │  │  │          index.vue
    │  │  │  │          
    │  │  │  └─menu1-3
    │  │  │          index.vue
    │  │  │          
    │  │  └─menu2
    │  │          index.vue
    │  │          
    │  ├─permission----------------权限页面
    │  │      directive.vue
    │  │      page.vue
    │  │      
    │  └─theme---------------------主题页面
    │          index.vue
    │          
    ├─router-----------------------VueRouter
    │  │  index.js
    │  │  
    │  └─modules-------------------嵌套页面路由
    │          nested.js
    │          
    ├─store------------------------Vuex
    │  │  getters.js
    │  │  index.js
    │  │  
    │  └─modules
    │          app.js--------------布局
    │          permission.js-------权限
    │          tags-view.js--------面包屑
    │          user.js-------------用户
    │          
    ├─styles-----------------------样式
    │      index.scss
    │      mixin.scss
    │      reset.scss
    │      
    └─utils------------------------常用函数封装
            auth.js
            permission.js
            request.js
            validate.js

```

## 截图

![admin](https://github.com/cwzp990/vue-admin/blob/master/src/assets/admin.gif)