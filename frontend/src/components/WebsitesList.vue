<script setup>
  import WebsiteDetails from '@/components/WebsiteDetails.vue'
  import WebSiteService from '../services/WebsiteServiceClass'
  import { ref } from 'vue'
  import { onBeforeMount } from 'vue'
  
  const websites = ref([])
  const website = ref({})

  const setWebsites = () => {
      WebSiteService.getWebsites().then(
          result => websites.value = result
      );
  }

  const setWebsiteDetails = (id) => {
    WebSiteService.get(id).then(
      result => website.value = result
    );
  }

  const resetWebsite = () =>{
    website.value = {}
  }

  onBeforeMount(() => setWebsites());
</script>

<template>
  <table class="table table-hover mt-5">
    <thead class="table-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre del sitio</th>
        <th scope="col">URL</th>
        <th scope="col">Profundidad</th>
        <th scope="col">Frecuencia</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(website, index) in websites">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ website.nombre }}</td>
        <td>{{ website.url }}</td>
        <td>{{ website.niveles }}</td>
        <td>{{ website.frecuencia }}</td>
        <td> <button type="button" class="btn btn-sm btn-dark px-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
              @click="setWebsiteDetails(website.idSitio)">Editar</button>
        </td>
      </tr>
    </tbody>
  </table>
  <WebsiteDetails :website="website" :resetWebsite="resetWebsite"/>
</template>