export default {
  addTodoItems(state, payload) {
    let inputTitle = payload.inputTitle;
    let inputContent = payload.inputContent;

    let obj = new Object();
    obj.id = state.todoList[state.todoList.length-1] == undefined ? 0 : state.todoList[state.todoList.length-1].id + 1;
    obj.title = inputTitle;
    obj.content = inputContent;
    obj.status = false;

    state.todoList.push(obj);
  },
  removeTodoItem(state, payload) {
    state.todoList.map((data, index) => {
      if(data.id == payload.id){
        state.todoList.splice(index, 1);
      }
    })
  },
  checkTodoItem(state, payload) {
    state.todoList.map(data => {
      if(data.id == payload.id){
        data.status = !data.status;
      }
    })
  }
}