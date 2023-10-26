<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Editar sitio</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="resetWebsite()"></button>
        </div>

        <div class="modal-body">
          <form>
            <div class="mb-2">
              <label for="name-form" class="col-form-label">Nombre del sitio:</label>
              <input type="text" class="form-control" id="name-form" v-model="website.nombre">
            </div>
            <div class="mb-2">
              <label for="url-form" class="col-form-label">URL:</label>
              <input type="text" class="form-control" id="url-form" v-model="website.url">
            </div>
            <div class="mb-2">
              <label for="profundidad-form" class="col-form-label">Pronfudidad/niveles:</label>
              <input type="text" class="form-control" id="profundidad-form" v-model="website.niveles">
            </div>
            <div class="mb-2">
              <label for="frecuencia-form" class="col-form-label">Frecuencia</label>
              <input type="text" class="form-control" id="frecuencia-form" v-model="website.frecuencia">
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="resetWebsite()">Cerrar</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Guardar cambios</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      website: Object,
      resetWebsite: Function
    }
  };
</script>