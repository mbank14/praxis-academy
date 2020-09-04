<template>
<div >
   <header>
     <h1> Daftar Nama User : </h1>
   </header>
   <div >
     <ul v-for="user in users" :key="user.id" style="list-style: none">
         <li>
            <router-link :to="{ name: 'Dashboard', params: { id: user.id } }">
                {{ user.name }}
            </router-link>
        </li>
     </ul>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    this.getAllUser()
  },
  methods: {
    getAllUser() {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.users = response.data
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
