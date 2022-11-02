<template>
    <div class="menu">
     <div class="hamburger-menu" @click="isActive = !isActive">
       <div class="bar" :class="{animate: isActive}">
     </div>
    </div>
     <ul class="menu-list" v-if="isActive">
        <div class="list-wrap">
         <li><a>Главное</a></li>
         <li><a>Главное</a></li>
         <li><a>Главное</a></li>
    </div>
     </ul>
   </div>
</template>
<script>
export default {
  data () {
    return {
        
    }
  }
  }
    
</script>
<style scoped>
.menu{
        display: none;
    margin-left: 24px;
    }
</style>