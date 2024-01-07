<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import JobsHead from '../components/Jobs/JobsHead.vue';
import JobsList from '../components/Jobs/JobsList.vue'

import { useAuth0 } from "@auth0/auth0-vue";

import { ref } from 'vue'
import { useRoute } from "vue-router";
import { onBeforeMount } from 'vue'
import { client } from '../types/ApiClient';

// Routes
const route = useRoute();

// Metodos de AUTH0
const { isAuthenticated, user } = useAuth0();

// Objetos obtenidos desde la BD
const website = ref({})
const websiteJobs = ref([])

const getWebsite = (websiteId) => {
  client['SitioController.findById'](websiteId).then(
    result => website.value = result.data
  )
}

const getWebsiteJobs = (websiteId) => {
  client['SitioTareaController.find'](websiteId).then(
    result => websiteJobs.value = result.data
  )
}

onBeforeMount(async () => {
  getWebsite(route.params.id);
  getWebsiteJobs(route.params.id);
});

</script>

<template>
  <AppHeader :isAuthenticated="isAuthenticated" />
  <JobsHead :user="user" :website="website" />
  <div class="container"
    style="background-color: #212529; border-bottom-left-radius: .7em; border-bottom-right-radius: .7em; padding-right: 0;">
    <div class="py-4 px-5 d-flex"
      style="color: white; position: relative; overflow: hidden; flex-wrap: wrap; align-items: center;">
      <div>
        Buscar
        <input type="text" class="form-control mt-1" placeholder="Nombre de tarea...">
      </div>
      <div class="ms-4">
        Fecha de inicio
        <input type="date" class="form-control mt-1">
      </div>
      <div class="ms-4">
        Fecha de fin
        <input type="date" class="form-control mt-1">
      </div>
      <div class="ms-4">
        Estado
        <select class="form-select mt-1" aria-label="Default select example">
          <option selected>Todos</option>
          <option value="1">Finalizado</option>
          <option value="2">En proceso</option>
          <option value="3">Error</option>
        </select>
      </div>

      <div class="ms-4">
        <button type="button" class="btn btn-outline-light mt-4">Buscar</button>
      </div>
    </div>
  </div>

  <div class="container">
    <!-- Esta row aparece en las vistas a partir del tamaño XL -->
    <div class="mt-4">
      <h1 class="fw-bold" style="font-size: 2em;">Resumen</h1>
      <div class="row test d-none d-xl-block">
        <div class="col-xl-4">
          <div class="card text-bg-dark mb-3">
            <div class="card-body d-flex justify-content-center">
              <h5 class="card-title me-3" style="font-size: 3.2em; font-weight: bold;">03</h5>
              <p class="card-text" style="font-size: 1.5em; font-weight: bold; align-self: center;">Tareas registradas</p>
            </div>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="card text-bg-dark mb-3">
            <div class="card-body d-flex justify-content-center">
              <h5 class="card-title me-3" style="font-size: 3.2em; font-weight: bold;">10</h5>
              <p class="card-text" style="font-size: 1.5em; font-weight: bold; align-self: center;">Snapshots</p>
            </div>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="card text-bg-dark mb-3">
            <div class="card-body d-flex justify-content-center">
              <h5 class="card-title me-3" style="font-size: 3.2em; font-weight: bold;">01</h5>
              <p class="card-text" style="font-size: 1.5em; font-weight: bold; align-self: center;">Errores capturados
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="container mt-3" style="min-height: 30em;">
    <JobsList :websiteJobs="websiteJobs" />
  </div>
</template>

<style scoped>
@media (max-width: 1199.98px) {
  .test {
    display: none;
  }
}

@media (min-width: 1200px) {
  .test {
    display: block ruby !important;
  }
}
</style>