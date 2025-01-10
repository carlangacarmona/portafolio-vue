<script setup>
const stats = [
  { number: '1', text: 'Año de Experiencia' },
  { number: '3+', text: 'Proyectos Listos' },
  { number: '3', text: 'Clientes Felices' },
  { number: '1', text: 'Producto en Producción' }
]
</script>

<template>
  <div class="container mx-auto px-4 py-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-xl mb-2">Soy Carlos Carmona C.</h2>
        <h1 class="text-5xl font-bold mb-6">
          <span class="text-purple-500">Front-End</span><br>
          Developer.
        </h1>
        <p class="text-gray-400 mb-8">
          Analizo problemas complejos de la experiencia del usuario para crear soluciones centradas en la integridad que conectan personas.
        </p>
        <div class="flex gap-4">
          <a href="/src/docs/micv.pdf" class="border border-purple-500 text-purple-500 px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-colors">
            Descarga mi CV
          </a>
        <div class="flex gap-4">
          <a href="https://www.linkedin.com/in/ccarmonac/" class="border border-purple-500 text-purple-500 px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-colors">
            Linkedin
            </a>
        </div>
        <div class="flex gap-4">
          <a href="https://github.com/carlangacarmona/" class="border border-purple-500 text-purple-500 px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-colors">
            Github
          </a>
        </div>
        </div>
      </div>
      <div class="relative">
        <div class="aspect-square bg-gradient-to-br from-purple-500/20 to-transparent rounded-3xl">
          <img src="/src/assets/fondo-inicio.webp" class="object-cover rounded-3xl" alt="">
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
      <div v-for="stat in stats" :key="stat.text" class="text-center">
        <div class="text-4xl font-bold mb-2">{{ stat.number }}</div>
        <div class="text-gray-400">{{ stat.text }}</div>
      </div>
    </div>
  </div>
</template>