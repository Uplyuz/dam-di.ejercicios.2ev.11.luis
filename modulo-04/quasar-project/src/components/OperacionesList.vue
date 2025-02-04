<template>
<q-page>
    <q-card>
        <q-card-section class="text-h3">Operaciones</q-card-section>
    <q-card-separator></q-card-separator>
    <q-card-actions>
        <q-btn @click="contadorStore.fetchCounters">Refrescar datos</q-btn>
        <q-btn @click="contadorStore.deleteAllCounters">Borrar todo({{ total }})</q-btn>

    </q-card-actions>
    </q-card>
</q-page>
</template>

<script setup>
import{computed} from 'vue'
import {useContadorStore} from 'stores/contadorStore.js'
const contadorStore= useContadorStore()

/*const refrescar=()=>{
  contadorStore.fetchCounters(); 
}

const borrarTodo=()=>{
    contadorStore.deleteAllCounters()
}*/

const total=computed(()=>{
 return contadorStore.contadores.length
})

</script>