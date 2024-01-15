<script setup>
  import { useAuth0 } from "@auth0/auth0-vue";

  const { loginWithRedirect } = useAuth0()
  
  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        target: "/inicio",
      },
    });
  }
</script>

<template>
  <button id="boton-login" @click="handleLogin" class="btn btn-sm btn-outline-light">Iniciar sesion</button>
</template>