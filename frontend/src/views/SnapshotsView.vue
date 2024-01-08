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

const getJobSnapshots = (jobId) => {
  client['TareaSnapshotController.find'](jobId).then(
    result => jobSnapshots.value = result.data
  )
}

const getJobInfo = (jobId) => {
  client['TareaController.findById'](jobId).then(
    result => jobInfo.value = result.data
  )
}

onBeforeMount(async () => {
  getJobInfo(route.params.id);
  getJobSnapshots(route.params.id);
});

</script>


<template>
  <AppHeader :isAuthenticated="isAuthenticated" />
  <SnapshotsHead :jobInfo="jobInfo" />
  <SnapshotsList :snapshots="jobSnapshots" />
</template>