import { createRouter, createWebHistory } from 'vue-router'
import signin from '@/views/maps.vue'


const routes = [{
        path: '/',
        name: 'maps',
        component: maps
    },
   
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router