<script setup>
import { onMounted } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import { useAuthStore } from '@/stores/userAuthStore.js';

const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
const authStore = useAuthStore();

// Este metodo va a reemplazar (eventualmente si alguna vez funciona) la consulta reiterativa del token y datos de usuario
// en cada vista seteando un estado global a traves de pinia... de momento no se usa ni pretende ser usado ya que genera
// mas errores que soluciones 
const setAuthStore = async () => {
  if (isAuthenticated.value) {
    try {
      const token = await getAccessTokenSilently();
      authStore.login(token, user.value);
    }
    catch (err) {
      console.log(err)
    }
  }
  else {
    authStore.logout();
  }
}

onMounted(() => setAuthStore());
</script>