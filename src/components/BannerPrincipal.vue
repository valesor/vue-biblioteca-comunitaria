<template>
  <section class="contenedor-principal">
    <div id="carouselBanner" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/src/assets/img/banner-1.jpg" class="d-block w-100" />
          <div class="carousel-caption rounded">
            <h2 class="display-4 fw-bold">
              {{ titulo }}
            </h2>
            <p>{{ descripcion }}</p>
            <router-link :to="botonLink" class="btn boton-banner btn-lg">
              {{ botonTexto }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerPrincipal',
  props: {
    titulo: String,
    descripcion: String,
    botonTexto: String,
    botonLink: String,
  },
};
</script>
