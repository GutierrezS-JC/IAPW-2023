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
      <h1 class="display-6 fw-bold" id="title-hello">Hola, {{ user.name }} </h1>
      <p class="fs-5">Bienvenido de vuelta a Starcrawler. ¿Listo para seguir explorando la web? Hace click en el boton a
        continuación :)</p>
      <img :src="undraw_hello" alt="Welcome back imagen"
        style="max-width: 350px; position: absolute; right: 0; bottom: 0;" />
    </div>
  </div>
  <button class="new-site-button mt-3" style="width: 100%; height: 3em; box-shadow: 1em;" type="button"
    data-bs-target="#modal-add-form" data-bs-toggle="modal" id="agregar-nuevo-sitio">Agregar un nuevo sitio</button>

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