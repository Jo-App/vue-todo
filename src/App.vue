<template>
  <!-- HTML -->
  <div>
    <todo-header></todo-header>
    <!-- <todo-input v-on:하위컴포넌트에서 올려준 이벤트 이름="상위컴포넌트의 메서드 이름"></todo-input> -->
    <todo-input v-on:add:item="addTodoItems"></todo-input>
    <!-- <todo-list v-bind:프롭스 이름 ="상위 컴포넌트의 데이터 이름"></todo-list> -->
    <!-- 프롭스 데이터 던져주기 -->
    <todo-list 
      v-bind:propsdata="items"
      v-on:delete:item="removeTodoItem"></todo-list>
    <todo-footer
      v-on:deleteAll:item="clearAll"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  // 인스턴스 옵션 & 컴포넌트 속성들이 들어가는 곳
  components: {
    // '컴포넌트 이름': 컴포넌트 내용,
    "todo-header": TodoHeader,
    "todo-input": TodoInput,
    "todo-list": TodoList,
    "todo-footer": TodoFooter
  },

  data: function() {
    return {
      items: []
    };
  },

  //저장소에서 데이터 불러오기
  //화면에 붙기 전
  created: function() {
    console.log("created");
    // var vm = this;
    // axios.get('products')
    // .then(function(response){
    //   vm.items = response.data;
    // })

    var arr = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          var item = localStorage.key(i);
          this.items.push(item);
        }
      }
    }

    console.log(arr);
  },
  methods: {
    addTodoItems: function(value) {
      //데이터 저장소에 저장
      localStorage.setItem(value, value);
      //할일 목록에 데이터 추가
      this.items.push(value);
    },
    removeTodoItem: function(item, index) {
      //데이터 저장소에서 삭제
      localStorage.removeItem(item);
      //할 일 목록에서 삭제
      this.items.splice(index, 1);
    },
    clearAll: function(){
      localStorage.clear();
      this.items = [];
    }

  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>