import DefaultLayout from '~/layouts/Default.vue'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css'


export default function (Vue, { router, head, isClient }) {
  Vue.use(ElementUI);
  Vue.component('Layout', DefaultLayout)
}
