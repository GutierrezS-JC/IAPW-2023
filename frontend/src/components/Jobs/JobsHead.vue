<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2'

// String para busqueda
const startDate = ref()
const endDate = ref()

const doSearch = async () => {
  if(!startDate.value || !endDate.value){
    Swal.fire('Completar los datos', 'Para realizar la busqueda se necesitan ingresar ambas fechas', 'info');
  }
  else{
    props.handleSearch(startDate.value, endDate.value)
  }
};

const props = defineProps({
  user: Object,
  website: Object,
  handleSearch: Function
})

</script>

<template>
  <div class="container mt-0 mt-sm-4"
    style="background-color: #000000; border-top-left-radius: .7em; border-top-right-radius: .7em; padding-right: 0;">
    <div class="p-5" style="color: white; position: relative; overflow: hidden;">
      <h1 class="display-6 fw-bold">{{ website.nombre }}</h1>
      <div class="badge bg-light text-wrap fs-6" style="color: black;">
        {{ website.url }}
      </div>
      <div class="mt-2">
        <span class="fw-bold">Niveles: {{ website.niveles }} | Frecuencia: {{ website.frecuencia }}</span>
      </div>
      <i class="bi bi-clock-fill"
        style="font-size: 18em; position: absolute; bottom: -.45em; right: -.12em; color: rgba(255, 255, 255, 0.159);"></i>
    </div>
  </div>

  <!-- Buscador -->
  <div class="container"
    style="background-color: #212529; border-bottom-left-radius: .7em; border-bottom-right-radius: .7em; padding-right: 0;">
    <div class="py-4 px-5 d-flex"
      style="color: white; position: relative; overflow: hidden; flex-wrap: wrap; align-items: center;">
      <div>
        Fecha de inicio
        <input type="date" v-model="startDate" class="form-control mt-1">
      </div>
      <div class="ms-4">
        Fecha de fin
        <input type="date" v-model="endDate" class="form-control mt-1">
      </div>

      <div class="ms-sm-4 ms-0">
        <button type="button" class="btn btn-outline-light mt-4" @click="doSearch">Buscar</button>
      </div>
    </div>
  </div>
</template>