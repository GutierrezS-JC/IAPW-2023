<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import WebsitesList from '@/components/Inicio/WebsitesList.vue';
import WebsitesHead from '@/components/Inicio/WebsitesHead.vue';

import WebSiteService from '@/services/WebsiteServiceClass'

import { ref } from 'vue'
import { onBeforeMount } from 'vue'

const websites = ref([])

const getWebsites = () => {
    WebSiteService.getWebsites().then(
        result => websites.value = result
    );
}

onBeforeMount(() => getWebsites());

</script>

<template>
    <AppHeader />
    <div class="container mt-3">
        <WebsitesHead :getWebsites="getWebsites" />
        <WebsitesList :getWebsites="getWebsites" :websites="websites" />
    </div>
</template>
