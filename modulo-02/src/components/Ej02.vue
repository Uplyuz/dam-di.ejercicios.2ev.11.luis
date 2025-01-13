<script setup>
import { ref } from 'vue';
import {onMounted,onUnmounted,onBeforeUpdate} from 'vue';

const disparador = ref("disparar");
const debug = ref([]);

const date = () => {
  disparador.value = Date.now();
};

onMounted(()=>{
    debug.value.push("onMounted detectado")
});
onUnmounted(()=>{
    debug.value.push("onUnmounted detectado")
});
onBeforeUpdate(()=>{
    debug.value.push("onBeforeUpdate detectado")
});


</script>

<template>
  <div class="button-container">
    <button @click="date" class="action-button">
      <span>DISPARAR</span>
      <h5>{{ disparador }}</h5>
    </button>
  </div>
    <h6 v-for="(mensajeDebug, index) in debug" :key="index" class="debug-message">
        {{ index }} MSG: {{ mensajeDebug }}
    </h6>
</template>

<style scoped>
/* Contenedor del botón */
.button-container {
  display: grid;
  place-items: center;
  margin-top: 10px;
  width: 100%;
}

/* Botón */
.action-button {
  width: 100%; /* Ocupa todo el ancho del contenedor */
  background-color: bisque;
  color: #333;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.debug-message {
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  font-size: 1rem;
  color: #333;
  font-style: normal;
}
</style>
