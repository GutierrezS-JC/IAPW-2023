<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Editar sitio</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="resetWebsite()"></button>
        </div>

        <div class="modal-body">
          <form>
            <div class="mb-2">
              <label for="name-form" class="col-form-label">Nombre del sitio:</label>
              <input type="text" class="form-control" id="name-form" v-model="website.nombre" disabled>
            </div>
            <div class="mb-2">
              <label for="url-form" class="col-form-label">URL:</label>
              <input type="text" class="form-control" id="url-form" v-model="website.url">
            </div>
            <div class="mb-2">
              <label for="profundidad-form" class="col-form-label">Pronfudidad/niveles:</label>
              <input type="text" class="form-control" id="profundidad-form" v-model.number="website.niveles">
            </div>
            <div class="mb-2">
              <label for="frecuencia-form" class="col-form-label">Frecuencia</label>
              <input type="text" class="form-control" id="frecuencia-form" v-model.number="website.frecuencia">
            </div>
            <div class="mb-2">
              <label for="docExtractor-form" class="col-form-label">Extractor de documento</label>
              <textarea class="form-control" id="docExtractor-form" rows="3" v-model="website.docExtractor"
                spellcheck="false"></textarea>
            </div>
            <div class="mb-2">
              <label for="custom-selector-form" class="col-form-label">Selector de links (opcional)</label>
              <input type="text" class="form-control" id="custom-selector-form" v-model="website.customLinkSelector">
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="resetWebsite()">Cerrar</button>
          <button @click="editWebsite(props.website.id)" type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'
import { client } from '../../types/ApiClient';

const props = defineProps({
  website: Object,
  resetWebsite: Function,
  getWebsites: Function,
})

const editWebsite = async (id) => {
  client['SitioController.updateById'](id, props.website).then(() => {
    Swal.fire(
      'Modificado!',
      'El sitio web ha sido modificado correctamente',
      'success'
    )
    props.getWebsites();
  })
    .catch(e => {
      console.log(e)
      Swal.fire(
        'Error',
        'No se pudo modificar el sitio',
        'error'
      )
    })
}
</script>