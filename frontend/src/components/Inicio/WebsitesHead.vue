<script setup>
// import WebsitesAdd from './WebsitesAdd.vue';
import WebsitesAdd from '@/components/Inicio/WebsitesAdd.vue';
import undraw_hello from '@/assets/undraw_hello.svg';

const props = defineProps({
  getWebsites: Function,
  user: Object
})

</script>

<template>
  <div class="row" style="background-color: #eaeaeab6; border-radius: .7em; position: relative;">
    <div class="col-12 col-lg-8 px-5 py-4">
      <h1 class="display-6 fw-bold">Hola, {{ user.name }} </h1>
      <p class="fs-5">Bienvenido de vuelta a Starcrawler. ¿Listo para seguir explorando la web? Hace click en el boton a
        continuación :)</p>
      <img :src="undraw_hello" alt="Welcome back imagen"
        style="max-width: 350px; position: absolute; right: 0; bottom: 0;" />
    </div>
  </div>
  <button class="new-site-button mt-3" style="width: 100%; height: 3em; box-shadow: 1em;" type="button"
    data-bs-target="#modal-add-form" data-bs-toggle="modal">Agregar un nuevo sitio</button>
  <!-- Mobile view -->
  <!-- <div class="col-12 col-lg-5 mt-sm-3 mt-lg-0">
    <div class="row">
      <div class="col-12 col-sm-6 mt-3 mt-sm-0">
        <div class="px-4 py-3 d-flex justify-content-center" style="background-color: #eaeaea98; border-radius: .7em;">
          <h1 class="display-5 fw-bold">04</h1>
          <span class="fs-5 fw-bold ms-2" style="align-self: center; line-height: 1.2;">Sitios registrados</span>
        </div>
      </div>
      <div class="col-12 col-sm-6 mt-3 mt-sm-0">
        <div class="px-4 py-3 d-flex justify-content-center" style="background-color: #eaeaea98; border-radius: .7em;">
          <h1 class="display-5 fw-bold">11</h1>
          <span class="fs-5 fw-bold ms-2" style="align-self: center; line-height: 1.2;">Tareas ejecutadas</span>
        </div>
      </div>
      <div class="col-12 mt-3">
        <div class="px-4 py-3 d-flex justify-content-center" style="background-color: #eaeaea98; border-radius: .7em;">
          <h1 class="display-5 fw-bold">102</h1>
          <span class="fs-5 fw-bold ms-2" style="align-self: center; line-height: 1.2;">Snapshots capturados</span>
        </div>
      </div>
    </div>
  </div> -->

  <!-- Componente modal para agregar un sitio -->
  <WebsitesAdd :getWebsites="getWebsites" :user="user" />
</template>

<style scoped>
.new-site-button {
  box-shadow: 5px 5px #000;
  border: 2px solid #000 !important;
  border-radius: .5em;
}

.new-site-button:hover {
  opacity: 1 !important;
}
</style>