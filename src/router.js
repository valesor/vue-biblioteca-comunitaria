import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Libros from './views/Libros.vue';
import Sumate from './views/Sumate.vue';
import Actividades from './views/Actividades.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/libros', name: 'Libros', component: Libros },
  { path: '/sumate', name: 'Sumate', component: Sumate },
  { path: '/actividades', name: 'Actividades', component: Actividades },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
