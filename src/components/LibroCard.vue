<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
    <div
      class="card h-100 shadow-sm"
      :class="libro.disponible ? 'border-success' : 'border-danger'"
    >
      <img
        :src="libro.portada || portadaDefault"
        class="card-img-top"
      />

      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ libro.titulo }}</h5>
        <p><strong>Autor:</strong> {{ libro.autor }}</p>
        <p><strong>Género:</strong> {{ libro.genero }}</p>
        <p><strong>Idioma:</strong> {{ libro.idioma }}</p>

        <button
          @click="$emit('cambiar-estado')"
          class="btn btn-sm mb-2"
          :class="libro.disponible ? 'btn-success' : 'btn-danger'"
        >
          {{ libro.disponible ? 'Disponible' : 'Prestado' }}
        </button>

        <button
          @click="$emit('editar-libro')"
          class="btn btn-warning btn-sm mb-2"
        >
          Editar
        </button>

        <button
          @click="$emit('eliminar-libro')"
          class="btn btn-outline-dark btn-sm"
        >
          Eliminar
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import portadaDefault from '../assets/img/portada-default.jpg'

export default {
  name: 'LibroCard',
  props: ['libro'],
  data() {
    return {
      portadaDefault
    }
  }
};
</script>
