<script setup>
import UserAuth from './components/UserAuth/UserAuth.vue';
// import { useAuth0 } from "@auth0/auth0-vue";
// import { useAuthStore } from '@/stores/userAuthStore.js';

// import { RouterView } from 'vue-router'
// import { onMounted } from 'vue'

// const { isAuthenticated } = useAuth0();
// const { user } = useAuth0();
// const { getAccessTokenSilently } = useAuth0();
// const authStore = useAuthStore()

// async function setAuthStore() {
//   if (isAuthenticated) {
//     try {
//       const token = await getAccessTokenSilently();
//       authStore.login(token, user.value)
//     }
//     catch (e) {
//       console.log(e)
//     }
//   } else {
//     authStore.logout()
//   }
// }
// onMounted(() => setAuthStore())
</script>

<template>
  <Suspense>
    <UserAuth />
  </Suspense>
  <RouterView />
</template>
