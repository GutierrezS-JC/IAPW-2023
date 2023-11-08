<script setup>
  import LoginForm from '@/components/Home/LoginForm.vue';
  import LoginButton from '@/components/Buttons/LoginButton.vue';

</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row vh-100">
        <div class="col-6" style="background-color: #111111; position: relative;">
          <div class="container" style="width: 50%;">
          <!-- <div class="col-6 d-flex align-items-center justify-content-center" style="background-color: black"> -->
            <span class="d-flex d-inline-block" style="margin-top:5rem; margin-bottom: 10rem;">
              <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40"/>
              <h1 style="color: white; font-size: 1.5rem;" class="ms-2 mt-1"> Starcrawler </h1>
            </span>
            
            <div>
              <h1 style="color: white;">Start building with your free plan</h1>
              <p class="mt-3" style="color: white;">No credit card required.</p>
            </div>

            <!-- <button class="btn btn-sm btn-outline-light mt-4">Volver</button> -->
            <LoginButton/>
          </div>
        </div>
        
        <!-- SECCION FORMULARIO -->
        <div class="col-6 left-col"> 
          <LoginForm/>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .left-col{
    background: rgb(56,149,131);
    background: linear-gradient(180deg, rgba(56,149,131,1) 0%, rgba(92,219,148,1) 50%, rgba(141,228,175,1) 100%);
  }

  .login-footer{
    justify-content: space-between;
    max-width: 52rem;
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  
  .login-footer p{
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    color: rgb(171, 171, 171);
  }
</style>
