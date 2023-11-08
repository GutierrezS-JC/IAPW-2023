<script setup>
import { onMounted } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import { useAuthStore } from '@/stores/userAuthStore.js';

const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
const authStore = useAuthStore();

onMounted(() => {
  async function setAuthStore() {
    if (isAuthenticated.value) {
      const token = await getAccessTokenSilently();
      authStore.login(token, user.value);
    } else {
      authStore.logout();
    }
  }

  setAuthStore();
});
</script>