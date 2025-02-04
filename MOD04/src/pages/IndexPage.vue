<template>
  <q-page class="flex flex-center">

    <q-card>

      <q-card-section >
        <div class="q-pr-xl text-h3 text-orange">RELACIÓN DE CONTADORES EN FORMATO CARD</div>
        <q-separator></q-separator>      
      </q-card-section>
    
      <q-card-section class="row q-gutter-md">
        <q-card  style="width: 200px; " v-for="contador in contadores" :key="contador.id">
          <q-card-section class="bg-grey-7 text-white text-bold text-italic text-center">Contador</q-card-section>
          <q-card-section :class="{'seleccionado' : contador.seleccionado}"><pre>{{contador}} </pre></q-card-section>
          <q-separator></q-separator>

          <q-card-actions align="right">
            <q-btn @click="sumar(contador)" icon="add"  round size="sm" color="primary" ></q-btn>
            <q-btn @click="restar(contador)" icon="remove" round size="sm" color="positive"></q-btn>
            <q-btn @click="seleccionar(contador)" icon="settings" round size="sm" color="negative"></q-btn>
            <q-btn @click="borrar(contador)" icon="home" round size="sm" color="warning"></q-btn>
          </q-card-actions>
        </q-card>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const contadores=ref([
  {id:0,nombre: "Luis",valor: 0,seleccionado: true},
  {id:1,nombre: "Luis",valor: 0,seleccionado: true},
  {id:2,nombre: "Luis",valor: 0,seleccionado: true},
  {id:3,nombre: "Luis",valor: 0,seleccionado: true},
  {id:4,nombre: "Luis",valor: 0,seleccionado: true}
  ])

  const sumar=(cont)=>{
    console.log(cont)
    cont.valor++
    
  }
  const restar=(cont)=>{
    console.log(cont)
    cont.valor--
    
  }
  const seleccionar=(cont)=>{
    console.log(cont)
    cont.seleccionado = !cont.seleccionado
    
  }

  const borrar=(cont)=>{
    console.log(cont)

    const idx= contadores.value.findIndex((v)=>{
      return v.id==cont.id
    })

    contadores.value.splice(idx,1)
  }


</script>
<style scoped lang="scss">
 .seleccionado{
   background-color: $primary;
 }
</style>