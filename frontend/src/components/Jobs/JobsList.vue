<script setup>

const props = defineProps({
  websiteJobs: Array
})

</script>

<template>
  <h1 class="fw-bold mb-3"> Tareas </h1>
  <table class="table table-hover">
    <thead class="table-dark">
      <tr>
        <th scope="col">#</th>
        <th>Nombre</th>
        <th>Fecha de creacion</th>
        <th>Estado</th>
        <th>Cant. snapshots</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(job, index) in websiteJobs">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ job.nombre }}</td>
        <td>{{ new Date(job.timestamp).toLocaleString() }}</td>
        <td>{{ job.estado }}</td>
        <td>-</td>
        <td class="text-center">
          <span class="d-flex align-items-center ms-2">
            <button class="btn btn-dark">Ver snapshots</button>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>