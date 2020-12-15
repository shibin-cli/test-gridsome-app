import DefaultLayout from '~/layouts/Default.vue'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css'
import dayjs from 'dayjs'


export default function (Vue, {
  router,
  head,
  isClient
}) {
  Vue.use(ElementUI);

  Vue.filter('formatDate', (val,format = "YYYY-MM-DD HH:mm:ss") => {
    return dayjs(val).format(format)
  })
  Vue.component('Layout', DefaultLayout)
}