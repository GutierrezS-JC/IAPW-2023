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
  <!-- <h1 class="fw-bold mb-3"> Sitios </h1> -->
  <!-- <table class="table table-hover">
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
  </table> -->
  <!-- <div class="mb-5"> -->

  <div class="row justify-content-around mb-5 mt-5">
    <h1 class="fw-bold mb-3"> Sitios </h1>

    <div v-for="(website, index) in websites" class="col-12 mt-3" style="position: relative;">
      <div class="d-flex p-4 align-items-center"
        style="background-color: #eaeaea98; border-radius: .7em; flex-wrap: wrap;">
        <div class="col-lg-5" style="line-height: .8;">
          <h1 class="fw-bold" style="font-size: 1.4em;">{{ website.nombre }} </h1>
          <span class="fs-5" style="font-size: 1.1em;">{{ website.url }}</span>
        </div>
        <div class="col-lg-2">
          <span class="d-flex align-items-center">
            <i class="bi bi-clock-fill me-2 fs-4"></i>
            <h1 style="font-size: 1.1em; margin-bottom: 0;">{{ website.frecuencia }}min</h1>
          </span>
        </div>
        <div class="col-lg-2">
          <span class="d-flex align-items-center">
            <i class="bi bi-stack me-2 fs-4"></i>
            <h1 style="font-size: 1.1em; margin-bottom: 0;">{{ website.niveles }} niveles</h1>
          </span>
        </div>
        <div class="col-lg-3">
          <span class="d-flex align-items-center ms-2">
            <button class="btn btn-dark" style="width: 7em;">Ver tareas</button>
          </span>
        </div>

        <span style="position: absolute; right: 3%; bottom: 8%;">
          <i @click="setWebsiteDetails(website.id)" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
            class="bi bi-pencil-square ms-2 a-option fs-5"></i>
          <i @click="deleteWebsite(website.id)" class="bi bi-trash3-fill ms-2 a-option fs-5"></i>
        </span>
      </div>
    </div>

  </div>
  <!-- </div> -->
  <WebsiteDetails :website="website" :resetWebsite="resetWebsite" :getWebsites="getWebsites" />
</template>

<style scoped>
.a-option {
  cursor: pointer;
}
</style>