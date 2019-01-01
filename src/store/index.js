import Vuex from 'vuex';
import Vue from 'vue';

import list from './modules/list';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        list
    }
});