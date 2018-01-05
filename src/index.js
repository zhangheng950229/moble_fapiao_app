import Vue from "vue";  //引入vue
import reset from "./css/reset.css";  //引入样式重置
import common from "./css/common.css";  //引入css
import App from "./views/app.vue"; //引入组件
import router from "./router/router.js";  //引入router
import axios from 'axios';   //引入axios

window.axios = axios;
Vue.config.debug = true;

{
  //屏幕自适应
  if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
    document.getElementsByTagName("html")[0].style.fontSize = screen.width/375*20 + 'px';
  }
  else {
    document.getElementsByTagName("html")[0].style.fontSize = '26px';
    document.getElementsByTagName("html")[0].style.maxWidth = '488px';
    document.getElementsByTagName("html")[0].style.margin = 'auto';
    document.getElementsByTagName("html")[0].style.border = '1px solid #ddd';
    document.getElementsByTagName("html")[0].style.paddingBottom = '32px';
  }
}
new Vue({
  el:'.main',
  router,
  template: '<app/>',
  components: {
    app:App
  }
});
