<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// Router
const goToSnapshot = (jobId) => {
  router.push(`/snapshots/${jobId}`)
}

const props = defineProps({
  websiteJobs: Array
})

</script>

<template>
  <h1 class="fw-bold mb-3" style="font-size: 2em;"> Tareas </h1>
  <div class="table-responsive">
    <table class="table table-hover align-middle">
      <thead class="table-dark">
        <tr>
          <th scope="col">#</th>
          <th>Nombre</th>
          <th>Fecha de registro</th>
          <th>Hora de registro</th>
          <th>Estado</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(job, index) in websiteJobs" @click="goToSnapshot(job.id)">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ job.nombre }}</td>
          <td>{{ new Date(job.timestamp).toLocaleDateString() }}</td>
          <td>{{ new Date(job.timestamp).toLocaleTimeString() }}</td>
          <td>
            <div class="badge bg-dark p-2" style="color: white;">
              {{ job.estado }}
            </div>
          </td>
          <td>
            <span>
              <i class="bi bi-pencil-square ms-2 a-option fs-5"></i>
              <i class="bi bi-trash3-fill ms-2 a-option fs-5"></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
tbody tr {
  cursor: pointer;
}

tbody th, tbody td {
  padding-top: .8em;
  padding-bottom: .8em;
}
</style>