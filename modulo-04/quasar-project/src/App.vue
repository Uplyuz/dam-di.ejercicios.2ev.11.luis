<template>
  <router-view />
</template>

<script setup>
import {onMounted} from 'vue'
import {useContadorStore} from 'stores/contadorStore.js'

const contadorStore= useContadorStore()
onMounted(() => {
  contadorStore.fetchCounters(); 
  contadorStore.subscribeToChanges()
});
</script>
