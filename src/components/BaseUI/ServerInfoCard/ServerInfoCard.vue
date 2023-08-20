<script setup lang="ts">
import ServerStatus from './ServerStatus.vue'
import ServerAddress from './ServerAddress.vue'

import CompassIcon from './CompassIcon.vue'

const info = {
    host: 'mc.oikmc.org',
    online: true,
    version:
        'Waterfall 1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x, 1.13.x, 1.14.x, 1.15.x, 1.16.x, 1.17.x, 1.18.x, 1.19.x',
    players: {
        online: 10,
        max: 2023
    },
    update: '16:00:11'
}

defineProps<{
    text1: string
    text2: string
}>()
</script>

<template>
    <div class="card box-mold">
        <div class="head">
            <h2>{{ text1 }}</h2>
            <h3>{{ text2 }}</h3>
        </div>
        <ServerStatus v-bind="info" />
        <ServerAddress :addr="info.host" />
    </div>
</template>

<style scoped lang="scss">
.card {
    align-items: start;

    .head {
        width: 100%;
        height: 8rem;
        border-radius: 0.5rem;

        display: flex;
        flex-direction: column;
        place-items: center;
        place-content: center;

        background: center url(../../../assets/big.jpg);

        color: #fff;
        text-shadow: 0 0 1rem #000000;
        letter-spacing: 0.1rem;

        h2 {
            font-size: 1.8rem;
            font-weight: 800;
        }

        h3 {
            font-size: 1.3rem;
            font-weight: 600;
            color: #fff;
        }

        & > * {
            transition: transform 0.5s ease-in-out;
        }

        &:hover > * {
            transform: scale(1.1);
        }
    }
}
</style>
