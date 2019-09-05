import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    PackageList: [
      { wayBillNum: "", addressee: "", telephone: "", weight: "" }
    ]

  },
  mutations: {
    initTodos: function (state, todods) {
      state.PackageList = todods;
  }
  },
  actions: {
    updateTodos(context, obj) {
      const url = "http://localhost:8080/expressDelivery";
      //put
      console.log(53, obj)
      axios
        .put(url + "/" + obj.id, {
          content: obj.inputtingItem,
          status: "active"
        })
        .then(function (response) {
          context.dispath("fetchTodos");
        })
        .catch(function (error) {
          console.log(error.response);
        });
    },

    createTodos(context, inputtingItem) {
      const url = "http://localhost:8080/expressDelivery";
      //post
      axios
        .post(url, { 
          wayBillNum: "", addressee: "", telephone: "", weight: "" 
        })
        .then(function (response) {
          context.dispath("fetchTodos");
        })
        .catch(function (error) {
          console.log(error.response);
        });
    },

    fetchTodos(context) {
      const url = "http://localhost:8080/expressDelivery";
      axios
        .get(url)
        .then(function (response) {
          console.log(context);
          context.commit("initTodos", response.data);
        })
        .catch(function (error) {
          console.log(error, response);
        });
    }
  }
})
