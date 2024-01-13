<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import JobsHead from '../components/Jobs/JobsHead.vue';
import JobsList from '../components/Jobs/JobsList.vue'

import { useAuth0 } from "@auth0/auth0-vue";

import { ref } from 'vue'
import { useRoute } from "vue-router";
import { onBeforeMount } from 'vue'
import { client } from '../types/ApiClient';
import Swal from 'sweetalert2';

// Routes
const route = useRoute();

// Metodos de AUTH0
const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

// Configurando token
const configureToken = async () => {
  const token = await getAccessTokenSilently();
  client.defaults.headers['authorization'] = `Bearer ${token}`
}

// Objetos obtenidos desde la BD
const website = ref({})
const websiteJobs = ref([])
const metricas = ref({})

const loading = ref(true);
const loadingResults = ref();
const wasFiltered = ref(false);

const getWebsite = (websiteId) => {
  return client['SitioController.findById'](websiteId)
    .then(result => website.value = result.data)
    .catch(error => {
      console.error('Error fetching website:', error);
      throw error;
    });
}

const getWebsiteJobs = (websiteId) => {
  return client['SitioTareaController.find'](websiteId)
    .then(result => websiteJobs.value = result.data)
    .catch(error => {
      console.error('Error fetching website jobs:', error);
      throw error;
    });
}


const getMetricas = (websiteId) => {
  return client['MetricasController.metricasTarea'](websiteId)
    .then(result => metricas.value = result.data)
    .catch(error => {
      console.error('Error fetching website count details: ', error);
      throw error;
    });
}

const handleSearch = async (fechaInicio, fechaFin) => {
  try {
    if (fechaInicio && fechaFin) {
      loadingResults.value = true
      const results = await client['BusquedaController.tareasEnRango']({
        id: route.params.id, fechaInicio: fechaInicio, fechaFin: fechaFin
      })
      if (results.data.length === 0) {
        Swal.fire('Sin resultados', 'No hay tareas registradas entre las fechas ingresadas', 'info')
      }
      else {
        const response = await client['MetricasController.metricasTareaEnRango']({
          sitioId: route.params.id, fechaInicio: fechaInicio, fechaFin: fechaFin
        })
        wasFiltered.value = true
        metricas.value = response.data
        websiteJobs.value = results.data
      }
    }
  }
  catch (error) {
    console.log(error)
    Swal.fire('Error', error, 'error')
  }
  finally {
    loadingResults.value = false
  }
}

const resetList = async () => {
  try {
    loadingResults.value = true;
    await Promise.all([
      getWebsiteJobs(route.params.id),
      getMetricas(route.params.id)
    ]);
  } catch (error) {
    console.log('Error: ', error);
  } finally {
    wasFiltered.value = false
    loadingResults.value = false;
  }
}

onBeforeMount(async () => {
  try {
    await configureToken()
    await Promise.all([
      getWebsite(route.params.id),
      getWebsiteJobs(route.params.id),
      getMetricas(route.params.id)
    ]);
  } catch (error) {
    console.log('Error: ', error);
  } finally {
    loading.value = false;
  }
});

</script>

<template>
  <AppHeader :isAuthenticated="isAuthenticated" />
  <div v-if="loading" class="d-flex justify-content-center align-items-center" style="min-height: 90vh;">
    <div class="spinner-border" role="status" style="width: 3rem; height: 3rem;">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else>
    <JobsHead :user="user" :website="website" :handleSearch="handleSearch" />

    <div class="container">
      <!-- Esta row aparece en las vistas a partir del tamaño XL -->
      <div class="mt-4">
        <h1 class="fw-bold" style="font-size: 2em;">Resumen</h1>
        <div class="row test d-none d-xl-block">
          <div class="col-xl-6">
            <div class="card text-bg-dark mb-3">
              <div class="card-body d-flex justify-content-center">
                <h5 class="card-title me-3" style="font-size: 3.2em; font-weight: bold;">
                  {{ metricas.tareas < 10 ? '0' + metricas.tareas : metricas.tareas }} </h5>
                    <p class="card-text" style="font-size: 1.5em; font-weight: bold; align-self: center;">Tareas
                      registradas
                    </p>
              </div>
            </div>
          </div>

          <div class="col-xl-6">
            <div class="card text-bg-dark mb-3">
              <div class="card-body d-flex justify-content-center">
                <h5 class="card-title me-3" style="font-size: 3.2em; font-weight: bold;">
                  {{ metricas.snapshots < 10 ? '0' + metricas.snapshots : metricas.snapshots }} </h5>
                    <p class="card-text" style="font-size: 1.5em; font-weight: bold; align-self: center;">Snapshots</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="container mt-3" style="min-height: 30em;">
      <div v-if="loadingResults" class="d-flex justify-content-center align-items-center" style="min-height: 30vh;">
        <div class="spinner-border" role="status" style="width: 3rem; height: 3rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <JobsList v-else :websiteJobs="websiteJobs" :wasFiltered="wasFiltered" :resetList="resetList" />
    </div>
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