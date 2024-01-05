<script setup>

const props = defineProps({
  user: Object,
  website: Object
})

</script>

<template>
  <div class="container-fluid" style="background-color: #eaeaea98;">
    <div class="container py-5">
      <!-- <div class="px-5 pb-4 mb-4"> -->
      <!-- <div class="p-5"> -->
        <h1 class="display-6 fw-bold">{{ website.nombre }}</h1>
        <span> {{ website.url }}</span>
      <!-- </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>