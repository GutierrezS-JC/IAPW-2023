<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import WebsitesList from '@/components/Inicio/WebsitesList.vue';
import WebsitesHead from '@/components/Inicio/WebsitesHead.vue';
import WebsiteAside from '../components/Inicio/WebsiteAside.vue';

import { useAuth0 } from "@auth0/auth0-vue";

import { ref } from 'vue'
import { onBeforeMount } from 'vue'
import { client } from '../types/ApiClient';

// Metodos de AUTH0
const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

// Sitios obtenidos desde BD
const websites = ref([])

// Configurando token
const configureToken = async () => {
  const token = await getAccessTokenSilently();
  client.defaults.headers['authorization'] = `Bearer ${token}`
}

const getWebsites = () => {
  client['SitioController.findByEmail'](user.value.email).then(
    result => websites.value = result.data
  )
}

onBeforeMount(async () => {
  await configureToken()
  getWebsites()
});
</script>

<template>
  <AppHeader :isAuthenticated="isAuthenticated" />

  <div class="container mb-5 mt-0 mt-sm-5">
    <div class="row">
      <div class="col-12 col-lg-7">
        <WebsitesHead :getWebsites="getWebsites" :user="user" />
        <WebsitesList :getWebsites="getWebsites" :websites="websites" />
      </div>
      <WebsiteAside />
      <!-- <div class="col-12 col-lg-5 mt-sm-3 mt-lg-0">
        <div class="row">
          <div class="col-12 col-sm-6 mt-3 mt-sm-0">
            <div class="px-4 py-3 d-flex justify-content-center"
              style="background-color: #eaeaea98; border-radius: .7em;">
              <h1 class="display-5 fw-bold">04</h1>
              <span class="fs-5 fw-bold ms-2" style="align-self: center; line-height: 1.2;">Sitios registrados</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 mt-3 mt-sm-0">
            <div class="px-4 py-3 d-flex justify-content-center"
              style="background-color: #eaeaea98; border-radius: .7em;">
              <h1 class="display-5 fw-bold">11</h1>
              <span class="fs-5 fw-bold ms-2" style="align-self: center; line-height: 1.2;">Tareas ejecutadas</span>
            </div>
          </div>
          <div class="col-12 mt-3">
            <div class="px-4 py-3 d-flex justify-content-center"
              style="background-color: #eaeaea98; border-radius: .7em;">
              <h1 class="display-5 fw-bold">102</h1>
              <span class="fs-5 fw-bold ms-2" style="align-self: center; line-height: 1.2;">Snapshots capturados</span>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
