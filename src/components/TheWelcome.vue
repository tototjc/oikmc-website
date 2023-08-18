<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Greeters from './BaseUI/TheGreeters/TheGreeters.vue'
import type { GreeterList } from './BaseUI/TheGreeters/TheGreeters.vue'
import KookIcon from './Icon/KookIcon.vue'
import DiscordIcon from './Icon/DiscordIcon.vue'

const name = ref<HTMLElement | null>(null)
onMounted((): void => name.value?.setAttribute('data-text', String(name.value?.textContent)))

const data: GreeterList = [
    {
        isMain: true,
        icon: KookIcon,
        text: '加入我们的KOOK频道',
        url: 'https://kook.top/sNkfki',
        bgColor: '#87eb00',
        textColor: '#000000'
    },
    {
        icon: DiscordIcon,
        text: 'Discord',
        url: 'https://discord.com',
        tip: '（不常用，建议使用KOOK）',
        bgColor: '#5865f2',
        textColor: '#ffffff'
    }
]
</script>

<template>
    <div class="main-text">
        <div>
            <p class="welcome">Welcome to</p>
            <h1 ref="name" class="name">Oikoumene Lit</h1>
        </div>
        <hr class="divider" />
        <p class="tagline">一个面向所有玩家的自由Minecraft服务器</p>

        <div class="join">
            <RouterLink to="server" class="start icon-text-align">
                <span>开始游玩</span>
                <svg viewBox="0 0 16 16">
                    <path d="M9 14l5-5V8L9 3 8 4l4 4H2v1h10l-4 4 1 1z" />
                </svg>
            </RouterLink>
            <a target="_blank" rel="noopener noreferrer" class="bilibili" href="https://bilibili.com/">去Bilibili观看我们的宣传片</a>
        </div>

        <Greeters class="greeters" :list="data" />
    </div>
</template>

<style scoped lang="scss">
.main-text {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 1rem;

    .welcome {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: 0.05rem;
        white-space: nowrap;
    }

    .name {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: 0.15rem;
        white-space: nowrap;

        background: linear-gradient(135deg, var(--color-3-mute), var(--color-2-mute), var(--color-1-mute));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;

        &::before {
            content: attr(data-text);
            position: absolute;
            z-index: -1;
            color: transparent;
            text-shadow: 0.1rem 0.15rem 0.3rem var(--color-text-bland);
        }
    }

    .divider {
        width: 100%;
        height: 0.25rem;
        background: var(--color-text);
        margin: 0.5rem 0 1rem;
    }

    .tagline {
        color: var(--color-text-bland);
        font-size: 1.3rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        white-space: nowrap;
    }

    .join {
        display: flex;
        gap: 0.5rem 1rem;
        place-items: center;

        .bilibili {
            font-size: 1rem;
            font-weight: 500;
            color: #f25d8e;
            border-radius: 0.3rem;
            padding: 0.2rem 0.5rem;
            text-decoration: underline;

            &:hover {
                background: #f25d8e0f;
            }
        }

        .start {
            color: var(--color-text-bland);
            font-weight: 600;
            padding: 0.3rem 1rem;
            border: 0.2rem solid var(--color-text-bland);
            border-radius: 2rem;
        }
    }

    .greeters {
        width: max(20rem, 50%);
    }

    @media screen and (max-width: 768px) {
        align-items: center;
        gap: 0.8rem;

        .welcome {
            text-align: center;
            font-size: 1.5rem;
        }

        .name {
            text-align: center;
            font-size: 2.5rem;
        }

        .divider {
            width: 100%;
            height: 0.2rem;
            margin: 0.2rem 0 0.3rem;
        }

        .tagline {
            font-size: 1rem;
            letter-spacing: 0;
        }

        .join {
            flex-direction: column;

            .bilibili {
                font-size: 0.9rem;
            }

            .start {
                color: var(--color-text-bland);
                font-weight: 600;
                padding: 0.3rem 1rem;
                border: 0.2rem solid var(--color-text-bland);
                border-radius: 2rem;
            }
        }

        .greeters {
            width: 100%;
        }
    }
}
</style>
