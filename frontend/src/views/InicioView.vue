<script setup>
    import AppHeader from '@/components/AppHeader/AppHeader.vue';
    import WebsitesList from '@/components/Inicio/WebsitesList.vue';
    import WebsitesHead from '@/components/Inicio/WebsitesHead.vue';
</script>

<template>
    <AppHeader/>
    <div class="container mt-3">
        <WebsitesHead/>
        <WebsitesList/>
    </div>
</template>
