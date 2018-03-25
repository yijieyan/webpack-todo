# webpack-todo
vue webpack 的配置
### webpack.config.js 配置说明
#### 1. 分development环境和production环境
#### 2. 使用了sass的css的扩展语言用的 sass-loader编译成css
#### 3. development环境去掉了weback-dev-server 的log,通过devServer 对象里的clientLogLevel和quiet修改
#### 4. plugins都是平常用的,具体去参考[webpack中文网](https://www.webpackjs.com/plugins/),webpack中文网是很好的网站，强力推荐一波。
#### 5. 本次的demo是练习搭建[vue](https://cn.vuejs.org/)基于[webpack](https://www.webpackjs.com/)的开发环境和生产环境,练习使用了[vue-router](https://router.vuejs.org/zh-cn/), [vuex](https://vuex.vuejs.org/zh-cn/),
添加了[eslint](http://eslint.cn/docs/user-guide/configuring),[scss](https://www.sass.hk/)等技术点。

```
$ git clone https://github.com/yijieyan/webpack-todo.git
$ cd webpack-todo
$ npm install  或者 cnpm install 或者  yarn
$ npm run dev 或者 npm start  或者  yarn run dev
```
