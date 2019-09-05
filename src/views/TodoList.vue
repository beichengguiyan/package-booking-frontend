<template>
  <ul class="items">
    <TodoListFilter />
    <Field />
    <template v-for="(item,index) in filteredTodoList">
      <li :key="index" :class="item.status">
        <a href class="wayBillNum">{{item.wayBillNum}}</a>
        <a href class="addressee">{{item.addressee}}</a>
        <a href class="telephone">{{item.telephone}}</a>
        <a href class="state">{{item.state}}</a>
        <a href class="appointmentTime">{{item.appointmentTime}}</a>
      </li>
    </template>
  </ul>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import TodoListFilter from "../views/TodoListFilter.vue";
import Field from "../views/Field.vue";

export default {
  name: "todo-list",
  components:{
      TodoListFilter,
      Field
  },
  computed: {
    filteredTodoList: function() {
      return this.$store.getters.filteredTodoList;
    }
  }
};
</script>

<style scoped>
</style>
