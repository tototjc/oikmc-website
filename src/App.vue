<script setup lang="tsx">
import { RouterView } from 'vue-router'
import { NavBar } from '@/components/BaseUI'
import Logo from '@/assets/logo.png'
import { navRoutes } from './router/routes'

const nav = {
    logo: {
        img: Logo,
        text: 'OikMC'
    },
    navlist: navRoutes.map((router) => ({
        text: String(router.name && router.meta?.title),
        path: router.path
    }))
}
</script>

<template>
    <NavBar :logo="nav.logo" :navlist="nav.navlist" />
    <RouterView class="view" v-slot="{ Component, route }">
        <Transition name="view" mode="out-in">
            <component :is="Component" :key="route.path ?? route.path" />
        </Transition>
    </RouterView>
</template>

<style scoped lang="scss">
.view {
    width: 75vw;
    // min-width: fit-content;
    margin: 2rem auto;
}

.view-enter-active,
.view-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.view-enter-from,
.view-leave-to {
    opacity: 0;
}

.view-enter-to,
.view-leave-from {
    opacity: 1;
}
</style>
