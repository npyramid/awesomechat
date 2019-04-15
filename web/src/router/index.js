import Vue from 'vue';
import Router from 'vue-router';
import Home from 'src/pages/Home';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/api',
    },
  ],
});

export default router;
