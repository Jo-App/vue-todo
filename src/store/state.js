const menuState = {
  todoList: [
    {
      id:1,
      title: "달리기",
      content: "10km 뛰기",
      status: false
    },
    {
      id:2,
      title: "자전거 타기",
      content: "ㅇㅇ",
      status: true
    },
    {
      id:3,
      title: "공부하기",
      content: "자바스크립트 공부",
      status: false
    },
  ],
  //코드 
  getCode: {
    content: {
      No: 10,
      CodeId: 'test',
      CodeName: 'tttt',
      Description: 'aaaaa',
      UpCodeNo: {
        No: 111,
        CodeId: 'dddd',
        CodeName: 'bbbb',
        Description: 'aaaaa',
      },
      CreatedDate: 'aaaaa',
    },
    contents: [1,2,3,4,5,6],
    resultsList: [1,1,1,1,1,1],
    totalcount: [],
    modalView : false,
    num: 1111,
    mode: 'ddddddd',
  },
  getCode2: {
    contents: [1,2,3,4,5,6],
    resultsList: [1,1,1,1,1,1],
    totalcount: [],
          content: {
            No: 10,
            CodeId: 'test',
            CodeName: 'tttt',
            Description: 'aaaaa',
            UpCodeNo: {
              No: 111,
              CodeId: 'dddd',
              CodeName: 'bbbb',
              Description: 'aaaaa',
            },
            CreatedDate: 'aaaaa',
          },
    modalView : false,
    mode: '',
  },
}
  
export default menuState;