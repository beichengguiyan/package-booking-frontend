<template>
  <div class="home">
   <HelloWorld />
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TodoList from "../views/TodoList.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    TodoList
  }
};
</script>
