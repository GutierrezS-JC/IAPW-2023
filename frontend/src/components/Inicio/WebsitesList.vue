<script setup>
import WebsiteDetails from '@/components/Inicio/WebsiteDetails.vue'
import WebSiteService from '@/services/WebsiteServiceClass'

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

const resetWebsite = () => {
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
        <td> <span class="fs-4">
            <i @click="setWebsiteDetails(website.idSitio)" style="cursor: pointer;" data-bs-toggle="modal"
              data-bs-target="#staticBackdrop" class="bi bi-pencil-square me-4"></i>
            <i @click="deleteWebsite(website.idSitio)" class="bi bi-trash3-fill" style="cursor: pointer;"></i></span>
        </td>
      </tr>
    </tbody>
  </table>
  <WebsiteDetails :website="website" :resetWebsite="resetWebsite" />
</template>

<script>
import Swal from 'sweetalert2'

export default {
  methods: {
    async deleteWebsite(idSitio) {
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
          WebSiteService.delete(idSitio).then(
            Swal.fire(
              'Eliminado!',
              'El sitio web ha sido eliminado',
              'success'
            )
          )
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
  }
}
</script>