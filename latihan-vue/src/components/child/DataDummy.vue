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
            <tr v-for="data in dataku" :key="data.id">
                <td>{{ data.id }}</td>
                <td v-on:click="tampil">ini tittle {{ data.title}} :<br/>
                    <button v-on:click="sembunyi = !sembunyi">tombol</button>
                    <p v-if="!sembunyi">{{data.body}}</p>
                </td>
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
            tampilku: [],
            sembunyi: false,
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
        tampil: function(){
            return this.dataku.body.push(this.tampilku);
        },
    },
}
</script>
<style  scoped>

</style>