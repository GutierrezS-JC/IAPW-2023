<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import JobsHead from '../components/Jobs/JobsHead.vue';
import JobsList from '../components/Jobs/JobsList.vue'

import { useAuth0 } from "@auth0/auth0-vue";

import { ref } from 'vue'
import { useRoute } from "vue-router";
import { onBeforeMount } from 'vue'
import { client } from '../types/ApiClient';

// Routes
const route = useRoute();

// Metodos de AUTH0
const { isAuthenticated, user } = useAuth0();

// Objetos obtenidos desde la BD
const website = ref({})
const websiteJobs = ref([])

const getWebsite = (websiteId) => {
  client['SitioController.findById'](websiteId).then(
    result => website.value = result.data
  )
}

const getWebsiteJobs = (websiteId) => {
  client['SitioTareaController.find'](websiteId).then(
    result => websiteJobs.value = result.data
  )
}

onBeforeMount(async () => {
  getWebsite(route.params.id);
  getWebsiteJobs(route.params.id);
});

</script>

<template>
  <AppHeader :isAuthenticated="isAuthenticated" />
  <JobsHead :user="user" :website="website" />
  <div class="container mt-3" style="min-height: 30em;">
    <JobsList :websiteJobs="websiteJobs" />
  </div>
</template>
