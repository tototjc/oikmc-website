<script setup lang="ts">
import ServerIconVue from './ServerIcon.vue'
import CopyIconVue from './CopyIcon.vue'
import CompassIcon from './CompassIcon.vue'

defineProps<{
    addr: string
}>()
</script>

<template>
    <div class="addr icon-text-align">
        <!-- <ServerIconVue class="icon" /> -->
        <span class="name">服务器地址：</span>
        <span class="text">{{ addr }}</span>
        <button class="btn flex-center">
            <CopyIconVue class="icon" />
            <!-- <span></span> -->
        </button>
        <a href="/404">test</a>
    </div>
    <div class="map icon-text-align">
        <CompassIcon />
        <span>网页地图</span>
    </div>
</template>

<style scoped lang="scss">
.map {
    font-size: 1.1rem;
    font-weight: 500;

    svg {
        stroke-width: 0.02rem;
    }
}

.addr {
    padding: 0.5rem;
    background: var(--color-2-mute);
    border-radius: 0.5rem;

    .icon {
        stroke-width: 0.03rem;
    }

    .text {
        font-size: 1.1rem;
        font-weight: 600;
        line-height: 100%;
        padding: 0.3rem 0.5rem;
        background: var(--color-background);
        // border-radius: 0.25rem;
        user-select: all;

        &::selection {
            color: var(--color-background);
            background: var(--color-3-soft);
        }
    }

    .btn {
        outline: none;
        border: none;
        background: transparent;
        color: var(--color-background);
        font-size: 1.2rem;
        border-radius: 50%;
        padding: 0.2rem;

        &:active {
            color: var(--color-text-bland);
            background: rgba(255, 255, 255, 0.2);
        }
    }

    .name {
        color: var(--color-background);
        font-size: 1.1rem;
        font-weight: 500;
    }
}
</style>
