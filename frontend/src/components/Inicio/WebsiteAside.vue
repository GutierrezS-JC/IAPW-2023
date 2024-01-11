<script setup>

const props = defineProps({
  metricas: Object,
})
</script>

<template>
  <div class="col-12 col-lg-5 mt-sm-3 mt-lg-0">
    <div class="row">
      <div class="col-12 col-sm-6 mt-3 mt-sm-0">
        <div class="px-4 py-3 d-flex justify-content-center" style="background-color: #eaeaeab6; border-radius: .7em;">
          <h1 class="display-5 fw-bold">{{ metricas.sitios < 10 ? '0' + metricas.sitios : metricas.sitios }}</h1>
          <span class="fs-5 fw-bold ms-2" style="align-self: center; line-height: 1.2;">Sitios registrados</span>
        </div>
      </div>
      <div class="col-12 col-sm-6 mt-3 mt-sm-0">
        <div class="px-4 py-3 d-flex justify-content-center" style="background-color: #eaeaeab6; border-radius: .7em;">
          <h1 class="display-5 fw-bold">{{ metricas.tareas < 10 ? '0' + metricas.tareas : metricas.tareas }}</h1>
          <span class="fs-5 fw-bold ms-2" style="align-self: center; line-height: 1.2;">Tareas ejecutadas</span>
        </div>
      </div>
      <div class="col-12 mt-3">
        <div class="px-4 py-3 d-flex justify-content-center" style="background-color: #eaeaeab6; border-radius: .7em;">
          <h1 class="display-5 fw-bold">{{ metricas.snapshots < 10 ? '0' + metricas.snapshots : metricas.snapshots }}</h1>
          <span class="fs-5 fw-bold ms-2" style="align-self: center; line-height: 1.2;">Snapshots
            capturados</span>
        </div>
      </div>
    </div>
  </div>
</template>