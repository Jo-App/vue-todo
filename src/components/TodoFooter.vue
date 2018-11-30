<template>
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
</template>

<script>
export default {
    methods:{
        clearTodo(){
            //localStorage.clear();
            this.$emit('removeAll');
        }
    }

}
</script>

<style>
</style>