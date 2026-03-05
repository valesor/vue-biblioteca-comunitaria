<template>
  <div>
    <header class="sticky-top shadow">
      <nav class="navbar navbar-expand-lg container">
        <router-link to="/" class="navbar-brand fw-bold">
          Biblio-Comunitaria
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/libros" class="nav-link">
                Gestión de Libros
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/actividades" class="nav-link">
                Actividades
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/sumate" class="nav-link"> Sumate </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <footer class="text-center py-3 bg-dark text-white">
      <p class="mb-0">
        © 2026 Biblioteca Comunitaria | Hecho por Valeria Sanchez
      </p>
    </footer>
  </div>
</template>
