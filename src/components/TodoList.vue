<template>
  <v-container>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="todoList"
        :items-per-page="5"
        :item-class= "row_classes"   
        class="elevation-1"
        hide-default-footer
        @click:row="checkTodoItem($event)"
      >
        <template v-slot:item.action="{ item }">
          <v-icon @click="removeItem($event, item.id)" style="color:red;">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-card>
    <v-btn @click="test()">초기화</v-btn>
    {{getCode}}
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import _ from "lodash";

export default {
  computed: _.extend(
    mapState(["todoList", "getCode"])
  ),
  data: () => ({
    selected: [],
    isActive: true,
    headers: [
      { text: 'Title', value: 'title' },
      { text: 'Content', value: 'content' },
      { text: '', value: 'action' },
    ],
  }),
  methods : {
    checkTodoItem(e) {
      let id = e.id;
      this.$store.commit("checkTodoItem", { id });
    },
    removeItem(e, id) {
      console.log("rmv")
      e.stopPropagation(); //이벤트 전파 방지
      this.$store.commit('removeTodoItem', { id });
    },
    row_classes(item) {
      if(item.status){
        return "checkRow";
      }
    },
    test(){
      this.$store.commit('reset');
    }
  },
};
</script>

<style>
.checkRow {
  text-decoration:line-through;
  background-color:rgb(167, 213, 60);
}
</style>