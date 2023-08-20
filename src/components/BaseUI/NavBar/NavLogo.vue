<script setup lang="ts">
import type { Component } from 'vue'

interface Logo {
    img?: string
    text?: string
    component?: Component
}

export type { Logo }

defineProps<{
    logo: Logo
}>()
</script>
<template>
    <div class="logo icon-text-align">
        <component v-if="logo.component" :is="logo.component"></component>
        <template v-else>
            <img v-if="logo.img" :src="logo.img" alt="logo" />
            <span v-if="logo.text">{{ logo.text }}</span>
        </template>
    </div>
</template>
<style scoped lang="scss">
.logo {
    font-size: 1.7rem;

    img {
        height: 0.9em;
        width: auto;
    }

    span {
        font-weight: 600;
    }
}
</style>
