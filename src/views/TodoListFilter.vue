<template>
    <div class="filter">
        <a>菜鸟驿站</a>
        <a-button @click.prevent="handleFilter('all')" :class="{active:currentFilter=='all'}">ALL</a-button>
        <a-button @click.prevent="handleFilter('appointmented')" :class="{active:currentFilter=='appointmented'}">已预约</a-button>
        <a-button @click.prevent="handleFilter('picked')" :class="{active:currentFilter=='picked'}">已取件</a-button>
        <a-button @click.prevent="handleFilter('unbooked')" :class="{active:currentFilter=='unbooked'}">未预约</a-button>
    </div>
</template>

<script>
    import {mapState, mapMutations} from "vuex";

    export default {
        name: "todo-list-filter",
        computed: {
            currentFilter: function () {
                return this.$store.state.currentFilter;
            }
        },
        methods: {
            handleFilter: function (currentFilter) {
                // this.$store.state.currentFilter = currentFilter;
                this.$store.commit("changeFilter", currentFilter);
            }
        }
    }
</script>

<style scoped>

</style>
