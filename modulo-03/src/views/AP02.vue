<script setup>
import { RouterLink , RouterView} from 'vue-router';
</script>

<template>
  <nav class="nav-links">
    <RouterLink to="/AP02V1" style="color: blue">Vista-AP02-1</RouterLink>
    <RouterLink to="/AP02V2" style="color: grey">Vista-AP02-2</RouterLink>
    <RouterLink to="/AP02V3" style="color: orange">Vista-AP02-3</RouterLink>
    <RouterLink to="/AP02V4" style="color: green">Vista-AP02-4</RouterLink>
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
