import Vue from 'vue';
import Vuex from 'vuex';

import mail from '@/store/mail.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mail,
  },
});
