import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const navRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        components: {
            default: HomeView
        },
        meta: {
            title: '茵蒂克丝'
        }
    },
    {
        path: '/server',
        name: 'server',
        components: {
            default: () => import('../views/ServerView.vue')
        },
        meta: {
            title: '服务器看板'
        }
    },
    {
        path: '/news',
        name: 'news',
        components: {
            default: () => import('../views/NewsView.vue')
        },
        meta: {
            title: '公告栏'
        }
    },
    {
        path: '/exhibit',
        name: 'exhibit',
        components: {
            default: () => import('../views/ExhibitView.vue')
        },
        meta: {
            title: '展览馆'
        }
    },
    {
        path: '/banlist',
        name: 'banlist',
        components: {
            default: () => import('../views/BanlistView.vue')
        },
        meta: {
            title: '小黑屋'
        }
    },
    {
        path: '/about',
        name: 'about',
        components: {
            default: () => import('../views/AboutView.vue')
        },
        meta: {
            title: '幕后'
        }
    }
]

export const baseRoutes: RouteRecordRaw[] = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        components: {
            default: () => import('../views/NotFound.vue')
        },
        meta: {
            title: '404'
        },
    }
]

export default [
    ...navRoutes,
    ...baseRoutes,
]
