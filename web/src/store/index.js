import Vue from 'vue';
import Vuex from 'vuex';
import config from 'src/config';
import modules from 'src/store/modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  strict: config.isDevelopment,
});
