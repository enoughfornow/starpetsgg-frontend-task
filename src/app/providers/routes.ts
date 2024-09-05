import { createRouter, createWebHistory } from 'vue-router'
import { UILayout } from '@/ui'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../../pages/home/PHome.vue'),
        meta: {
            layout: UILayout
        }
    },
    {
        path: '/convert',
        name: 'convert',
        component: () => import('../../pages/convert/PConvert.vue'),
        meta: {
            layout: UILayout
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../../pages/not-found/PNotFound.vue'),
        meta: {
            layout: UILayout
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router