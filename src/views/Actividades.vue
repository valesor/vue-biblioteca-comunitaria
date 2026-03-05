<template>
  <div class="container py-5">
    <h2 class="text-center mb-4 animate__animated animate__fadeIn">
      Actividades en la Biblioteca Comunitaria
    </h2>

    <div class="row g-4">
      <div
        class="col-md-4"
        v-for="actividad in actividades"
        :key="actividad.id"
      >
        <div class="card h-100 shadow-sm animate__animated animate__fadeInUp">
          <img :src="actividad.imagen" class="card-img-top" />
          <div class="card-body text-center">
            <h5 class="fw-bold">{{ actividad.titulo }}</h5>
            <p>{{ actividad.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Ejemplo de v-if / v-else -->
    <div class="text-center mt-4">
      <p v-if="actividades.length === 0">No hay actividades programadas.</p>
      <div v-else class="text-center mt-4">
        <span class="badge bg-primary fs-6 px-4 py-2 shadow-sm">
          Total de actividades: {{ actividades.length }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Actividades',

  data() {
    return {
      actividades: [
        {
          id: 1,
          titulo: 'Talleres de Lectura',
          descripcion: 'Participa de nuestros talleres semanales.',
          imagen: '/src/assets/img/card-talleres.jpg',
        },
        {
          id: 2,
          titulo: 'Charlas y Encuentros',
          descripcion: 'Asiste a nuestras charlas literarias.',
          imagen: '/src/assets/img/card-charlas.jpg',
        },
        {
          id: 3,
          titulo: 'Club de Libros',
          descripcion: 'Únete a nuestro club de lectura.',
          imagen: '/src/assets/img/card-libros.jpg',
        },
      ],
    };
  },
};
</script>
