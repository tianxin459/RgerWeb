import Vue from 'vue';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';


import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import App from './components/app.vue';

import TT from './util/pg';



Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueMaterial);
Vue.use(TT);

Vue.http.options.headers = {};
Vue.http.options.headers.Accept='application/json';


Vue.mixin(
    {
        data:()=>{
            return{
                get BaseUrl(){
                    return "http://10.80.52.62/CapabilityServer/api/";
                }
            }
        }
    }
    );
    
const routers = [
    {
      path: '/config',
      component: App
    },
    {
      path: '/',
      name: 'App',
      component: App
    },
  ]

const router = new VueRouter({
    // mode:'history',
  routes:routers // (缩写) 相当于 routes: routes
})

let app = new Vue({
    el:'#app',
    router:router
})