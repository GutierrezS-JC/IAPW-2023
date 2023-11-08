<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import WebsitesList from '@/components/Inicio/WebsitesList.vue';
import WebsitesHead from '@/components/Inicio/WebsitesHead.vue';

import WebSiteService from '@/services/WebsiteServiceClass'
import { useAuth0 } from "@auth0/auth0-vue";

import { ref } from 'vue'
import { onBeforeMount } from 'vue'

const websites = ref([])

const getWebsites = () => {
    new WebSiteService(isAuthenticated.value, token).getWebsites().then(
        result => websites.value = result
    );
}

// Metodos de AUTH0
const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
const token = await getAccessTokenSilently();

onBeforeMount(() => {
    getWebsites()
});
</script>

<template>
    <AppHeader :isAuthenticated="isAuthenticated" />
    <WebsitesHead :getWebsites="getWebsites" :user="user" :isAuthenticated="isAuthenticated" :token="token" />
    <div class="container mt-3" style="min-height: 30em;">
        <WebsitesList :getWebsites="getWebsites" :websites="websites" :isAuthenticated="isAuthenticated" :token="token" />
    </div>
</template>
