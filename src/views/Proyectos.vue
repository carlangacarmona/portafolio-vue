<script setup>
const projects = [
  {
    title: 'CursosAlfaWeb',
    description: 'Un moderno admin de cursos desarrollado en Vue.js',
    tags: ['Vue.js', 'Bootstrap', 'JavaScript'],
    image: 'src/assets/curso1.webp',
    links: 'https://github.com/carlangacarmona/CursosAlfaWeb'
  },
  {
    title: 'personajesStarWarAPI',
    description: 'Personajes de StarWar API Javascript',
    tags: ['Vue.js', 'CSS', 'API'],
    image: 'src/assets/curso2.png',
    links: 'https://github.com/carlangacarmona/personajesStarWarAPI'
  },
  {
    title: 'horasDelMundo',
    description: 'Horas actual de varias ciudades del mundo.',
    tags: ['Bootstarp', 'JavaScript', 'Bootstrap'],
    image: 'src/assets/curso3.png',
    links: 'https://github.com/carlangacarmona/horasDelMundo'
  }
]
</script>

<template>
  <div class="container mx-auto px-4 py-20">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold mb-4">Mis Proyectos</h1>
      <p class="text-gray-400 mb-12">
        Estos son algunos de los proyectos en los que he trabajado. Cada proyecto representa un desafío y una solución únicos.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.title"
          class="bg-[#1A1A1B] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
        >
          <div class="aspect-video bg-gray-800"><img :src="project.image"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-400 mb-4">{{ project.description }}</p>
            <p class="text-gray-400 mb-4"><a :href="project.links">Ver Proyecto</a></p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>