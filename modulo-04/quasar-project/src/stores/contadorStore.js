import { defineStore } from 'pinia';
import { createClient } from '@supabase/supabase-js';
import { ref } from 'vue';

const supabase = createClient(
  'https://tsgrcvmqlyczjihsgpyh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZ3Jjdm1xbHljemppaHNncHloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDg0MTEsImV4cCI6MjA1Mzk4NDQxMX0._2Xi2dytx-2EibnOeNG3-CHbgJycvY0fqGePKX4O3V8'
);

export const useContadorStore = defineStore('contadores', () => {
  const contadores = ref([]);
  const eventos = ref([]);

  async function fetchCounters() {
    const { data, error } = await supabase.from('CONTADOR').select('*');
    if (error) throw error;
    contadores.value = data;
    contadores.value.sort((a, b) => a.id - b.id);    
  }

  async function incrementCounter(id) {
    const contador = contadores.value.find((contador) => contador.id === id);
    if (contador) {
      await supabase
        .from('CONTADOR')
        .update({ valor: contador.valor + 1 })
        .eq('id', id);
      fetchCounters();
    }
  }

  async function decrementCounter(id) {
    const contador = contadores.value.find((contador) => contador.id === id);
    if (contador) {
      await supabase
        .from('CONTADOR')
        .update({ valor: contador.valor - 1 })
        .eq('id', id);
      fetchCounters();
    }
  }

  async function deleteCounter(id) {
    await supabase.from('CONTADOR').delete().eq('id', id);
    fetchCounters();
  }

  async function deleteAllCounters() {
    contadores.value.forEach(contador => {
      deleteCounter(contador.id)
      
    });
  }

  function subscribeToChanges() {
    supabase
      .channel('contador_channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'CONTADOR' }, gestionarEventos)
      .subscribe();
  }

  const gestionarEventos = (payload) => {
    console.log('Nuevo cambio insertado:', payload);
    eventos.value.push(payload); 
    fetchCounters();  
  };

  async function simularInsert(nombre,valor){
    const contador={
      nombre:nombre,
      valor:valor
    }

    const {data,error}=await supabase
    .from('CONTADOR')
    .insert([contador])

    if (error) {
      console.error('Error al agregar contador:', error);
    } else {
      console.log('Nuevo contador insertado:', data);
      fetchCounters(); 
    }
  }
  return {
    contadores,
    eventos,
    fetchCounters,
    incrementCounter,
    decrementCounter,
    deleteCounter,
    deleteAllCounters,
    subscribeToChanges,
    simularInsert
  };
});
