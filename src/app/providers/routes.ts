import { createRouter, createWebHistory } from 'vue-router'
import { UILayout } from '@/ui'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../../pages/home'),
        meta: {
            layout: UILayout
        }
    },
    {
        path: '/convert',
        name: 'convert',
        component: () => import('../../pages/convert')
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('../../pages/not-found'),
        meta: {
            layout: UILayout
        },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router