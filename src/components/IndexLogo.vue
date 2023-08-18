<script setup lang="ts">
</script>

<template>
    <div class="shadow flex-center">
        <img alt="logo" src="../assets/logo.png">
    </div>
</template>

<style scoped lang="scss">
.shadow {
    margin: 5%;
    position: relative;

    // z-index: -1;
    // animation: 120s linear infinite normal forwards running rotate;

    // @keyframes rotate {
    //     from {
    //         transform: rotate(0);
    //     }

    //     to {
    //         transform: rotate(360deg);
    //     }
    // }

    &::before {
        content: '';
        z-index: -1;
        position: absolute;
        width: 110%;
        height: 110%;
        border-radius: 50%;
        background: conic-gradient(from 0deg,
                var(--color-3-mute) 0deg 80deg,
                var(--color-2-mute) 80deg 110deg,
                var(--color-1-mute) 110deg 170deg,
                var(--color-2-mute) 170deg 245deg,
                var(--color-3-mute) 245deg 315deg,
                var(--color-2-mute) 315deg 335deg,
                var(--color-3-mute) 335deg 360deg);
        animation: 2s linear infinite alternate both running breath;
    }

    @keyframes breath {
        from {
            filter: blur(1.5rem);
        }

        to {
            filter: blur(3rem);
        }
    }

    img {
        z-index: -1;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
