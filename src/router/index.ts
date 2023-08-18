import { createRouter, createWebHistory } from 'vue-router'

import routes from '@/router/routes'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

router.beforeEach((to): void => {
    if (to.meta.title) document.title = `${to.meta.title} | OikMC`
})

export default router
