<script setup>
    import WebSiteService from '../services/WebsiteServiceClass'
    import { ref } from 'vue'
    import { onBeforeMount } from 'vue'
    import { useRoute } from 'vue-router'
    
    const websites = ref([])

    const setWebsites = () => {
        WebSiteService.getWebsites().then(
            result => websites.value = result
        );
    }

    onBeforeMount(() => setWebsites());
</script>

<template>
    <AppHeader/>
    <WebsitesList :websites="websites"/>
</template>

<script>
    import AppHeader from '../components/AppHeader.vue';
    import WebsitesList from '../components/WebsitesList.vue';
</script>