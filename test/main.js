// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Element from 'element-ui';
import FHUi from 'fh-ui'; // eslint-disable-line
import 'element-ui/lib/theme-chalk/index.css';
import '../lib/static/style.min.css'; // eslint-disable-line
import App from './App';
import router from './router';
import './components';

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
