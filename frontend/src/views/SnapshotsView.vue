<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import SnapshotsHead from '@/components/Snapshots/SnapshotsHead.vue';
import SnapshotsList from '@/components/Snapshots/SnapshotsList.vue';
import SnapshotsSearch from '@/components/Snapshots/SnapshotsSearch.vue';

import { onBeforeMount, ref } from 'vue'

import { useRoute } from "vue-router";
import { useAuth0 } from "@auth0/auth0-vue";
import { client } from '../types/ApiClient';

// Routes
const route = useRoute();

// Metodos de AUTH0
const { isAuthenticated, user } = useAuth0();

// Objetos obtenidos desde la BD
const jobSnapshots = ref([]);
const jobInfo = ref({});
const searchResults = ref([]);

const loading = ref(true);
const loadingList = ref(false);

const getJobSnapshots = async (jobId) => {
  try {
    const result = await client['TareaSnapshotController.find'](jobId);
    jobSnapshots.value = result.data;
  } catch (error) {
    console.error('Error fetching snapshots:', error);
    throw error;
  }
};

const getJobInfo = async (jobId) => {
  try {
    const result = await client['TareaController.findById'](jobId);
    jobInfo.value = result.data;
  } catch (error) {
    console.error('Error fetching job info:', error);
    throw error;
  }
};

// Busqueda
const handleSearch = async (jobId, searchString) => {
  try {
    if(searchString.trim() !== '') {
      loadingList.value = true;
      const result = await client['BusquedaController.snapshotDocumentos']({ id: jobId, q: searchString });
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
    loadingList.value = false;
  }
}

onBeforeMount(async () => {
  try {
    await Promise.all([
      getJobInfo(route.params.id), getJobSnapshots(route.params.id)
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
    <SnapshotsHead :jobInfo="jobInfo" :handleSearch="handleSearch" />
    <div v-if="loadingList" class="d-flex justify-content-center align-items-center" style="min-height: 90vh;">
      <div class="spinner-border" role="status" style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>
      <SnapshotsSearch v-if="searchResults.length !== 0" :searchResults="searchResults" />
      <SnapshotsList v-else :snapshots="jobSnapshots" />
    </div>
  </div>
</template>