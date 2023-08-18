<script setup lang="ts">
import { InfoPage } from '@/components/BaseUI';
import { useRoute } from 'vue-router'
const currentRoute = useRoute()

console.log(currentRoute)
</script>
<template>
    <InfoPage>
        <template #head>
            <div class="not-found box-mold">
                <svg viewBox="0 0 60 60">
                    <path d="M0 0v60h60V0H0zm2 2h56v10H2V2zm56 56H2V14h56v44z" />
                    <path d="M54.293 3.293L52 5.586l-2.293-2.293-1.414 1.414L50.586 7l-2.293 2.293 1.414 1.414L52 8.414l2.293 2.293 1.414-1.414L53.414 7l2.293-2.293zM3 11h39V3H3v8zm2-6h35v4H5V5z" />
                    <path d="M9 39h6v8a1 1 0 0 0 2 0v-8h3a1 1 0 0 0 0-2h-3v-2a1 1 0 0 0-2 0v2h-5V27a1 1 0 0 0-2 0v11a1 1 0 0 0 1 1zm31 0h6v8a1 1 0 0 0 2 0v-8h3a1 1 0 0 0 0-2h-3v-2a1 1 0 0 0-2 0v2h-5V27a1 1 0 0 0-2 0v11a1 1 0 0 0 1 1zm-10.5 9c3.584 0 6.5-2.916 6.5-6.5v-9c0-3.584-2.916-6.5-6.5-6.5S23 28.916 23 32.5v9c0 3.584 2.916 6.5 6.5 6.5zM25 32.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v9c0 2.481-2.019 4.5-4.5 4.5S25 43.981 25 41.5v-9z" />
                </svg>
                <ul class="err-msg">
                    <li class="item">
                        <div class="key">错误路由：</div>
                        <div class="value">{{ currentRoute.fullPath }}</div>
                    </li>
                    <li class="item">
                        <div class="key">重定向自：</div>
                        <div class="value">{{ currentRoute.redirectedFrom?.fullPath }}</div>
                    </li>
                </ul>
            </div>
        </template>
        <template #content>
            <p>您导航的路线不正确，没关系，我们都有不顺利的时候。</p>
            <p>建议您滚回到以前的页，或者去浏览我们的茵蒂克丝。</p>
        </template>
    </InfoPage>
</template>

<style scoped lang="scss">
.not-found {
    place-items: center;
    width: fit-content;

    svg {
        font-size: 5rem;
        stroke-width: 0.01rem;
    }

    .err-msg {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .item {
            display: flex;
            flex-flow: row wrap;
            gap: 0.5rem;

            .key {
                font-size: 1rem;
                font-weight: 600;
                letter-spacing: 0.1rem;
            }

            .value {
                font-size: 0.9rem;
                font-weight: 600;
                word-break: break-all;
                background: var(--color-background);
                padding: 0.1rem 1rem;
                border-radius: 1rem;
                letter-spacing: 0;
                line-height: 100%;
            }
        }
    }
}
</style>
