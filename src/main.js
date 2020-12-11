// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import {Container ,Header,Main,Aside,Footer,Button,Row,Col,Menu,MenuItem,Card} from 'element-ui'
import './assets/css/common.css'

export default function (Vue, { router, head, isClient }) {
  useComponent(Vue,[
    Container ,Header,Main,Aside,Footer,Button,Row,Col,Menu,MenuItem,Card
  ])

// Vue.component(Container.name, Container);

  Vue.component('Layout', DefaultLayout)


  
}
function useComponent(Vue,components){
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}