<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import IndexLogoVue from '@/components/IndexLogo.vue'
import ExternalLinks from '@/components/ExternalLinks.vue'
</script>

<template>
    <main>
        <section class="main">
            <TheWelcome class="text" />
            <div class="frame flex-center">
                <IndexLogoVue class="logo" />
            </div>
        </section>
        <ExternalLinks />
    </main>
</template>

<style scoped lang="scss">
main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 3rem;
}

.main {
    display: flex;
    flex-direction: row;
    place-items: center;

    .text {
        flex: 1;
    }

    .frame {
        flex: 1;

        .logo {
            width: 50%;
            height: auto;
        }
    }

    @media screen and (max-width: 960px) {
        flex-direction: column-reverse;
    }
}
</style>
