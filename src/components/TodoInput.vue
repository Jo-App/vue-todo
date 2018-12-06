<template>
  <div class="inputBox shadow">
    <input type="text" v-model="inputText" v-on:keyup.enter="enterText">
    
    <span v-on:click="addItem" class="addContainer">
      <i class="fas fa-plus"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      inputText: ""
    };
  },
  methods: {
    addItem: function() {
      if (this.inputText !== "") {
        console.log("clicked");
        var value = this.inputText;
        //localStorage.setItem(value, value);
        this.$emit('add:item', value);
        this.clearInput();
      }
    },
    clearInput: function() {
      this.inputText = "";
    },
    enterText: function() {
      this.addItem();
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>