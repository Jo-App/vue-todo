import Common from './../utils/common.js';

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
  },
//   $.ObjectInitialize = function (obj, deep) {
//     let self = this;
//     self.obj = obj;
//     $.each(obj, function (item_name, item) {
//         let datatype = $.type(item);
//         if (datatype == "number")
//             self.obj[item_name] = 0;   // 정수는 0 으로 초기화
//         else if (datatype == "string")
//             self.obj[item_name] = '';   // 문자는 '' 으로 초기화
//         else if (datatype == "boolean")
//             self.obj[item_name] = false;   // boolean 는 false 으로 초기화
//         else if (datatype == "array")
//             self.obj[item_name] = [];   // 배열은 [] 으로 초기화
//         else if (datatype == "object") {
//             if (deep)   // deep 적용 : object 를 다시 $.ObjectInitialize 를 호출하여 초기화 한다.
//                 $.ObjectInitialize(self.obj[item_name]);
//             else
//                 self.obj[item_name] = {};   // object는  {} 으로 초기화
//         }
//     });
// } tthis
  reset(state, payload) {
    Common.nullify(state.getCode)
  },
}