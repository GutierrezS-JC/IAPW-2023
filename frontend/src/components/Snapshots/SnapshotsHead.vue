<script setup>
import { ref } from 'vue';

// String para busqueda
const searchTerm = ref('');

const searchSnapshots = async (jobId) => {
  if (searchTerm) {
    const sanitizedSearchTerm = searchTerm.value.trim();
    await props.handleSearch(jobId, sanitizedSearchTerm);
  }
};

const props = defineProps({
  jobInfo: Object,
  handleSearch: Function
})

</script>

<template>
  <!-- Datos del job (tarea) -->
  <div class="container mt-0 mt-sm-4"
    style="background-color: #000000; border-top-left-radius: .7em; border-top-right-radius: .7em; padding-right: 0;">
    <div class="p-5" style="color: white; position: relative; overflow: hidden;">
      <h1 class="display-6 fw-bold">{{ jobInfo.nombre }}</h1>
      <h2 class="fs-5 py-1">{{ jobInfo.id }}</h2>
      <div class="badge bg-light text-wrap fs-6" style="color: black;">
        {{ jobInfo.estado }}
      </div>
      <div class="mt-2">
        <span class="fw-bold">Fecha de registro: </span>
        <span> {{ new Date(jobInfo.timestamp).toLocaleDateString() }} </span>
      </div>
      <i class="bi bi-camera"
        style="font-size: 18em; position: absolute; bottom: -.45em; right: -.12em; color: rgba(255, 255, 255, 0.159);"></i>
    </div>
  </div>

  <!-- Buscador -->
  <div class="container"
    style="background-color: #212529; border-bottom-left-radius: .7em; border-bottom-right-radius: .7em; padding-right: 0;">
    <div class="pt-3 pb-4 px-5 d-flex"
      style="color: white; position: relative; overflow: hidden; flex-wrap: wrap; align-items: center;">
      <div>
        Buscar
        <input type="text" v-model="searchTerm" class="form-control mt-1" placeholder="Buscar por keyphrase...">
      </div>

      <div class="ms-3">
        <button @click="searchSnapshots(jobInfo.id)" type="button" class="btn btn-outline-light mt-4">Buscar</button>
      </div>
    </div>
  </div>
</template>