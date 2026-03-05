<template>
  <div class="container py-5">
    <h2 class="text-center mb-5 animate__animated animate__fadeIn">
      Sumate a la Biblioteca
    </h2>

    <!-- COMPONENTE TESTIMONIOS -->
    <section class="mb-5">
      <div class="row g-4">
        <div
          class="col-12 col-md-6"
          v-for="testimonio in testimonios"
          :key="testimonio.id"
        >
          <TestimonioCard
            :mensaje="testimonio.mensaje"
            :autor="testimonio.autor"
            :imagen="testimonio.imagen"
          />
        </div>
      </div>
    </section>

    <!-- CONTACTO -->
    <section class="text-center mt-5">
      <h3 class="fw-bold mb-3 text-center">
        ¿Querés participar o donar libros?
      </h3>

   <p class="lead text-muted text-center mb-4 px-3 px-md-5">
  La Biblioteca Comunitaria es un proyecto colaborativo que crece gracias
  al compromiso de vecinos y lectores. Si querés donar libros, participar
  en actividades o sumarte como voluntario, completá el formulario o
  escribinos. ¡Tu aporte ayuda a fortalecer el acceso a la lectura en
  nuestra comunidad!
</p>

   <p class="lead text-muted text-center mb-4 px-3 px-md-5">
  Creemos que los libros pueden conectar a las personas, generar espacios
  de encuentro y promover el aprendizaje compartido. Cada libro donado,
  cada actividad organizada y cada persona que se suma aporta a construir
  una comunidad más participativa y con mayores oportunidades de acceso a
  la cultura y al conocimiento.
</p>
   <p class="lead text-muted text-center mb-4 px-3 px-md-5">
 Con tu ayuda podemos crecer!
</p>
      <a
        :href="gmailLink"
        target="_blank"
        class="btn btn-danger btn-lg px-4 shadow rounded-pill animate__animated animate__pulse animate__delay-1s"
      >
        📧 Enviar Email
      </a>
    </section>
  </div>
</template>

<script>
import TestimonioCard from '../components/TestimonioCard.vue';
import laura from '../assets/img/testimonio-laura.jpg';
import pedro from '../assets/img/testimonio-pedro.jpg';

export default {
  name: 'Sumate',

  components: {
    TestimonioCard,
  },

  data() {
    return {
      testimonios: [
        {
          id: 1,
          mensaje: 'Gracias a esta biblioteca, mi hijo comenzó a leer.',
          autor: 'Laura',
          imagen: laura,
        },
        {
          id: 2,
          mensaje: 'Donar mis libros fue la mejor decisión.',
          autor: 'Pedro',
          imagen: pedro,
        },
      ],
    };
  },

  computed: {
    gmailLink() {
      const destinatario = 'biblioteca@comunitaria.com';
      const asunto = 'Quiero participar en la Biblioteca Comunitaria';
      const cuerpo =
        'Hola, me gustaría recibir más información sobre cómo participar en la Biblioteca Comunitaria.';

      return `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${encodeURIComponent(
        asunto
      )}&body=${encodeURIComponent(cuerpo)}`;
    },
  },
};
</script>


