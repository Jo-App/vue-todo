import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetchData() {
    var arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          let item = localStorage.key(i);
          arr.push(item);
        }
      }
    }
    return arr;
  }
}

export default new Vuex.Store({
  state: {
    items: storage.fetchData() || []
  },
  getters: {
    todoList(state) {
        return state.items;
    }
  },
  mutations: {
    addTodoItems(state, value) {
      //데이터 저장소에 저장
      localStorage.setItem(value, value);
      //할일 목록에 데이터 추가
      state.items.push(value);
    },
    removeTodoItem(state, {item, index}) {
      //데이터 저장소에서 삭제
      localStorage.removeItem(item);
      //할 일 목록에서 삭제
      state.items.splice(index, 1);
    },
    clearAll(state) {
      localStorage.clear();
      state.items = [];
    }
  }

})
