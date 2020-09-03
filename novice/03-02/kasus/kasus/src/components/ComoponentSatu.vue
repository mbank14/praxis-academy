<template>
    <div>
      <form id="search">
        Search <input name="query" v-model="searchQuery" />
      </form>
      <satu-child
        :heroes="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery"
        
      >
      
      </satu-child>
      <p>{{namaku}}</p>
      <ol>
        <li v-for="index in binatang" :key="index">{{index}}</li>
      </ol>
    </div>
</template>
<script>

import SatuChild from './SatuChild.vue';

export default {
    name: 'ComoponentSatu',
    components: {
        SatuChild,
    },
    props: {
      namaku: String,
      binatang: Array,
    },
    data:function (){
      return{
          searchQuery: "",
          gridColumns: ["name", "power"],
          gridData: [
            { name: "Chuck Norris", power: Infinity },
            { name: "Bruce Lee", power: 9000 },
            { name: "Jackie Chan", power: 7000 },
            { name: "Jet Li", power: 8000 }
          ]
         }
        }

}
</script>