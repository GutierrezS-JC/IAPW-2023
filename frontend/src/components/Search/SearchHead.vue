<script setup>
import { ref } from 'vue';

// String para busqueda
const searchTerm = ref('');

const doSearch = async () => {
  if (searchTerm) {
    const sanitizedSearchTerm = searchTerm.value.trim();
    await props.handleSearch(sanitizedSearchTerm);
  }
};

const props = defineProps({
  handleSearch: Function
})

</script>
<template>
  <div class="container mt-0 mt-sm-4"
    style="background-color: #000000; border-top-left-radius: .7em; border-top-right-radius: .7em; padding-right: 0;">
    <div class="p-5" style="color: white; position: relative; overflow: hidden;">
      <h1 class="display-6 fw-bold">Busqueda</h1>
      <p style="width: 80%;">Busca y encuentra documentos con facilidad. <br/>Ingresa tu keyphrase y explora entre los
        resultados obtenidos.</p>
      <i class="bi bi-search"
        style="font-size: 16em; position: absolute; bottom: -.40em; right: 0; color: rgba(255, 255, 255, 0.159);"></i>
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
        <button @click="doSearch" type="button" class="btn btn-outline-light mt-4">Buscar</button>
      </div>
    </div>
  </div>
</template>