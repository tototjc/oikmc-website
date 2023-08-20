<script setup lang="ts">
import type { Component } from 'vue'

interface GreeterItem {
    isMain?: boolean
    icon: Component | string
    text: string
    url: string
    tip?: string
    bgColor?: string
    textColor?: string
}

type GreeterList = GreeterItem[]

export type { GreeterList }

defineProps<{
    list: GreeterList
}>()
</script>

<template>
    <div class="items">
        <a
            target="_blank"
            rel="noopener noreferrer"
            v-for="(item, index) in list"
            :key="item.text"
            :href="item.url"
            :class="[item.isMain || index == 0 ? 'main' : 'minor', 'item', 'icon-text-align']"
            :style="{
                background: item.bgColor,
                color: item.textColor
            }"
        >
            <component class="icon" :is="item.icon"></component>
            <p class="text">
                {{ item.text }}
                <span v-if="item.tip">{{ item.tip }}</span>
            </p>
        </a>
    </div>
</template>

<style scoped lang="scss">
.items {
    width: 100%;
    display: flex;
    place-items: center;
    justify-content: space-between;
    border-radius: 0.5rem;
    overflow: hidden;
    gap: 0.5rem;

    .item {
        padding: 0.5rem;

        border-radius: inherit;
        line-height: 100%;
        transition: 1s ease-out;

        .icon {
            font-size: 1.3rem;
        }

        .text {
            font-size: 1.1rem;
            font-weight: 600;

            transition: 0.5s ease-out 0.5s;
            overflow: hidden;

            span {
                font-size: 0.8rem;
                font-weight: 600;
                opacity: 0.5;
                z-index: -1;
                vertical-align: top;
            }
        }
    }

    &:hover > .item:hover,
    .item.main {
        flex: 1 0 auto;

        .text {
            display: flow-root;
        }
    }

    &:hover:has(.item:hover) > .item:not(:hover),
    .item.minor {
        flex: 0 0 auto;

        .text {
            display: none;
        }
    }
}
</style>
