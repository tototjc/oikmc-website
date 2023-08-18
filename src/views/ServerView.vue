<script setup lang="ts">
// import ServerListVue from '@/components/ServerList.vue';
// import ExternalLinks from '@/components/ExternalLinks.vue';

import InMaintenance from '@/components/InMaintenance.vue'
</script>
<template>
    <main>
        <!-- <ServerListVue />
        <ExternalLinks /> -->
        <InMaintenance />
    </main>
</template>

<style scoped lang="scss">
main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>