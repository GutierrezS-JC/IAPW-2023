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
const loading = ref(true);

// Configurando token
const configureToken = async () => {
  const token = await getAccessTokenSilently();
  client.defaults.headers['authorization'] = `Bearer ${token}`
}

const getWebsites = () => {
  loading.value = true;
  client['SitioController.findByEmail'](user.value.email).then(
    result => {
      websites.value = result.data;
    }
  ).finally(() => {
    loading.value = false;
  });
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
        <WebsitesList :getWebsites="getWebsites" :websites="websites" :loading="loading" />
      </div>
      <WebsiteAside />
    </div>
  </div>
</template>
