<template>
  <v-row align="center">
    <v-spacer></v-spacer>
    <v-col cols="2" sm="2" md="2">
      <v-text-field
        outlined
        v-model="inputTitle"
        label="제목"
      ></v-text-field>
    </v-col>
    <v-col cols="2" sm="2" md="2">
      <v-text-field
        outlined
        v-model="inputContent"
        label="내용"
        append-outer-icon="mdi-plus"
        @click:append-outer="addItem()"
        @keyup.enter="addItem()"
      ></v-text-field>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    inputTitle: "",
    inputContent: "",
  }),
  methods: {
    addItem() {
      if (this.inputTitle !== "" && this.inputContent !== "") {
        this.$store.commit('addTodoItems', { inputTitle: this.inputTitle, inputContent: this.inputContent });
        this.clearInput();
      }
    },
    clearInput() {
      this.inputTitle = "";
      this.inputContent = "";
    },
  },
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
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  float:right;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn{
  color : #42b983;
}
</style>
