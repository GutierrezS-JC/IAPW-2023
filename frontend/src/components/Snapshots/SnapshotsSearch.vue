<script setup>
import { JsonViewer } from "vue3-json-viewer"
import "vue3-json-viewer/dist/index.css";

const reset = () => {
  props.resetSearch()
}

const props = defineProps({
  searchResults: Array,
  resetSearch: Function
})
</script>

<template>
  <div class="container p-5 mt-4 mb-4"
    style="background-color: #f6f6f6; border-radius: 0.7em; overflow-y: auto; max-height: 800px; position: relative">
    <div class="fs-3 close-results">
      <i class="bi bi-x-lg" @click="reset"></i>
    </div>
    <h1>Resultados</h1>
    <hr />
    <div class="mt-2">
      <div v-for="(result, index) in searchResults">
        <div class="p-2 text-break mt-4">
          <div class="fw-semibold fs-5">{{ result.snapshotName }}</div>
          <div class="fw-medium fs-6">{{ result.snapshotId }}</div>
          <div class="fw-medium fs-6" style="line-height: 1.4;">
            <span> Fecha de registro: {{ new Date(result.snapshotDate).toLocaleDateString() }} </span>
            <br />
            <span> Hora de registro: {{ new Date(result.snapshotDate).toLocaleTimeString() }}</span>
          </div>
          <span class="badge rounded-pill text-bg-secondary mb-3 mt-1">{{ result.snapshotStatus }}</span>
          <JsonViewer :value="result.documento" :expanded="true" :expand-depth="5" copyable sort theme="dark" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.close-results {
  position: absolute;
  right: 1.5em;
  top: 1em;
  cursor: pointer;
}
</style>