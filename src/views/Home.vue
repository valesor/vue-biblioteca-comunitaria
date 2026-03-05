<template>
  <div>
    <!-- COMPONENTE BANNER -->
    <BannerPrincipal
      titulo="Bienvenido a la Biblioteca Comunitaria"
      descripcion="Un espacio donde los libros conectan a las personas."
      botonTexto="Explorar Libros"
      botonLink="/libros"
    />

    <!-- NOSOTROS -->
    <section class="container py-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <img
            src="/src/assets/img/nosotros-2.jpg"
            class="img-fluid rounded shadow"
          />
        </div>
        <div class="col-md-6">
          <h2 class="titulo-nosotros">Sobre Nosotros</h2>
          <p class="lead">
            <strong>La Biblioteca Comunitaria</strong> es un proyecto colectivo
            impulsado por los vecinos del barrio con el objetivo de fomentar la
            lectura, el intercambio cultural y el encuentro entre generaciones.
          </p>

          <p class="lead">
            Nuestro propósito es fortalecer los lazos del barrio a través de la
            educación, la cultura y la colaboración, creando un ambiente
            inclusivo donde todos puedan sentirse parte.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BannerPrincipal from '../components/BannerPrincipal.vue';

export default {
  name: 'Home',
  components: {
    BannerPrincipal,
  },
};
</script>
