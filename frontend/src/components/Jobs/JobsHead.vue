<script setup>

const props = defineProps({
  user: Object,
  website: Object
})

</script>

<template>
  <div class="container mt-0 mt-sm-4"
    style="background-color: #000000; border-top-left-radius: .7em; border-top-right-radius: .7em; padding-right: 0;">
    <div class="p-5" style="color: white; position: relative; overflow: hidden;">
      <h1 class="display-6 fw-bold">{{ website.nombre }}</h1>
      <div class="badge bg-light text-wrap fs-6" style="color: black;">
        {{ website.url }}
      </div>
      <div class="mt-2">
        <span class="fw-bold">Niveles: {{ website.niveles }} | Frecuencia: {{ website.frecuencia }}</span>
      </div>
      <i class="bi bi-clock-fill"
        style="font-size: 18em; position: absolute; bottom: -.45em; right: -.12em; color: rgba(255, 255, 255, 0.159);"></i>
    </div>
  </div>
</template>