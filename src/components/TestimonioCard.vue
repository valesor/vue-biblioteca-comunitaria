<template>
  <div
    class="card p-4 shadow d-flex flex-row align-items-center animate__animated animate__fadeIn"
  >
    <img :src="imagen" class="rounded-circle me-3" width="80" />
    <div>
      <p>“{{ mensaje }}”</p>
      <span class="text-muted">- {{ autor }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonioCard',
  props: {
    mensaje: String,
    autor: String,
    imagen: String,
  },
};
</script>
