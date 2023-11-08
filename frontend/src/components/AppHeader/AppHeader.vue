<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import LoginButton from '@/components/Buttons/LoginButton.vue';
import LogoutButton from '@/components/Buttons/LogoutButton.vue';

const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
const token = await getAccessTokenSilently();

</script>

<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Starcrawler</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
        </ul>

        <div v-if="!isAuthenticated">
          <span>
            <LoginButton />
          </span>
        </div>

        <div v-if="isAuthenticated">
          <span style="color:white">
            {{ user.name }}
            {{ token }}
            <!-- <span class="me-3" style="color: white;">Bienvenido </span> -->
            <LogoutButton />
          </span>
        </div>

      </div>
    </div>
  </nav>
</template>