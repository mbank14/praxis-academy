<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <comoponent-satu v-bind:binatang="animal" v-bind:namaku="name">
    </comoponent-satu>
    <ol >
      <li v-for="key in animal" :key="key">{{key}}</li>
    </ol>
    <component-dua></component-dua>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ComoponentSatu from './components/ComoponentSatu.vue'
import ComponentDua from './components/ComponentDua.vue'

export default {
  name: 'App',
  data: function(){
    return{
      animal: ['macan', 'kumbang', 'singa'],
      name: 'Macan',
    }
  },
  components: {
    ComoponentSatu, 
    ComponentDua,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
