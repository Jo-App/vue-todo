<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-spacer></v-spacer>
      <v-col>
        <v-card style="padding:20px;" max-width="500">
          <v-text-field
            outlined
            v-model="inputTitle"
            label="제목"
          ></v-text-field>
          <v-textarea
            v-model="inputContent"
            outlined
            auto-grow
            label="내용"
            rows="4"
            row-height="40"
          ></v-textarea>
          <v-btn @click="addItem()">쓰기</v-btn>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import { oTodosinDB } from '@/datasources/firebase';

export default {
  data: () => ({
    inputTitle: "",
    inputContent: "",
  }),
  methods: {
    addItem() {
      // if (this.inputTitle !== "" && this.inputContent !== "") {
      //   this.$store.commit("addTodoItems", {
      //     inputTitle: this.inputTitle,
      //     inputContent: this.inputContent,
      //   });
      //   this.clearInput();
      // }

      if (this.inputTitle !== "" && this.inputContent !== "") {
        oTodosinDB.push({
          title: this.inputTitle,
          content: this.inputContent,
          status: true
        });
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
  float: right;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
