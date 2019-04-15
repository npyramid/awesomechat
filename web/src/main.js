import Vue from 'vue';
import App from 'src/App';
import store from 'src/store';
import router from 'src/router';
import ChatScroll from 'vue-chat-scroll';

Vue.config.productionTip = false;

Vue.use(ChatScroll);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
