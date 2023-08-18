<script setup lang="ts">
import AboutUs from '@/components/AboutUs.vue';
import TheCredits from '@/components/TheCredits.vue';
import TheStatement from '@/components/TheStatement.vue'
</script>

<template>
    <main>
        <AboutUs />
        <TheCredits />
        <TheStatement />
    </main>
</template>

<style>
main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>
