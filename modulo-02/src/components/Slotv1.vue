<script setup>
import Ej02 from './Ej02.vue';
</script>

<template>
  <div class="button-container">
    <div class="slot-cabecera">
      <slot name="cabecera">Contenido por defecto del slot Cabecera</slot>
    </div>
    
    <div class="slot-default">
      <slot>Contenido por defecto del slot por defecto</slot>
    </div>
    
    <div class="slot-pie">
      <slot name="pie">Contenido por defecto del slot Pie</slot>
    </div>
    
    <div class="slot-debug">
      <slot name="debug">Contenido por defecto del slot Debug</slot>
    </div>
    
    <div class="slot-vacio">
      <slot name="vacio">Contenido por defecto del slot Vacio</slot>
    </div>

    <Ej02></Ej02>

</div>
</template>

<style scoped>
.button-container {
  display: grid;
  place-items: center;
  margin-top: 10px;
  width: 100%;
}

.action-button {
  width: 100%;
  background-color: bisque;
  color: #333;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s;
}

.action-button:hover {
  background-color: #e3c9a8;
  transform: scale(1.05);
}

.slot-cabecera {
  width: 100%;
  text-align: center;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 6px;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.slot-default {
  width: 100%;
  text-align: center;
  background-color: #eaf7ff;
  padding: 10px;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 10px;
  border: 1px solid #bde4f2;
}

.slot-pie {
  width: 100%;
  text-align: center;
  background-color: #f9f3d7;
  padding: 10px;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 10px;
}

.slot-debug {
  width: 100%;
  text-align: center;
  background-color: #fbe9e7;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #d9534f;
  border: 1px solid #f5c6cb;
  margin-bottom: 10px;
}

.slot-vacio {
  width: 100%;
  text-align: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 10px;
  border: 1px dashed #ccc;
}

.debug-log {
  margin-top: 15px;
  width: 100%;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.debug-message {
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
}
</style>
