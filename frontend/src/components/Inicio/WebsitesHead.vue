<script setup>
import WebsitesAdd from './WebsitesAdd.vue';

const props = defineProps({
    getWebsites: Function
})

</script>

<template>
    <h1>Sitos web generados</h1>
    <button type="button" data-bs-target="#modal-add-form" data-bs-toggle="modal" class="btn btn-dark">
        Agregar nuevo sitio
    </button>
    <WebsitesAdd :getWebsites="getWebsites"/>
</template>