<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-8">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-12 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">
                <form action="" method="post">
                  <h1 class="pb-2 text-center display-6" style="letter-spacing: 1px;">Inicio de sesion</h1>
                  <div class="mb-4">
                    <label class="form-label" for="username">Nombre de usuario</label>
                    <input type="text" name="username" id="username" class="form-control form-control" />
                  </div>

                  <div class="mb-4">
                    <label class="form-label" for="password">Contraseña</label>
                    <input type="password" name="password" id="password" class="form-control form-control" />
                  </div>

                  <div class="pt-2 mb-4">
                    <input class="btn btn-dark btn-block px-4" type="submit" value="Iniciar Sesion">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>