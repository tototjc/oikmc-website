<script setup lang="ts"></script>

<template>
    <div class="box-mold">
        <h1 class="title">关于我们</h1>
        <article class="content">
            <p>
                OikMC:Politeia｜理想国篇，是=teamAtlanta｜亚特兰大团队=最新力作的生存｜建筑｜角色扮演服务器，使用1:500的自定义定制群系世界地图，力求再现壮阔瑰丽的地球自然生态；
                作为相关服务器必不可少的要素，服务器将充分地允许PVP和战争，但我们将使用完善的系统有效遏制恶性PVP，过度扩张和人身冲突的发生。这其中最为核心的即为=teamAtlanta｜亚特兰大团队=花费近2年开发的
                Minecraft Universalis
                (以下简称MCU)策略系统，通过改造towny城镇系统，我们将引入科技和宗教两个改变虚拟文明发展历程的核心要素。经济系统也将更为完善，玩家不再能够通过简单的熬-肝-打架-扩张完成简单的再生产循环，而需要更多考虑以多种方式，包括种植，制造机械和贸易等进行发展。建筑和奇观的地位也会进一步提高。
                注①：OikMC:Politeia｜理想国篇将是长期服
                注②：同时根据玩家反馈，会着力解决资源点分布的不正常问题 敬请期待！
            </p>
            <br />
            <blockquote style="font-size: 0.9rem; line-height: 0.9rlh; color: #888">
                【来自网页开发者的几句话】
                因为暑假比较忙所以这个网站断断续续做了半个月才把基础的一些内容搞好，
                目前还有些页面或功能没开发，我会在接下来一段时间逐个补充上，
                网站在技术栈方面只用了vite+vue3+ts+scss而没使用其它组件或UI库，所以如你所见比较的朴素，
                我计划将这个网站以GPL3协议在GitHub上开源
                （现在它在我的私人仓库，因为有些写得太烂太丢脸且不便于二次开发所有暂时不公开，不过我会尽快整理好），
                未来也欢迎大佬们来提issue或者pull request，以上。
            </blockquote>
        </article>
    </div>
</template>

<style scoped lang="scss">
.title {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    quotes: '「' '」';

    &::before {
        content: open-quote;
    }
    &::after {
        content: close-quote;
    }
}

.content {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.2rlh;
    text-indent: 2em;
    letter-spacing: 0.1em;
}
</style>
