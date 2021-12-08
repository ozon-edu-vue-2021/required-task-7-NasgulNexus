import Vue from "vue";
import Vuex from "vuex";

import commonActions from "./actions/actions";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";
import data from "../../data";

const actions = { ...commonActions };

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    data: data
  },
  mutations,
  actions,
  getters
});

export default store;
