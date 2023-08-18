<script setup lang="ts">
import { ServerInfoCard } from './BaseUI';

const info = {
    host: 'mc.oikmc.org',
    online: true,
    version: 'Waterfall 1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x, 1.13.x, 1.14.x, 1.15.x, 1.16.x, 1.17.x, 1.18.x, 1.19.x',
    players: {
        online: 10,
        max: 2023,
    },
    update: '16:00:11',
}

const card1 = {
    text1: 'OikMC : Politeia',
    text2: '理想国篇'
}

const card2 = {
    text1: 'OikMC : Crito',
    text2: '责任篇 | 社会模拟'
}
</script>

<template>
    <div class="list">
        <ServerInfoCard v-bind="card1" />
        <ServerInfoCard v-bind="card2" />
    </div>
</template>

<style scoped lang="scss">
.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem 10%;

    & > * {
        flex: 1;
        // min-width: fit-content;
    }
}
</style>
