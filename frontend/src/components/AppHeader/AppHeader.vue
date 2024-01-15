<script setup>
import LogoutButton from '@/components/Buttons/LogoutButton.vue';

const props = defineProps({
  isAuthenticated: Boolean
})

</script>

<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <RouterLink to="/inicio" class="navbar-brand" id="main-title-link">Starcrawler</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/search" class="nav-link">Buscar en todos los snapshots</RouterLink>
          </li>
        </ul>

        <div v-if="isAuthenticated">
          <span style="color:white">
            <LogoutButton />
          </span>
        </div>

      </div>
    </div>
  </nav>
</template>