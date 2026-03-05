<template>
  <form
    @submit.prevent="submitLibro"
    class="row g-3 mb-4 p-4 shadow rounded bg-light"
  >
    <p
      v-if="libroAgregado"
      class="text-success text-center animate__animated animate__bounce"
    >
      {{
        modoEdicion
          ? 'Libro actualizado correctamente'
          : 'Libro agregado correctamente'
      }}
    </p>

    <div class="col-md-6">
      <label class="form-label">Título</label>
      <input v-model="libro.titulo" class="form-control" />
      <div v-if="errores.titulo" class="text-danger small">
        {{ errores.titulo }}
      </div>
    </div>

    <div class="col-md-6">
      <label class="form-label">Autor</label>
      <input v-model="libro.autor" class="form-control" />
      <div v-if="errores.autor" class="text-danger small">
        {{ errores.autor }}
      </div>
    </div>

    <div class="col-md-6 col-lg-4">
      <label class="form-label">Género</label>
      <input v-model="libro.genero" class="form-control" />
      <div v-if="errores.genero" class="text-danger small">
        {{ errores.genero }}
      </div>
    </div>

    <div class="col-md-6 col-lg-4">
      <label class="form-label">Idioma</label>
      <input v-model="libro.idioma" class="form-control" />
      <div v-if="errores.idioma" class="text-danger small">
        {{ errores.idioma }}
      </div>
    </div>

    <div class="col-md-6 col-lg-4">
      <label class="form-label">Tipo</label>
      <select v-model="libro.tipo" class="form-select">
        <option disabled value="">Seleccioná una opción</option>
        <option>Novela</option>
        <option>Infantil</option>
        <option>Cómic</option>
        <option>Ensayo</option>
      </select>
      <div v-if="errores.tipo" class="text-danger small">
        {{ errores.tipo }}
      </div>
    </div>

    <div class="col-md-12">
      <label class="form-label">URL portada</label>
      <input v-model="libro.portada" class="form-control" />
    </div>

    <div class="col-md-12">
      <input type="checkbox" v-model="libro.disponible" />
      <label class="ms-2">Disponible</label>
    </div>

    <div class="col-12 text-center">
      <button class="btn btn-primary px-4">
        {{ modoEdicion ? 'Guardar cambios' : 'Agregar Libro' }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormularioLibro',

  props: {
    libroEditar: Object,
  },

  data() {
    return {
      libro: this.getLibroVacio(),
      errores: {},
      libroAgregado: false,
    };
  },

  computed: {
    modoEdicion() {
      return !!this.libroEditar;
    },
  },

  watch: {
    libroEditar: {
      immediate: true,
      handler(nuevo) {
        if (nuevo) {
          this.libro = { ...nuevo };
        } else {
          this.libro = this.getLibroVacio();
        }
      },
    },
  },

  methods: {
    getLibroVacio() {
      return {
        titulo: '',
        autor: '',
        genero: '',
        idioma: '',
        tipo: '',
        portada: '',
        disponible: true,
      };
    },

    submitLibro() {
      this.errores = {};

      if (!this.libro.titulo) this.errores.titulo = 'El título es obligatorio';
      if (!this.libro.autor) this.errores.autor = 'El autor es obligatorio';
      if (!this.libro.genero) this.errores.genero = 'El género es obligatorio';
      if (!this.libro.idioma) this.errores.idioma = 'El idioma es obligatorio';
      if (!this.libro.tipo) this.errores.tipo = 'Seleccioná un tipo';

      if (Object.keys(this.errores).length) return;

      this.$emit('guardar-libro', { ...this.libro });

      this.libroAgregado = true;
      setTimeout(() => (this.libroAgregado = false), 2000);
    },
  },
};
</script>
