<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo2="addTodo2"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeTodo2="removeTodo2"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {

  data(){
    return {
      todoItems: []
    }
  },
  //인스턴스 생성됐을때
  created() {
      if (localStorage.length > 0){
        for(var i=0; i<localStorage.length; i++){
            this.todoItems.push(localStorage.key(i));
        }
     }
  },
 
  methods:{
    addTodo2(todoItem){
      //로컬 스토리지에 데이터를 추가하는 로직
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll(){
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo2(todoItem, index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }

}

</script>

<style>
</style>