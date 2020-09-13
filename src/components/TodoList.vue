<template>
  <div>
    <ul>
      <li class="shadow" v-for="(item, index) in todoList" :key="index">
        {{ item }}
        <span class="removeBtn" @click="removeItem(item, index)">
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed : {
    // ...mapGetters({
    //   todoList : todoList,
    // }),
    ...mapGetters(['todoList'])
  },
  methods : {
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
</style>