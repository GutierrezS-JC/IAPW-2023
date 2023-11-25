<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import WebsitesList from '@/components/Inicio/WebsitesList.vue';
import WebsitesHead from '@/components/Inicio/WebsitesHead.vue';

import { useAuth0 } from "@auth0/auth0-vue";

import { ref } from 'vue'
import { onBeforeMount } from 'vue'
import { client } from '../types/ApiClient';

// Metodos de AUTH0
const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
const token = await getAccessTokenSilently();

// Sitios obtenidos desde BD
const websites = ref([])

// Configurando token
client.defaults.headers['authorization'] = `Bearer ${token}`

const getWebsites = () => {
    client['SitioController.find']().then(
        result => websites.value = result.data
    )
}


onBeforeMount(() => {
    getWebsites()
});
</script>

<template>
    <AppHeader :isAuthenticated="isAuthenticated" />
    <WebsitesHead :getWebsites="getWebsites" :user="user" />
    <div class="container mt-3" style="min-height: 30em;">
        <WebsitesList :getWebsites="getWebsites" :websites="websites" />
    </div>
</template>
