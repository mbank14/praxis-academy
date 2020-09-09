<template>
  <div>
    <h1>ini adalah 3</h1>
    <div class="counter">{{ counter }}</div>
    <button @click="increment" class="increment">Tambah</button>
    <button @click="decrement" class="decrement">Kurangi</button>
  </div>
</template>
<script>
export default {
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  },
  computed: {
    counter() {
      return this.$store.getters.getCounter;
    }
  }
};
</script>
