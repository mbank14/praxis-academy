<template>
    <div>
       <section>
           <h1>ini latihan kasus</h1>
           <data-dummy></data-dummy>
        </section> 
    </div>
</template>
<script>
import DataDummy from './child/DataDummy.vue';

export default {
    name: 'Header',
    components: {
        DataDummy,
    },
    data: function () {
        return{

        }
    }
}
</script>
<style>
    
</style>