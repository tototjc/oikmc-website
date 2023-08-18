<script setup lang="ts">
import { MsgBar } from '@/components/BaseUI'

const msg1 = {
    msg: '公告栏消息不能保证时效性，请加入我们的KOOK频道以获得最新内容。',
    btn: {
        text: '点击加入',
        url: '#'
    }
}

const msg2 = {
    msg: '公告栏功能正在绝赞开发中，目前暂无法查看'
}
</script>

<template>
    <main>
        <MsgBar v-bind="msg1" />
        <MsgBar v-bind="msg2" />
    </main>
</template>

<style scoped lang="scss">
main {
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
}
</style>
