<script setup lang="ts">
import NavLogo from './NavLogo.vue'
import type { Logo } from './NavLogo.vue'

import NavMenu from './NavMenu.vue'
import type { NavList } from './NavMenu.vue'

defineProps<{
    logo?: Logo
    navlist?: NavList
}>()
</script>
<template>
    <Transition name="header" appear>
        <header>
            <div class="content">
                <NavLogo v-if="logo" class="logo" :logo="logo" />
                <NavMenu v-if="navlist" class="nav" :nav="navlist" />
            </div>
        </header>
    </Transition>
</template>

<style scoped lang="scss">
header {
    width: 100%;
    background: var(--color-background);
    position: sticky;
    top: 0;

    height: 4rem;
    margin-bottom: 0.5rem;

    .content {
        margin-top: 0.5rem;
        padding: 1rem 0;

        position: sticky;
        top: 0;
        display: flex;
        place-items: center;
        place-content: center;
    }

    .logo {
        flex: 1;
    }

    .nav {
        flex: 1;
        max-width: 80%;
    }
}

.header-enter-from,
.header-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

.header-leave-from,
.header-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.header-enter-active,
.header-leave-active {
    transition: all 1s ease-in-out;
}
</style>
