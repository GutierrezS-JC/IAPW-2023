<script setup>
import WebsiteDetails from '@/components/Inicio/WebsiteDetails.vue'
import Swal from 'sweetalert2'

import { ref } from 'vue'
import { useRouter } from "vue-router";
import { client } from '../../types/ApiClient';

const website = ref({})
const router = useRouter();

const setWebsiteDetails = (id) => {
  client['SitioController.findById'](id).then(
    result => website.value = result.data
  )
}

const resetWebsite = () => {
  website.value = {}
}

const deleteWebsite = async (idSitio) => {
  Swal.fire({
    title: '¿Estas seguro?',
    text: "Estas a punto de eliminar un sitio web de forma permanente",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!',
    cancelButtonText: 'No, cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      client['SitioController.deleteById'](idSitio).then(() => {
        Swal.fire(
          'Eliminado!',
          'El sitio web ha sido eliminado',
          'success'
        )
        props.getWebsites();
      })
        .catch(e => {
          console.log(e)
          Swal.fire(
            'Error',
            'No se pudo eliminar el sitio',
            'error'
          )
        })
    }
  })
}

// Router
const gotoJobs = (websiteId) => {
  router.push(`/jobs/${websiteId}`)
}

const props = defineProps({
  getWebsites: Function,
  websites: Array
})

</script>

<template>
  <h1> Lista de sitios </h1>
  <button class="btn btn-dark mb-4" type="button" data-bs-target="#modal-add-form" data-bs-toggle="modal">
    Agregar nuevo sitio
  </button>
  <table class="table table-hover">
    <thead class="table-dark">
      <tr>
        <th scope="col">#</th>
        <th>Nombre del sitio</th>
        <th>URL</th>
        <th>Profundidad</th>
        <th>Frecuencia</th>
        <th>Estado</th>
        <th class="text-center">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(website, index) in websites">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ website.nombre }}</td>
        <td>{{ website.url }}</td>
        <td>{{ website.niveles }}</td>
        <td>{{ website.frecuencia }}</td>
        <td>{{ }}</td>
        <td class="text-center">
          <span class="fs-4">
            <i class="bi bi-exclamation-triangle"></i>
            <i class="bi bi-database ms-2 a-option" @click="gotoJobs(website.id)"></i>
            <i @click="setWebsiteDetails(website.id)" data-bs-toggle="modal"
              data-bs-target="#staticBackdrop" class="bi bi-pencil-square ms-2 a-option"></i>
            <i @click="deleteWebsite(website.id)" class="bi bi-trash3-fill ms-2 a-option"></i></span>
        </td>
      </tr>
    </tbody>
  </table>
  <WebsiteDetails :website="website" :resetWebsite="resetWebsite" :getWebsites="getWebsites" />
</template>

<style scoped>
.a-option {
  cursor: pointer;
}
</style>