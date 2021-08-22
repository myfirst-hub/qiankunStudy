import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'

Vue.config.productionTip = false
Vue.use(ElementUI)

const apps = [
  {
    name: 'vueApp', // 容器名
    entry: '//localhost:1000', // 默认会加载这个html，解析里面的js动态的执行（子应用必须支持跨域）
    container: '#vue', // 容器名
    activeRule: '/vue' // 激活的路径
  },
  {
    name: 'reactApp', // 容器名
    entry: '//localhost:2000', // 默认会加载这个html，解析里面的js动态的执行（子应用必须支持跨域）
    container: '#react', // 容器名
    activeRule: '/react' // 激活的路径
  }
]

registerMicroApps(apps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  }
}) // 注册应用
setDefaultMountApp('/')
start({
  prefetch: false // 取消预加载
}) // 开启

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
