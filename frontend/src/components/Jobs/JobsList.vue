<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { client } from '../../types/ApiClient';
import JobsEdit from "./JobsEdit.vue";
import Swal from 'sweetalert2'

const router = useRouter();

const jobSelected = ref(null);

// Router
const goToSnapshot = (jobId) => {
  router.push(`/snapshots/${jobId}`)
}

// Edit
const handleSelect = (event, job) => {
  event.stopPropagation();
  jobSelected.value = job
}

const doNothing = (event) => {
  event.stopPropagation()
}

const handleDelete = (event, jobId) => {
  event.stopPropagation();

  Swal.fire({
    title: '¿Estas seguro?',
    text: "Estas a punto de eliminar la tarea y con ella todos sus snapshots (capturas) de forma permanente",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!',
    cancelButtonText: 'No, cancelar',
  }).then(async (result) => {
    if (result.isConfirmed) {
      await client['TareaSnapshotController.delete'](jobId)
        .then(async () => {
          console.log('Snapshots eliminados');

          await client['TareaController.deleteById'](jobId)
            .then(() => {
              Swal.fire(
                'Exito',
                'Se ha eliminado la tarea y sus correspondientes capturas',
                'success'
              );
            })
            .catch(error => {
              console.log(error);
              Swal.fire(
                'Error',
                'No se pudo eliminar la tarea',
                'error'
              );
            })
            .finally(() => {
              props.resetList()
            });
        })
        .catch(e => {
          console.log(e);
          Swal.fire(
            'Error',
            'No se pudo eliminar el sitio',
            'error'
          );
        });
    }
  });
};


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
              <i v-if="job.estado === 'En proceso'" class="bi bi-pencil-square a-option fs-4"
                style="color: #21252958; cursor: default;" @click="doNothing($event)"></i>
              <i v-else class="bi bi-pencil-square a-option fs-4" data-bs-target="#modal-edit-job-form"
                data-bs-toggle="modal" @click="handleSelect($event, job)"></i>
              <i v-if="job.estado === 'En proceso'" class="bi bi-trash3-fill ms-3 fs-4"
                style="color: #21252958; cursor: default;" @click="doNothing($event)"></i>
              <i v-else class="bi bi-trash3-fill ms-3 a-option fs-4" @click="handleDelete($event, job.id)"></i>
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