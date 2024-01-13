<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import JobsEdit from "./JobsEdit.vue";

const router = useRouter();

const jobSelected = ref(null);

// Router
const goToSnapshot = (jobId) => {
  router.push(`/snapshots/${jobId}`)
}

const handleEdit = (event, job) => {
  event.stopPropagation();
  jobSelected.value = job
}

const props = defineProps({
  websiteJobs: Array,
  wasFiltered: Boolean,
  resetList: Function,
})

</script>

<template>
  <div class="mb-3">
    <JobsEdit :jobSelected="jobSelected" />
    <h1 class="fw-bold mb-1" style="font-size: 2em;"> Tareas </h1>
    <button v-if="wasFiltered" type="button" class="btn btn-outline-dark btn-sm" @click="props.resetList()">
      Ver todas las tareas
    </button>
  </div>
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
              <i class="bi bi-pencil-square a-option fs-4"
                data-bs-target="#modal-edit-job-form" 
                data-bs-toggle="modal"
                @click="handleEdit($event, job)"
              ></i>
              <i class="bi bi-trash3-fill ms-3 a-option fs-4"></i>
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

tbody th,
tbody td {
  padding-top: .8em;
  padding-bottom: .8em;
}
</style>