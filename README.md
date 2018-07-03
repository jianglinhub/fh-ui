## fh-ui

> Vue + ElementUi 后台管理系统通用组件 [参考文档](https://jianglinhub.github.io/fh-ui-docs/#/)

#### What is it

* 封装常用业务组件，eg：通用查询、表格、各种按钮操作...
* 使开发人员更关注数据交互，不必在意通用组件的封装
* 持续完善中...

### Features

* 通用查询组件优化
* 通用操作按钮组件
* 脚手架？
* more...

### Q&A
* 工程代码太混乱？
> 不要在意细节～ -_-!! 刚起步，待优化的点还很多～～

* 不能删除？喵喵喵？-_-!
> 有BUG...待解决...

### 快速开始

#### 使用之前

有必要了解Vue基础知识哦，假设你已经用过Vue，并掌握如下内容。
* Vue组件
* 单文件组件
* `props`
* `slot`
* `events` `$emit` `@click`等

fh-ui是基于`element-ui`进行的开发，所以你需要提前安装`element-ui`，安装方法请参照`element-ui`[官方文档](http://element.eleme.io/#/zh-CN/component/installation)。

#### 引入 fh-ui
一般在 webpack 入口页面 main.js 中如下配置：
```js
import Vue from 'vue'
import Element from 'element-ui';
import FHUi from 'fh-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'fh-ui/lib/static/style.min.css';
import App from './App';
import router from './router';

Vue.use(Element);
Vue.use(FHUi);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
```

#### 按需引入
由于babel策略调整，暂时没有实现按需引入的方式，后期做好调研之后会进行按需引入的尝试。

#### 特别提醒
你需要导入fh-ui的样式，即在 `main.js` 或根组件执行 `import fh-ui/lib/static/style.min.css`，该文件包含了对`element-ui`的自定义样式优化，所以请保证它是在引入`element-ui`的样式文件之后引入的。
