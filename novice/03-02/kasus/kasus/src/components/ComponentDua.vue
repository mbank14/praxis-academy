<template>
    <div>
        <button id="show-modal" @click="showModal = true">Show Modal</button>
      <!-- use the modal component, pass in the prop -->
      <child-dua v-if="showModal" @close="showModal = false">
      you can use custom content here to overwrite
      default content
      
    -->
    
        <h3 slot="header">inin</h3>
      </child-dua>
    </div>
</template>
<script>
import ChildDua from './ChildDua.vue'

export default {
    name: 'ComponentDua',
    components:{
        ChildDua,
    },
    data: function(){
        return{
          showModal: false
        }
    }
}
</script>