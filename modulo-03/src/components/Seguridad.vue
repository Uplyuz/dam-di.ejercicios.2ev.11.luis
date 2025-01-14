<template>
    <div class="seguridad-container">
      <div class="actions">
        <button  @click="seguridadStore.login">Iniciar sesión</button>
        <button  @click="seguridadStore.logout">Cerrar sesión</button>
      </div>
      <div class="info"  v-if="seguridadStore.sesionIniciada">
        <p>Nombre del usuario: {{ seguridadStore.nombre }}</p>
        <p>Código del usuario: {{ seguridadStore.codigo }}</p>
        <p>Estado de sesión: {{ seguridadStore.sesionIniciada ? 'Sesión iniciada' : 'Sesión no iniciada' }}</p>
      </div>
      <div class="info"  v-else>
        <p>Nombre del usuario: -----</p>
        <p>Código del usuario: -----</p>
        <p>Estado de sesión: {{ seguridadStore.sesionIniciada ? 'Sesión iniciada' : 'Sesión no iniciada' }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useSeguridadStore } from '../stores/seguridad.js';
  
  const seguridadStore = useSeguridadStore();
  </script>
  
  <style scoped>
  .seguridad-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .actions {
    display: flex;
    gap: 1rem;
  }
  
  .actions button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .actions button:hover {
    background-color: #0056b3;
  }
  
  .info {
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: #ffffff;
  }
  
  .info p {
    font-size: 1rem;
    color: #333;
  }
  
  .info p:nth-child(3) {
    font-style: italic;
    color: #555;
  }
  </style>
  