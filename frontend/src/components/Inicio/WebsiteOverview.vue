<script setup>
import undraw_hello from '@/assets/undraw_hello.svg';
</script>

<template>
  <div class="container mb-5" style="margin-top: 4em;">
    <div class="row justify-content-around">
      <div class="col-12 col-lg-7">

        <div class="row" style="background-color: #eaeaea98; border-radius: .7em; position: relative;;">
          <div class="col-12 col-lg-8 px-5 py-4">
            <h1 class="display-6 fw-bold">Hola, {{ user.name }} </h1>
            <p class="fs-5">Using a series of utilities, you can create this jumbotron, just like the one in
              previous versions of Bootstrap.</p>
            <img :src="undraw_hello" alt="Welcome back imagen"
              style="max-width: 350px; position: absolute; right: 0; bottom: 0;" />
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-5">
        <p>Imagen 2</p>
      </div>
    </div>

    <!-- Esta row solo aparace en las vistas menores al tamaño XL (definido por Bootstrap) -->
    <div class="mt-4">
      <h1 class="fw-bold" style="font-size: 2em;">Resumen</h1>
      <div class="row overflow-auto d-flex flex-nowrap d-xl-none">
        <div class="col-8 col-lg-4 mx-3">
          <div class="card text-bg-dark mb-3">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Dark card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>

        <div class="col-8 col-lg-4 mx-3">
          <div class="card text-bg-dark mb-3">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Dark card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>

        <div class="col-8 col-lg-4 mx-3">
          <div class="card text-bg-dark mb-3">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Dark card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Esta row aparece en las vistas a partir del tamaño XL -->
    <div class="mt-4">
      <h1 class="fw-bold" style="font-size: 2em;">Resumen</h1>
      <div class="row test d-none d-xl-block">
        <div class="col-xl-4">
          <div class="card text-bg-dark mb-3">
            <div class="card-body d-flex justify-content-center">
              <h5 class="card-title me-3" style="font-size: 3.2em; font-weight: bold;">03</h5>
              <p class="card-text" style="font-size: 1.5em; font-weight: bold; align-self: center;">Sitios registrados</p>
            </div>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="card text-bg-dark mb-3">
            <div class="card-body d-flex justify-content-center">
              <h5 class="card-title me-3" style="font-size: 3.2em; font-weight: bold;">10</h5>
              <p class="card-text" style="font-size: 1.5em; font-weight: bold; align-self: center;">Tareas registradas</p>
            </div>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="card text-bg-dark mb-3">
            <div class="card-body d-flex justify-content-center">
              <h5 class="card-title me-3" style="font-size: 3.2em; font-weight: bold;">104</h5>
              <p class="card-text" style="font-size: 1.5em; font-weight: bold; align-self: center;">Snapshots capturados
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1199.98px) {
  .test {
    display: none;
  }
}

@media (min-width: 1200px) {
  .test {
    display: block ruby !important;
  }
}
</style>