<script setup>
import WebsitesAdd from './WebsitesAdd.vue';

const props = defineProps({
  getWebsites: Function
})

</script>

<template>
  <div class="p-5 mb-4" style="background-color: #eaeaea; border-bottom: 1px solid #dee2e6 !important;">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Sitios web generados</h1>
      <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in
        previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your
        liking.</p>
      <button class="btn btn-dark btn-lg" type="button" data-bs-target="#modal-add-form" data-bs-toggle="modal">
        Agregar nuevo sitio
      </button>
    </div>
  </div>
  <WebsitesAdd :getWebsites="getWebsites" />
</template>