<template>
    <div>
        <h1>ini coba admin</h1>
        <router-link to="/admin/dashboard/:id">Dashboard</router-link> |
        <router-link to="/admin/log">LOG</router-link> |
        <router-link to="/">Home</router-link> |
    <div> 
        <br/>
        <br/>
        <br/>
        <router-view></router-view>  
    </div>
    </div>
</template>
<script>
export default {
   
}
</script>