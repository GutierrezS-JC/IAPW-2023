<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { client } from '../../types/ApiClient';

const newJobName = ref('');

const resetEditJobForm = () => {
  newJobName.value = ''
}

const editJobName = async () => {
  if (!newJobName.value.trim()) {
    Swal.fire(
      'Error',
      'El nombre no puede estar vacío',
      'error'
    );
    return; 
  }
  props.jobSelected.nombre = newJobName.value
  client['TareaController.updateById'](props.jobSelected.id, props.jobSelected).then(() => {
    Swal.fire(
      'Modificado',
      'La tarea ha sido modificada correctamente',
      'success'
    )
  })
    .catch(e => {
      console.log(e)
      Swal.fire(
        'Error',
        'No se pudo actualizar la tarea',
        'error'
      )
    })

  resetEditJobForm()
}

const preventDefault = (e) => {
  e.preventDefault()
}

const props = defineProps({
  jobSelected: Object
})

</script>

<template>
  <div class="modal fade" id="modal-edit-job-form" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="editJobFormModal">Editar nombre</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="resetEditJobForm"></button>
        </div>

        <div class="modal-body">
          <form @submit="preventDefault">
            <div class="mb-2">
              <label for="name-edit-job-form" class="col-form-label">Ingrese el nuevo nombre de la tarea</label>
              <input type="text" class="form-control" id="name-edit-job-form" v-model="newJobName">
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
            @click="resetEditJobForm">Cerrar</button>
          <button type="button" class="btn btn-primary" @click="editJobName" data-bs-dismiss="modal">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  </div>
</template>