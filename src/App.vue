<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const email = 'carlos.carmona.c@gmail.com'
</script>

<template>
  <div class="min-h-screen bg-[#0A0A0B] text-white">
    <header class="fixed w-full top-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-sm">
      <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <RouterLink to="/" class="text-2xl font-bold">CCC</RouterLink>
          <a :href="'mailto:' + email" class="text-sm text-gray-400">{{ email }}</a>
        </div>
        
        <div class="flex items-center gap-8">
          <RouterLink to="/" class="hover:text-purple-500 transition-colors">Inicio</RouterLink>
          <RouterLink to="/quiensoy" class="hover:text-purple-500 transition-colors">Quien Soy</RouterLink>
          <RouterLink to="/proyectos" class="hover:text-purple-500 transition-colors">Proyectos</RouterLink>
          <RouterLink to="/contacto" class="hover:text-purple-500 transition-colors">Contacto</RouterLink>
          <a href="/contacto" class="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
            Contáctame!
          </a>
        </div>
      </nav>
    </header>

    <main class="pt-20">
      <RouterView />
    </main>
  </div>
</template>