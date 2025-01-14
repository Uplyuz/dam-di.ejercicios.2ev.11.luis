<script setup>
import { RouterLink , RouterView} from 'vue-router';
</script>

<template>
  <nav class="nav-links">
   
    <RouterLink to="/AP06" style="color: green">Vista-AP06</RouterLink>
  </nav>

  

  <RouterView/>
</template>

<style scoped>
.nav-links {
  display: flex;
  flex-direction: row;
  gap: 10px; /* Espaciado entre los enlaces */
  padding: 20px;
}

</style>
