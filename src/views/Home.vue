<template>
  <div class="home">
    <HelloWorld />
    <TodoListFilter />
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TodoList from "../views/TodoList.vue";
import TodoListFilter from "../views/TodoListFilter.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    TodoList,
    TodoListFilter,
  }
};
</script>
