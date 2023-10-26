<template>
  <div class="container mt-5">
    <h1>Sitos web generados</h1>
    <button class="btn btn-dark">Agregar nuevo sitio</button>
    <table class="table table-hover mt-5">
      <thead class="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre del sitio</th>
          <th scope="col">URL</th>
          <th scope="col">Profundidad</th>
          <th scope="col">Frecuencia</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(website, index) in websites">
          <th scope="row">{{ index }}</th>
          <td>{{ website.nombre }}</td>
          <td>{{ website.url }}</td>
          <td>{{ website.niveles }}</td>
          <td>{{ website.frecuencia }}</td>
          <td> <button class="btn btn-sm btn-dark px-3">Editar</button> </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default{
    props:{
      websites:{
        type:Array,
        required: true
      }
    }
  }
</script>