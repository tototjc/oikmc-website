<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

interface NavItem {
    text: string,
    path: string,
}

type NavList = NavItem[]

export type { NavList }

defineProps<{
    nav: NavList,
}>()

const isActive = ref<boolean>(false)
const toggleActive = (): void => {
    isActive.value = !isActive.value
}
</script>
<template>
    <nav :class="[isActive ? 'show' : 'hidden']">
        <ul class="menu">
            <li v-for="(item, index) of nav" :key="item.path" :style="`--order: ${index + 1}`">
                <RouterLink :to="item.path" active-class="active" @click="toggleActive">
                    {{ item.text }}
                </RouterLink>
            </li>
        </ul>
        <div class="burger" @click="toggleActive">
            <i></i>
            <i></i>
            <i></i>
        </div>
    </nav>
</template>

<style scoped lang="scss">
nav {
    .menu {
        display: flex;
        place-items: center;
        justify-content: space-between;
        gap: 5vh 1.5rem;

        li {
            list-style: none;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 0.2rem;
            text-indent: 0.2rem;
            text-align: center;

            a {
                display: block;
                position: relative;
                white-space: pre;

                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    height: 0.2rem;
                    width: 0%;
                    left: 50%;
                    bottom: -0.5rem;
                    border-radius: 0.2rem;
                    transition: all 0.3s ease-in-out;
                }

                &:hover::after,
                &.active::after {
                    left: 10%;
                    width: 80%;
                }
            }

            &:nth-of-type(3n + 1) a::after {
                background: linear-gradient(to right, var(--color-1-soft), var(--color-1-mute), var(--color-1-soft));
            }

            &:nth-of-type(3n + 2) a::after {
                background: linear-gradient(to right, var(--color-2-soft), var(--color-2-mute), var(--color-2-soft));
            }

            &:nth-of-type(3n) a::after {
                background: linear-gradient(to right, var(--color-3-soft), var(--color-3-mute), var(--color-3-soft));
            }
        }
    }

    .burger {
        display: none;
    }

    @media screen and (max-width: 768px) {
        .menu {
            position: fixed;
            top: 0;
            right: 0;

            width: 16rem;
            max-width: 60vw;
            height: 100vh;

            background: var(--color-background-transparent);
            backdrop-filter: blur(1rem);

            flex-direction: column;
            justify-content: center;

            transition: 0.8s ease-in-out;

            li {
                width: 70%;
                text-align: right;
                font-size: 1.1rem;

                a {
                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        height: 0;
                        width: 0.3rem;
                        top: 50%;
                        border-radius: 0.3rem;
                        background: var(--color-text);
                        transition: 0.3s ease-in-out;
                    }

                    &:hover::before,
                    &.active::before {
                        top: 10%;
                        height: 80%;
                    }

                    &::after {
                        display: none;
                    }
                }
            }
        }

        .burger {
            float: right;
            display: flex;
            flex-direction: column;
            row-gap: 0.25rem;
            width: 1.5rem;

            i {
                display: block;
                height: 0.2rem;
                background: var(--color-text);
            }
        }

        &.hidden {
            .menu {
                transform: translateX(100%);
            }

            .burger i {
                &:nth-child(1) {
                    transform: rotate(0) translate(0);
                    transition: 0.3s ease-in-out 0s;
                }

                &:nth-child(2) {
                    opacity: 1;
                    transform: translate(0);
                    transition: 0.3s ease-in-out 0.2s;
                }

                &:nth-child(3) {
                    transform: rotate(0) translate(0);
                    transition: 0.3s ease-in-out 0s;
                }
            }
        }

        &.show {
            .menu {
                box-shadow: 0 0 0.2rem 0.2rem var(--color-background-transparent);
                transform: translateX(0);

                li {
                    opacity: 0;
                    transform: translateX(1.5rem);
                    animation: 0.3s ease-in-out calc(var(--order) * 0.1s + 0.3s) forwards slideIn;

                    @keyframes slideIn {
                        to {
                            opacity: 1;
                            transform: translate(0);
                        }
                    }
                }
            }

            .burger i {
                &:nth-child(1) {
                    transform: rotate(45deg) translate(0.25rem, 0.4rem);
                    transition: 0.3s ease-in-out 0.2s;
                }

                &:nth-child(2) {
                    opacity: 0;
                    transform: translateX(50%);
                    transition: 0.3s ease-in-out 0s;
                }

                &:nth-child(3) {
                    transform: rotate(-45deg) translate(0.25rem, -0.4rem);
                    transition: 0.3s ease-in-out 0.2s;
                }
            }
        }
    }
}
</style>
