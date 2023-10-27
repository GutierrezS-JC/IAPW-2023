<script setup>
  import { useAuth0 } from "@auth0/auth0-vue";
  import { RouterView } from 'vue-router'
  import { useAuthStore } from '@/stores/userAuthStore.js';
  import { onMounted } from 'vue'

  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const { getAccessTokenSilently } = useAuth0();
  const authStore = useAuthStore()
  
  async function setAuthStore() {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      authStore.login(token, user.value)
    } else {
      authStore.logout()
    }
  }
  onMounted(() => setAuthStore())
</script>

<template>
  <RouterView />
</template>
