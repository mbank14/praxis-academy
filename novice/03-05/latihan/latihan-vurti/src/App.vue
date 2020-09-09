<template>
  <v-app>
   <router-link to="/about">about</router-link>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>

</template>

<script>
// import About from './views/About'
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
