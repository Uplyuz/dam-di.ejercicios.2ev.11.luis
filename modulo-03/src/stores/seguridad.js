import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useSeguridadStore = defineStore('seguridad', () => {

 const nombre = ref('Luis')
 const codigo=ref('1234')
 const sesionIniciada=ref(false)
 
 function login() {
    if(sesionIniciada.value==false)
        { 
            sesionIniciada.value=true
            console.log('sesión iniciada')
        }else{
            console.log('La sesión ya está iniciada')
        }
 }
 function logout() {
    if(sesionIniciada.value==true)
        { 
            sesionIniciada.value=false
            console.log('sesión terminada')
        }else{
            console.log('La sesión no está iniciada')
        }
 }



 return { nombre, codigo, sesionIniciada,login, logout }
})




