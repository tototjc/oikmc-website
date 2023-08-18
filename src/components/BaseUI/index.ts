import type { App, Component } from 'vue'

import NavBar from './NavBar/NavBar.vue'
import InfoPage from './InfoPage/InfoPage.vue'
import MsgBar from './MsgBar/MsgBar.vue'
import ServerInfoCard from './ServerInfoCard/ServerInfoCard.vue'
import TheGreeters from './TheGreeters/TheGreeters.vue'
import TheLink from './TheLink/TheLink.vue'

const components: Record<string, Component> = {
    NavBar,
    InfoPage,
    MsgBar,
    ServerInfoCard,
    TheGreeters,
    TheLink
}

export default {
    install(app: App) {
        for (const [key, value] of Object.entries(components)) {
            app.component(key, value)
        }
    }
}

export { NavBar, InfoPage, MsgBar, ServerInfoCard, TheGreeters, TheLink }
