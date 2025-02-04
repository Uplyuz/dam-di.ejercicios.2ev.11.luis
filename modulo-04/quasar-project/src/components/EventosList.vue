<template>
    <q-page>
      <q-card>
        <q-card-section class="bg-grey-2">
          <div class="text-h5">Eventos en tiempo real</div>
        </q-card-section>
  
        <q-card-section>
          <q-table
            :rows="contadorStore.eventos"
            :columns="columns"
            row-key="id"
            :rows-per-page-options="[5, 10, 20]"
            no-data-label="No hay eventos registrados"
          />
        </q-card-section>
      <q-card-actions>
        <q-btn @click="simularInsert" label="Simular insert"></q-btn>
        <q-btn @click="limpiarEventos" label="Limpiar eventos"></q-btn>
      </q-card-actions>
      </q-card>
    </q-page>
  </template>
  
  <script setup>
import { useContadorStore } from 'stores/contadorStore';
  
  const contadorStore = useContadorStore();
  
  const columns = [
    { name: 'event_type', label: 'Tipo de evento', align: 'left', field: row => row.eventType },
    { name: 'table', label: 'Tabla', align: 'left', field: row => row.table },
    { name: 'id', label: 'ID', align: 'left', field: row => JSON.stringify(row.new.id) },
    { name: 'name', label: 'Nombre', align: 'left', field: row => JSON.stringify(row.new.nombre) },
    { name: 'valor', label: 'Valor', align: 'left', field: row => JSON.stringify(row.new.valor) },
    { name: 'timestamp', label: 'Fecha', align: 'left', field: row => new Date(row.commit_timestamp).toLocaleString() }
  ];
  
  const simularInsert=()=>{
        let nombre= "Contador nuevo simulado"
         let valor= 0
    contadorStore.simularInsert(nombre,valor)
}

const limpiarEventos=()=>{
    contadorStore.eventos=[]
}
  
  </script>
  