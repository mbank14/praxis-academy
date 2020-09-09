<template>
  <v-container fluid>
    <v-breadcrumbs
      :items="items"
      divider="-"
    ></v-breadcrumbs>
      <v-row justify="space-around">
      <v-col cols="8">
        <div class="title mb-1">Default (cover)</div>
        <div class="subheading">Matching</div>
        <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
      </v-col>
      </v-row>
      <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: function() {
    return{
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'about',
          disabled: false,
          href: 'lop',
          
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }},
};
</script>

