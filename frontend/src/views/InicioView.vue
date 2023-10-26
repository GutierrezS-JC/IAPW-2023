<script setup>
    import AppHeader from '../components/AppHeader.vue';
    import WebsitesList from '../components/WebsitesList.vue';
</script>
<template>
    <AppHeader/>
    <div class="container mt-3">
        <h1>Sitos web generados</h1>
        <button class="btn btn-dark">Agregar nuevo sitio</button>
        <WebsitesList/>
    </div>
</template>
