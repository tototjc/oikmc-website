<script setup lang="ts">
import { TheLink } from '@/components/BaseUI'

const links = [
    {
        url: 'https://littleskin.cn/',
        name: 'Little Skin',
        intro: '本服使用的第三方登录站点',
    },
    {
        url: 'https://docs.microsoft.com/java/openjdk/download',
        name: 'Microsoft OpenJDK',
        intro: '下载来自微软的JAVA环境',
    },
    {
        url: 'https://www.oracle.com/java/technologies/downloads/',
        name: 'Oracle JDK',
        intro: '下载来自甲骨文的JAVA环境',
    },
    {
        url: 'https://stats.uptimerobot.com/P5kBQIv0mO/',
        name: 'Uptime Robot',
        intro: '本服在线时间监控',
    },
    {
        url: 'https://mcstatus.io/status/java/mc.oikmc.org/',
        name: 'Minecraft Server Status',
        intro: '本服MOTD信息查询',
    },
]

</script>
<template>
    <div class="links box-mold">
        <h6 class="title">相关外部链接</h6>
        <ul>
            <li v-for="link in links" :key="link.name">
                <TheLink v-bind="link" />
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.links {
    .title {
        font-size: 1.2rem;
        font-weight: 700;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        place-items: center start;
        gap: 1.5rem;
        padding: 0.5rem;

        li {
            color: var(--color-text-bland);
        }
    }
}
</style>
