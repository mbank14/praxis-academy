<template>
  <div>
    <input type="text" name="" id="" v-model="newTasks">
    <button @click="postData">submit</button>
    <ol >

      <li v-for="list in task" :key="list.id">
        {{list.title}} {{list.id}}
      <button @click="delData(list)">ثشسي</button>
      <button @click="postData">تلاي</button>
      <button @click="postData">صثسيب</button>
      </li>
    </ol>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      task: [],
      newTasks: ""
    }
  },
  mounted() {
     this.getData()
  },
  methods: {
    delData: async function(list){
      await axios.delete('http://192.168.1.44:3000/task/delete/' + list.id)
      this.getData();
    },
    postData: async function(){
      // const payload = {
      //   title: this.newTasks
      // }

      await axios.post('http://192.168.1.44:3000/task/add', { title: this.newTasks })
      this.getData();
        
    },
    getData: async function() {
      
      const response = await axios.get('http://192.168.1.44:3000/tasks')
      const data = await response.data;
      this.task = data;
      console.log(this.task)
      // .then(response => console.log(response));
      
      
    }
  },
}
</script>