<template>
    <div>
        <h1>ini dash</h1>
        <h2>{{ ViewComponent }}</h2>
        <h2> Data user dengan nama : {{ user.name }} </h2>
            <ul>
                <li> Username : {{ user.username }} </li>
                <li> Email : {{ user.email }} </li>
            </ul>
            <!-- <router-link to="/"> Back </router-link> -->
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
      return {
          user: []
      }
  },
  created() {
      this.getUser()
  },
  methods: {
      getUser() {
          axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
          .then((response) => {
            this.user = response.data
          })
          .catch((err) => {
            console.log(err)     
          })
      }
  },
    computed: {
        ViewComponent () {
            return this.$route.params.id;
        }
  },
}
</script>