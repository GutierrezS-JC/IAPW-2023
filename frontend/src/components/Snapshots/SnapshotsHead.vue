<script setup>

const props = defineProps({
  jobInfo: Object
})

</script>

<template>
  <!-- Datos del job (tarea) -->
  <div class="container mt-0 mt-sm-4"
    style="background-color: #000000; border-top-left-radius: .7em; border-top-right-radius: .7em; padding-right: 0;">
    <div class="p-5" style="color: white; position: relative; overflow: hidden;">
      <h1 class="display-6 fw-bold">{{ jobInfo.nombre }}</h1>
      <h2 class="fs-4">{{ jobInfo.id }}</h2>
      <div class="badge bg-light text-wrap fs-6" style="color: black;">
        {{ jobInfo.estado }}
      </div>
      <div class="mt-2">
        <span class="fw-bold">Fecha de registro:</span> <span> {{ new Date(jobInfo.timestamp).toLocaleDateString() }}</span>
      </div>
      <i class="bi bi-clock-fill"
        style="font-size: 18em; position: absolute; bottom: -.45em; right: -.12em; color: rgba(255, 255, 255, 0.159);"></i>
    </div>
  </div>

  <!-- Buscador -->
  <div class="container"
    style="background-color: #212529; border-bottom-left-radius: .7em; border-bottom-right-radius: .7em; padding-right: 0;">
    <div class="py-4 px-5 d-flex"
      style="color: white; position: relative; overflow: hidden; flex-wrap: wrap; align-items: center;">
      <div>
        Buscar
        <input type="text" class="form-control mt-1" placeholder="Nombre de tarea...">
      </div>
      <div class="ms-4">
        Fecha de inicio
        <input type="date" class="form-control mt-1">
      </div>
      <div class="ms-4">
        Fecha de fin
        <input type="date" class="form-control mt-1">
      </div>
      <div class="ms-4">
        Estado
        <select class="form-select mt-1" aria-label="Default select example">
          <option selected>Todos</option>
          <option value="1">Finalizado</option>
          <option value="2">En proceso</option>
          <option value="3">Error</option>
        </select>
      </div>

      <div class="ms-4">
        <button type="button" class="btn btn-outline-light mt-4">Buscar</button>
      </div>
    </div>
  </div>
</template>