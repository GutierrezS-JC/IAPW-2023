<script setup>
    import WebSiteService from '../services/WebsiteServiceClass'
    import AppHeader from '../components/AppHeader.vue';

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
    console.log(websites.value)
</script>

<template>
    <AppHeader/>
    <div class="container mt-5">
        <h1>Sitos web generados</h1>
        <div class="row">
            <div class="col-12">
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Nombre del sitio</th>
                            <th scope="col">URL</th>
                            <th scope="col">Profundidad</th>
                            <th scope="col">Frecuencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="website in websites">
                            <td>{{ website.nombre }}</td>
                            <td>{{ website.url }}</td>
                            <td>{{ website.niveles }}</td>
                            <td>{{ website.frecuencia }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>