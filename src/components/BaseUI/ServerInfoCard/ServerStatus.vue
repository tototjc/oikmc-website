<script setup lang="ts">
import OnlineIcon from './OnlineIcon.vue';
import OfflineIcon from './OfflineIcon.vue';
import CopyIconVue from './CopyIcon.vue';

defineProps<{
    online: boolean,
    version: string,
    players: {
        online: number | string,
        max: number | string,
    },
    update: Date | string,
}>()
</script>

<template>
    <div class="container">
        <div class="info">
            <div :class="[(online ? 'online' : 'offline'), 'status', 'icon-text-align']">
                <component :is="online ? OnlineIcon : OfflineIcon"></component>
                {{ online ? '在线' : '离线' }}
            </div>
            <div class="addr icon-text-align">
                <span class="name">服务器地址：</span>
                <span class="text">mc.oikmc.org</span>
                <button class="btn flex-center">
                    <CopyIconVue class="icon" />
                </button>
            </div>
        </div>
        <div class="detail">
            <div class="version">
                Support version: <span>{{ version }}</span>
            </div>
            <div class="player">
                Players: <span>{{ players.online }} / {{ players.max }}</span>
            </div>
        </div>
        <div class="tip">
            <span>
                Update time: <span>{{ update }}</span>
            </span>
            <span>
                以上数据服务器MOTD，仅供参考
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.info {
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

.container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .status {
        padding: 0.15rem 0.3rem;
        border-radius: 0.3rem;
        color: #ffffff;

        &.online {
            background: var(--color-2-mute);
        }

        &.offline {
            background: var(--color-3-mute);
        }
    }

    .detail {
        padding: 0.3rem 0.5rem;
        border-radius: 0.3rem;
        background: #fff;
    }

    .tip {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        font-size: 0.8rem;
    }
}
</style>
