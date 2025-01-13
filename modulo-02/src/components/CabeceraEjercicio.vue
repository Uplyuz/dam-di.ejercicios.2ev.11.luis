<template>
    <div class="slot-container">
      <div class="default-slot">
        <slot>
          <p>Mensaje por defecto del slot por defecto</p>
        </slot>
      </div>
      <div class="named-slot">
        <slot name="descripcion">
          <p>Mensaje por defecto slot con nombre</p>
        </slot>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .slot-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .default-slot,
  .named-slot {
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: #ffffff;
  }
  
  .default-slot p {
    font-size: 1rem;
    color: #333;
  }
  
  .named-slot p {
    font-size: 0.9rem;
    color: #555;
    font-style: italic;
  }
  </style>
  