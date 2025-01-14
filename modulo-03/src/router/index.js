import { createRouter, createWebHistory } from 'vue-router';
import V1 from '@/components/V1.vue';
import V2 from '@/components/V2.vue';
import V3 from '@/components/V3.vue';
import V4 from '@/components/V4.vue';
import Seguridad from '@/components/Seguridad.vue';

const routes = [
  { path: '/AP02V1', component: V1 },
  { path: '/AP02V2', component: V2 },  
  { path: '/AP02V3', component: V3 },
  { path: '/AP02V4', component: V4 },
  { path: '/AP06', component: Seguridad },
];




const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
