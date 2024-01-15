<script setup>
import LoginButton from '@/components/Buttons/LoginButton.vue';
</script>

<template>
  <main>
    <div style="display: flex; height: 100vh; justify-content: center; flex-direction: column; 
      background-color: #111111; align-items: center;">
      <div style="width: 50%; position: relative;">
        <VueWriter :array="['¿Estas listo para explorar la web?']" typeSpeed="90" :iterations='1' style="color: white;" />
        <VueWriter :array="['Starcrawler']" :start="4000" :iterations='1'
          style="color: white; font-size: 1.5rem; margin-bottom: .5em;" />
        <LoginButton />
      </div>
    </div>
  </main>
</template>
