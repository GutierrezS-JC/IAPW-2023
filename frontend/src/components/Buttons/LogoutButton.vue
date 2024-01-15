<script setup>
  import { useAuth0 } from "@auth0/auth0-vue";
  const { logout } = useAuth0();
  const handleLogout = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      }
    });
</script>

<template>
  <button @click="handleLogout" class="btn btn-outline-light" id="cerrar-sesion-button">Cerrar sesion</button>
</template>