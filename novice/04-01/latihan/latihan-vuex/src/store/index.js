import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cobaTest: "ini coba test",
    testCoba: [],
    count: 0,
    iniPostUser: []
  },
  mutations: { ///sych
    increment: function(state) {
      state.count++;
    },
    decrement: function(state) {
      if (state.count > 0) {
        state.count--;
      }
    },
    iniCobaSet: function(state, payload){
      state.cobaTest = payload;
      state.testCoba.push(payload);
    }
  },
  actions: { // async
     iniCobaSet: async function(context) {
      const urlGetPost = "https://jsonplaceholder.typicode.com/posts";
      
      const dataUser = await fetch(urlGetPost);
      const d = await dataUser.json();
      context.commit("iniCobaSet" , d.dataUser);
      
    }
  },
  getters: {
    getCounter: state => {
      return state.count;
    },
    getCoba: state => {
      return state.cobaTest;
    },


  }});
