<script setup>
import WebsiteDetails from '@/components/Inicio/WebsiteDetails.vue'
import Swal from 'sweetalert2'

import { ref } from 'vue'
import { useRouter } from "vue-router";
import { client } from '../../types/ApiClient';

const website = ref({})
const router = useRouter();
const loading = ref(true);

const setWebsiteDetails = (id) => {
  props.loading = true;
  client['SitioController.findById'](id).then(
    result => {
      website.value = result.data;
      props.loading = false;
    }
  )
}

const resetWebsite = () => {
  website.value = {}
}

const deleteWebsite = async (idSitio) => {
  Swal.fire({
    title: '¿Estas seguro?',
    text: "Estas a punto de eliminar el sitio web de forma permanente",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!',
    cancelButtonText: 'No, cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      props.loading = true;
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
        .finally(() => {
          props.loading = false;
        }
        );
    }
  })
}

const changeEnabled = async (website) => {
  let title = "";
  let text = "";
  let estado = "";

  if (!website.habilitado) {
    title = 'Confirmar habilitacion';
    text = `¿Está seguro de que desea habilitar este sitio?
      Una vez habilitado, el sitio estará disponible para su procesamiento.`;
    estado = 'habilitado'
  }
  else {
    title = "Confirmar deshabilitacion";
    text = `¿Está seguro de que desea deshabilitar este sitio? 
      Deshabilitar el sitio lo detendrá temporalmente en el procesamiento.`;
    estado = 'deshabilitado'
  }
  Swal.fire({
    title: title,
    text: text,
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, confirmar!',
    cancelButtonText: 'No, cancelar',
  })
  .then((result) => {
    if (result.isConfirmed) {
      props.loading = true;
      client['SitioController.updateHabilitado']({ id: website.id }, { habilitado: !website.habilitado }).then(() => {
        Swal.fire(
          'Actualizado',
          `El sitio web ahora se encuentra ${estado}`,
          'success'
        )
        props.getWebsites();
      })
        .catch(e => {
          console.log(e)
          Swal.fire(
            'Error',
            'No se pudo actualizar el sitio',
            'error'
          )
        })
        .finally(() => {
          props.loading = false;
        }
        );
    }
  })
  .catch(error => {
    console.log(error)
  })
}

// Router
const gotoJobs = (websiteId) => {
  router.push(`/jobs/${websiteId}`)
}

const props = defineProps({
  getWebsites: Function,
  websites: Array,
  loading: Boolean,
})

</script>

<template>
  <div class="row justify-content-around mb-5 mt-5">
    <h1 class="fw-bold mb-2"> Sitios </h1>
    <!-- Spinner -->
    <div v-if="props.loading" class="d-flex justify-content-center align-items-center mt-4">
      <div class="spinner-border" role="status" style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- Se realizo la carga, renderizo lista -->
    <div v-else>
      <div v-for="(website, index) in websites" class="col-12 mt-3" style="position: relative;">
        <div class="d-flex p-4 align-items-center website-item-list">
          <div class="col-lg-4" style="line-height: .8;">
            <h1 class="fw-bold" style="font-size: 1.2em;">{{ website.nombre }} </h1>
            <span class="fs-6">{{ website.url }}</span>
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
          <div class="col-lg-2">
            <span class="d-flex align-items-center ms-2" @click="gotoJobs(website.id)">
              <button class="btn btn-dark" style="width: 7em;">Ver tareas</button>
            </span>
          </div>

          <span style="position: absolute; right: 2.5%; bottom: 8%;">
            <i 
              @click="changeEnabled(website)" 
              :class="{'bi bi-toggle-on a-option fs-5': website.habilitado, 'bi bi-toggle-off a-option fs-5': !website.habilitado}">
            </i>
            <i @click="setWebsiteDetails(website.id)" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
              class="bi bi-pencil-square ms-2 a-option fs-5"></i>
              <i v-if="website.habilitado === true" 
                class="bi bi-trash3-fill ms-2 fs-5" 
                style="color: #21252932;"
              ></i>
              <i v-else @click="deleteWebsite(website.id)" class="bi bi-trash3-fill ms-2 a-option fs-5"></i>
          </span>
        </div>
      </div>
    </div>

  </div>
  <WebsiteDetails :website="website" :resetWebsite="resetWebsite" :getWebsites="getWebsites" />
</template>

<style scoped>
.a-option {
  cursor: pointer;
}

.website-item-list {
  background-color: #eaeaeab6;
  border-radius: .7em;
  flex-wrap: wrap;
}

.website-item-list:hover {
  background-color: #e1e1e1a2;
}
</style>