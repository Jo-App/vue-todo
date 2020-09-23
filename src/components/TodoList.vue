<template>
  <div>
    {{todoList}}
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Title</th>
              <th class="text-left">Content</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in todoList" :key="item.id"
              @click="checkTodoItem(item.id)"
            >
              <td :class="{ active: item.status }">{{ item.title }}</td>
              <td :class="{ active: item.status }">{{ item.content }}</td>
              <td></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import _ from "lodash";

export default {
  computed: _.extend(
    mapState(["todoList"])
  ),
  data: () => ({
    headers: [
      { text: '제목', value: 'title' },
      { text: '내용', value: 'content' },
      { text: '', value: 'actions', sortable: false },
    ],
    selected: [],
    isActive: true
  }),
  methods : {
    checkTodoItem(id) {
      this.$store.commit("checkTodoItem", { id });
    },
    removeItem: function(item, index){
      //this.$emit('delete:item', item, index);
      //var obj = { item, index };
      this.$store.commit('removeTodoItem', { item, index });
    },
  },

  beforeMount: function() {
    console.log("befor Mount");
    // var p1 = document.querySelector('#p1');
    // console.log(p1);
  },

  //화면에 인스턴스가 붙고 난 직후
  mounted: function() {
    console.log("mounted");
    // var p1 = document.querySelector('#p1');
    // console.log(p1);
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.active {
  text-decoration:line-through;
}
</style>