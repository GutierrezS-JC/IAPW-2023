<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import SearchHead from '@/components/Search/SearchHead.vue';
import SearchEmpty from '@/components/Search/SearchEmpty.vue';

import Swal from 'sweetalert2'

import { ref, onBeforeMount } from 'vue'
import { client } from '../types/ApiClient';
import { useAuth0 } from "@auth0/auth0-vue";
import SnapshotsSearch from '../components/Snapshots/SnapshotsSearch.vue';

// Metodos de AUTH0
const { isAuthenticated, getAccessTokenSilently } = useAuth0();

// Configurando token
const configureToken = async () => {
  const token = await getAccessTokenSilently();
  client.defaults.headers['authorization'] = `Bearer ${token}`
}

// Objetos obtenidos desde la BD
const searchResults = ref([]);

// Loading - Spinner
const loadingResults = ref(false);

// Alerts
const alertSwal = (title, description, icon) => {
  Swal.fire(title, description, icon);
}

// Busqueda
const handleSearch = async (searchString) => {
  try {
    if (searchString.trim() !== '') {
      loadingResults.value = true;
      const result = await client['BusquedaController.documentos'](searchString);
      if (result.data.length === 0) {
        alertSwal('Informe', `No se encontraron resultados con la frase "${searchString}"`, 'info')
      }
      searchResults.value = result.data;
    }
    else {
      // Evitamos hacer una consulta innecesaria y seteamos el valor por default
      // si se ingresa un texto vacio volvemos a la lista original de la tarea
      searchResults.value = []
    }
  }
  catch (error) {
    console.log('Error while doing search', error);
  } finally {
    loadingResults.value = false;
  }
}

const resetSearch = () => {
  searchResults.value = []
}

onBeforeMount(async () => {
  await configureToken()
});

</script>
<template>
  <AppHeader :isAuthenticated="isAuthenticated" />

  <SearchHead :handleSearch="handleSearch" />
  <div v-if="loadingResults" class="d-flex justify-content-center align-items-center" style="min-height: 50vh;">
    <div class="spinner-border" role="status" style="width: 3rem; height: 3rem;">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else>
    <SnapshotsSearch v-if="searchResults.length !== 0" :searchResults="searchResults" :resetSearch="resetSearch" />
    <SearchEmpty v-else />
  </div>
</template>