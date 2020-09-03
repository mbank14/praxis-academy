<template>
    <div>
        <h3>Ini untuk data dummy</h3>
        <table >
            <thead>
            <tr>
                <th>TITLE</th>
                <th>KONTEN</th>
               
            </tr>
            </thead>
            <tbody>
            <tr v-for="data in dataku" :key="data">
                <td>{{ data.id }}</td>
                <td>{{ data.body}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'DataDummy',
    data: function(){
        return{
            dataku: [],
        }
    },
    beforeMount(){
    this.getDataDummy();
  },
    methods: {
        async getDataDummy(){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            this.dataku = data;
        },
    },
}
</script>
<style  scoped>

</style>