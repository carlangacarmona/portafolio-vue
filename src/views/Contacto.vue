<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission
  console.log(form.value)
}
</script>

<template>
  <div class="container mx-auto px-4 py-20">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold mb-4">¡Trabajemos juntos!</h1>
      <p class="text-gray-400 mb-8">
        Diseño y codifico cosas maravillosamente simples y amo lo que hago. ¡Así de simple!
      </p>

      <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-2">
          <label class="block text-sm text-gray-400">Nombre</label>
          <input
            v-model="form.firstName"
            type="text"
            class="w-full px-4 py-2 rounded-lg bg-[#1A1A1B] border border-gray-800 focus:border-purple-500 focus:outline-none"
          >
        </div>

        <div class="space-y-2">
          <label class="block text-sm text-gray-400">Apellido</label>
          <input
            v-model="form.lastName"
            type="text"
            class="w-full px-4 py-2 rounded-lg bg-[#1A1A1B] border border-gray-800 focus:border-purple-500 focus:outline-none"
          >
        </div>

        <div class="space-y-2">
          <label class="block text-sm text-gray-400">Correo Electrónico</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full px-4 py-2 rounded-lg bg-[#1A1A1B] border border-gray-800 focus:border-purple-500 focus:outline-none"
          >
        </div>

        <div class="space-y-2">
          <label class="block text-sm text-gray-400">Teléfono</label>
          <input
            v-model="form.phone"
            type="tel"
            class="w-full px-4 py-2 rounded-lg bg-[#1A1A1B] border border-gray-800 focus:border-purple-500 focus:outline-none"
          >
        </div>

        <div class="col-span-2 space-y-2">
          <label class="block text-sm text-gray-400">Seleccione Servicio</label>
          <select
            v-model="form.service"
            class="w-full px-4 py-2 rounded-lg bg-[#1A1A1B] border border-gray-800 focus:border-purple-500 focus:outline-none"
          >
            <option value="">Seleccione un servicio</option>
            <option value="web">Web Development</option>
            <option value="design">UI/UX Design</option>
            <option value="consulting">Consultoría</option>
          </select>
        </div>

        <div class="col-span-2 space-y-2">
          <label class="block text-sm text-gray-400">Mensaje</label>
          <textarea
            v-model="form.message"
            rows="4"
            class="w-full px-4 py-2 rounded-lg bg-[#1A1A1B] border border-gray-800 focus:border-purple-500 focus:outline-none"
          ></textarea>
        </div>

        <div class="col-span-2">
          <button
            type="submit"
            class="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  </div>
</template>