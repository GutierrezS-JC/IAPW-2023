<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import SnapshotsHead from '@/components/Snapshots/SnapshotsHead.vue';
import SnapshotsList from '@/components/Snapshots/SnapshotsList.vue';

import { onBeforeMount, ref } from 'vue'

import { useRoute } from "vue-router";
import { useAuth0 } from "@auth0/auth0-vue";
import { client } from '../types/ApiClient';

// Routes
const route = useRoute();

// Metodos de AUTH0
const { isAuthenticated, user } = useAuth0();

// Objetos obtenidos desde la BD
const jobSnapshots = ref([]);
const jobInfo = ref({});
const loading = ref(true);

const getJobSnapshots = async (jobId) => {
  try {
    const result = await client['TareaSnapshotController.find'](jobId);
    jobSnapshots.value = result.data;
  } catch (error) {
    console.error('Error fetching snapshots:', error);
    throw error;
  }
};

const getJobInfo = async (jobId) => {
  try {
    const result = await client['TareaController.findById'](jobId);
    jobInfo.value = result.data;
  } catch (error) {
    console.error('Error fetching job info:', error);
    throw error;
  }
};

onBeforeMount(async () => {
  try {
    await Promise.all([
      getJobInfo(route.params.id), getJobSnapshots(route.params.id)
    ]);
  } catch (error) {
    console.log('Error: ', error);
  } finally {
    loading.value = false;
  }
});

</script>


<template>
  <AppHeader :isAuthenticated="isAuthenticated" />

  <div v-if="loading" class="d-flex justify-content-center align-items-center" style="min-height: 90vh;">
    <div class="spinner-border" role="status" style="width: 3rem; height: 3rem;">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else>
    <SnapshotsHead :jobInfo="jobInfo" />
    <SnapshotsList :snapshots="jobSnapshots" />
  </div>
</template>