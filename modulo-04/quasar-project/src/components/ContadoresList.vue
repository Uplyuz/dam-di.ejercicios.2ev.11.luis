<template>
<q-page class="flex flex-center">

<q-card>

  <q-card-section >
    <div class="q-pr-xl text-h3 text-orange">Contadores</div>
    <q-separator></q-separator>      
  </q-card-section>

  <q-card-section class="row q-gutter-md">
    <q-card  style="width: 200px; " v-for="contador in contadorStore.contadores" :key="contador.id">
      <q-card-section class="bg-grey-7 text-white text-bold text-italic text-center">Contador</q-card-section>
      <q-card-section>ID: {{contador.id}} Nombre: {{ contador.nombre }}</q-card-section>
      <q-card-section>Valor: {{ contador.valor }}</q-card-section>

      <q-separator></q-separator>

      <q-card-actions align="right">
        <q-btn @click="sumar(contador)" icon="add"  round size="sm" color="primary" ></q-btn>
        <q-btn @click="restar(contador)" icon="remove" round size="sm" color="positive"></q-btn>
        <q-btn @click="borrar(contador)" icon="settings" round size="sm" color="negative"></q-btn>
      </q-card-actions>
    </q-card>

         

  </q-card-section>

</q-card>

</q-page>

</template>

<script setup>
import {useContadorStore} from 'stores/contadorStore.js'

const contadorStore= useContadorStore()


const sumar = (contador) => {
  contadorStore.incrementCounter(contador.id); // Incrementa el contador
}

const restar = (contador) => {
  contadorStore.decrementCounter(contador.id); // Decrementa el contador
}

const borrar = (contador) => {
  contadorStore.deleteCounter(contador.id); // Elimina el contador
}

</script>