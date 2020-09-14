
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

export default {
  items: storage.fetchData() || []
}