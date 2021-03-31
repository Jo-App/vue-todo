<template>
  <v-container>
    {{todoList}}
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
          <v-icon @click="removeItem($event, item['.key'])" style="color:red;">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { oTodosinDB } from '@/datasources/firebase';
import { mapState } from "vuex";
import _ from "lodash";

export default {
  computed: _.extend(
    //mapState(["todoList"])
  ),
  data: () => ({
    selected: [],
    isActive: true,
    headers: [
      { text: 'Title', value: 'title' },
      { text: 'Content', value: 'content' },
      { text: '', value: 'action' },
    ],
    todoList: [],
  }),
  firebase: {
    todoList: oTodosinDB
  },
  methods : {
    checkTodoItem(e) {
      let id = e['.key'];
      //console.log(e.status)
      oTodosinDB.child(id).update({
        status: !e.status
      })
      //this.$store.commit("checkTodoItem", { id });
    },
    removeItem(e, id) {
      // this.$store.commit('removeTodoItem', { id });
      e.stopPropagation(); //이벤트 전파 방지
      oTodosinDB.child(id).remove()
    },
    row_classes(item) {
      if(item.status){
        return "checkRow";
      }
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