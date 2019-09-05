import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentFilter: "unbooked",
    todoList: [{
      wayBillNum: "1518551",
      addressee: "小灰灰",
      telephone: "110",
      weight: "3kg",
      state: "unbooked",
      appointmentTime: "2018/05/16"
    }]

  },

  getters: {
    filteredTodoList: function (state) {
      let filteredTodoList = [];
      for (let i = 0; i < state.todoList.length; i++) {
        if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].state) {
          filteredTodoList.push(state.todoList[i])
        }
      }
      return filteredTodoList;
    }
  },

  mutations: {
    changeFilter: function (state, currentFilter) {
      state.currentFilter = currentFilter;
    },
    initTodos: function (state, todods) {
      state.todoList = todods;
    }
  },

  actions: {
    createTodos(context, obj) {
      const url = "http://localhost:8081/expressDelivery";
      console.log(45, obj);
      //post
      axios
        .post(url, {
          wayBillNum: obj.wayBillNum,
          addressee: obj.addressee,
          telephone: obj.telephone,
          weight: obj.weight,
          state: "unbooked",
          appointmentTime: ""
        })
        .then(function (response) {
          context.dispath("fetchTodos");
        })
        .catch(function (error) {
          console.log(error.response);
        });
    },

    fetchTodos(context) {
      const url = "http://localhost:8081/expressDelivery";
      //get
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
