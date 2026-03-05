<template>
  <section class="container py-5">
    <h2 class="text-center mb-5 animate__animated animate__fadeIn">
      Catálogo de Libros
    </h2>

    <!-- FORMULARIO -->
    <FormularioLibro
      :libroEditar="libroEditando"
      @guardar-libro="guardarLibro"
    />

    <!-- Mensaje si no hay libros -->
    <div v-if="libros.length === 0" class="text-center text-muted mt-4">
      No hay libros cargados aún.
    </div>

    <!-- LISTA -->
    <transition-group
      name="fade"
      tag="div"
      class="row g-3 justify-content-center mt-3"
    >
      <LibroCard
        v-for="(libro, index) in libros"
        :key="libro.id"
        :libro="libro"
        @cambiar-estado="toggleEstado(index)"
        @eliminar-libro="eliminarLibro(index)"
        @editar-libro="editarLibro(index)"
      />
    </transition-group>
  </section>
</template>

<script>
import FormularioLibro from '../components/FormularioLibro.vue';
import LibroCard from '../components/LibroCard.vue';

export default {
  name: 'Libros',

  components: {
    FormularioLibro,
    LibroCard,
  },

  data() {
    return {
      libros: [],
      libroEditando: null,
    };
  },

  mounted() {
    this.cargarLibros();
  },

  methods: {
    cargarLibros() {
      const datos = localStorage.getItem('libros');
      if (datos) {
        this.libros = JSON.parse(datos);
      }
    },

    guardarEnLocalStorage() {
      localStorage.setItem('libros', JSON.stringify(this.libros));
    },

    agregarLibro(libro) {
      libro.id = Date.now();
      this.libros.push(libro);
      this.guardarEnLocalStorage();
    },

    editarLibro(index) {
      this.libroEditando = { ...this.libros[index], index };
    },

    guardarLibro(libro) {
      if (this.libroEditando) {
        this.libros[this.libroEditando.index] = {
          ...libro,
          id: this.libros[this.libroEditando.index].id,
        };
        this.libroEditando = null;
      } else {
        libro.id = Date.now();
        this.libros.push(libro);
      }

      this.guardarEnLocalStorage();
    },

    toggleEstado(index) {
      this.libros[index].disponible = !this.libros[index].disponible;
      this.guardarEnLocalStorage();
    },

    eliminarLibro(index) {
      this.libros.splice(index, 1);
      this.guardarEnLocalStorage();
    },
  },
};
</script>

<style scoped>
.fade-enter-active {
  animation: fadeInUp 0.6s;
}
.fade-leave-active {
  animation: fadeOut 0.4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
