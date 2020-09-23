<template>
  <v-row align="center">
    <v-spacer></v-spacer>
    <v-col cols="6" sm="6" md="6">
    <!-- {{todoList}} -->
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
              :class="{ active: item.status }"
            >
              <td>{{ item.title }}</td>
              <td>{{ item.content }}</td>
              <td>
                <v-icon @click="removeItem($event, item.id)" style="color:red;">mdi-delete</v-icon>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import _ from "lodash";

export default {
  computed: _.extend(
    mapState(["todoList"])
  ),
  data: () => ({
    selected: [],
    isActive: true
  }),
  methods : {
    checkTodoItem(id) {
      console.log("ck")
      this.$store.commit("checkTodoItem", { id });
    },
    removeItem(e, id) {
      console.log("rmv")
      e.stopPropagation(); //이벤트 전파 방지
      this.$store.commit('removeTodoItem', { id });
    },
  },
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
  background-color: rgb(167, 213, 60);
}

.active2{
  background-color: rgb(167, 213, 60);
}
</style>