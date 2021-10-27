import {createRouter, createWebHistory } from 'vue-router';

import NotFound from '@/components/layout/NotFound.vue';
import Inicio from '@/components/Inicio.vue'

var routes = [
{path: '/', component:Inicio},
{ path: "/:notFound(.*)", component: NotFound },
];

const router  = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
});


export default router;