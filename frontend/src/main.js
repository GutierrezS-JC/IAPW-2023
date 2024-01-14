import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue'

import App from './App.vue'
import router from './router'
import JsonViewer from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(JsonViewer)

app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
        authorizationParams: {
            redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
            audience: import.meta.env.VITE_AUTH0_AUDIENCE
        },
    })
)

app.mount('#app')
