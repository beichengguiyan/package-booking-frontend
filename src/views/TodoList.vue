<template>
  <a-table :columns="columns" :dataSource="data">
    <span slot="action" slot-scope="text, record">
      <a-button href="javascript:;">Invite{{record.name}}</a-button>
    </span>
  </a-table>
</template>


<script>
import { mapState, mapMutations } from "vuex";
import store from '../store'
const columns = [
  { title: "订单号", dataIndex: "wayBillNum" },
  { title: "收件人", dataIndex: "addressee" },
  { title: "电话", dataIndex: "telephone" },
  { title: "状态", dataIndex: "state" },
  { title: "预约时间", dataIndex: "appointmentTime" },
  { title: "", key: "action", scopedSlots: { customRender: "action" } }
];

console.log(22,store.state.TodoList);
const data = store.getters.filteredTodoList;
// this.$store.getters.filteredTodoList

export default {
  name: "todo-list",
  components: {},
  data() {
    return {
      data,
      columns
    };
  }
};
</script>