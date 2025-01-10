import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Quiensoy from '../views/Quiensoy.vue'
import Proyectos from '../views/Proyectos.vue'
import Contacto from '../views/Contacto.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/quiensoy',
      name: 'Quiensoy',
      component: Quiensoy
    },
    {
      path: '/proyectos',
      name: 'Proyectos',
      component: Proyectos
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    }
  ]
})

export default router