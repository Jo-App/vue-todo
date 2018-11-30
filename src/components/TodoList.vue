<template>
   <section>
       <ul>
           <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
               {{ todoItem }}
               <span class="removeBtn" type="button" v-on:click="removeTodo(todoItem, index)">
                   <i class="fa fa-trash-o" aria-hidden="true"></i>
               </span>
           </li>
       </ul>
   </section>
</template>

<script>
export default {
    props: ['propsdata'],
 
    methods:{
        removeTodo(todoItem, index){
            //console.log(todoItem, index);
            console.log(this);
            
            //localStorage.removeItem(todoItem);
            //this.todoItems.splice(index, 1);

            this.$emit('removeTodo2', todoItem, index);
        }
    }

}
</script>

<style>
</style>