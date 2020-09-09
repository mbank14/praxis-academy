<template>
  <div>
    <h1>ini untuk 54</h1>
    <p>{{ kosong }}</p>
  </div>
</template>
<script>
export default {
    name: "user",
    data() {
        return {
            kosong: ''
        }
    },
    mouncreatedted() {
        // this.kosong = this.$store.getters.getCoba;
        this.kosong= this.$store.dispatch("iniCobaSet")
    },
}
</script>
