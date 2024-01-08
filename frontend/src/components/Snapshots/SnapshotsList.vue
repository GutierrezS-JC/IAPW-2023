<script setup>
import { ref } from 'vue'
import { JsonViewer } from "vue3-json-viewer"

import "vue3-json-viewer/dist/index.css";

const snapshotSelected = ref({})

const handleSnapshotSelect = (snapshot) => {
  snapshotSelected.value = snapshot
}

const props = defineProps({
  snapshots: Array
})

</script>

<template>
  <div class="container">
    <div class="mt-4 mb-5">
      <div class="row">
        <!-- Barra lateral a la izquierda -->
        <div class="col-md-4 sidebar">
          <ul class="list-group">
            <li v-for="(snapshot, index) in snapshots" class="list-group-item p-4 text-break"
              @click="handleSnapshotSelect(snapshot)">
              {{ snapshot.nombre }}
            </li>
          </ul>
        </div>

        <!-- Contenido a la derecha -->
        <div class="col-md-8 content" style="background-color: #f6f6f6;">

          <!-- Detalles de snapshot -->
          <div class="px-5 py-4">
            <span style="display: flex; flex-wrap: wrap; align-items: center;">
              <h1 class="display-5 fs-1 text-break">{{ snapshotSelected.nombre }}</h1>
            </span>
            <hr />
            <h5 class="mt-2" style="font-size: large; font-weight: bold;">
              Fecha de registro: {{ new Date(snapshotSelected.timestamp).toLocaleDateString() }}
            </h5>
            <h4 class="mt-2" style="font-size: large; font-weight: bold;">
              Hora de registro: {{ new Date(snapshotSelected.timestamp).toLocaleTimeString() }}
            </h4>
            <span class="badge rounded-pill fs-6 text-bg-dark pb-2 px-3">{{ snapshotSelected.estado }}</span>
            <hr />

            <!-- Documentos (JSON) -->
            <div>
              <h2>Documentos</h2>
              <div class="mt-2">
                <div v-for="(documento, index) in snapshotSelected.documentos">
                  <JsonViewer :value="documento" :expanded="true" :expand-depth="5" copyable sort theme="dark" boxed />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.sidebar {
  overflow-y: auto;
  max-height: 800px;
  /* border-right: 1px solid #ccc; */
}

.content {
  overflow-y: auto;
  max-height: 800px;
}

li {
  cursor: pointer;
}

li:hover {
  background-color: #e9e9e9;
}
</style>