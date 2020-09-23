export default {
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
  },
  checkTodoItem(state, payload) {
    state.todoList.map(data => {
      if(data.id == payload.id){
        data.status = !data.status;
      }
    })
  }
}