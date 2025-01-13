<script setup>
import CabeceraEjercicio from '@/components/CabeceraEjercicio.vue';
import Ej02 from '@/components/Ej02.vue';
import Slotv1 from '@/components/Slotv1.vue';
</script>

<template>

<CabeceraEjercicio>
  <h1>Ejercicio 2</h1>
</CabeceraEjercicio>
<Ej02></Ej02>

<CabeceraEjercicio>
  <h1>Ejericio 3</h1>
</CabeceraEjercicio>
<Slotv1>
  <template #cabecera>
    Cabecera inyectada
  </template>
  Cuerpo inyectado
  <template #pie>
    Pie inyectada
  </template>
</Slotv1>


</template>

<style scoped>

</style>
