<template>
  <section id="projects" class="min-h-screen bg-gray-900 px-6 md:px-20 py-16 text-white flex flex-col gap-12">

    <!-- Заголовок секции -->
    <Motion
      :initial="{ opacity: 0, y: 50 }"
      :animate="{ opacity: 1, y: 0, transition: { duration: 1 } }"
      class="text-center"
    >
      <h2 class="text-4xl md:text-5xl font-bold text-indigo-400">My Projects</h2>
      <p class="mt-4 text-gray-300 max-w-2xl mx-auto">
        Here are some of the projects I built to improve my skills and showcase my work.
      </p>
    </Motion>

    <!-- Сетка проектов -->
    <Motion
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1, transition: { duration: 1, delay: 0.2 } }"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
    >


      <!-- Проект 2 -->
      <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
        <img src="../assets/p2.png" alt="Project 2 Screenshot" class="w-full h-48 object-cover"/>
        <div class="p-4">
          <h3 class="text-xl font-semibold text-indigo-400">Dance Event Website</h3>
          <p class="text-gray-300 mt-2">
            A responsive event website for a dance festival with ticket information and interactive features.
          </p>
          <div class="mt-4 flex gap-4">
            <a href="https://kyrylostyle.github.io/BankaFunka/" target="_blank" class="px-3 py-1 bg-indigo-400 text-gray-900 rounded hover:bg-indigo-500 transition">Demo</a>
            <a href="https://github.com/KyryloStyle/BankaFunka" target="_blank" class="px-3 py-1 bg-gray-700 text-gray-100 rounded hover:bg-gray-600 transition">Code</a>
          </div>
        </div>
      </div>

      <!-- Проект 3 -->
      <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
        <img src="../assets/pr3.png" alt="Project 3 Screenshot" class="w-full h-48 object-cover"/>
        <div class="p-4">
          <h3 class="text-xl font-semibold text-indigo-400">Wrong-Written Translator</h3>
          <p class="text-gray-300 mt-2">
            A small web application that corrects text typed in the wrong keyboard layout. For example, if someone types English text using the Russian layout, it converts it back to readable English.
          </p>
          <div class="mt-4 flex gap-4">
            <a href="https://kyrylostyle.github.io/wrong-written-translater/" target="_blank" class="px-3 py-1 bg-indigo-400 text-gray-900 rounded hover:bg-indigo-500 transition">Demo</a>
            <a href="https://github.com/KyryloStyle/wrong-written-translater" target="_blank" class="px-3 py-1 bg-gray-700 text-gray-100 rounded hover:bg-gray-600 transition">Code</a>
          </div>
        </div>
      </div>

      <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
        <img src="../assets/pr4.png" alt="Project 3 Screenshot" class="w-full h-48 object-cover"/>
        <div class="p-4">
          <h3 class="text-xl font-semibold text-indigo-400">Passwodino</h3>
          <p class="text-gray-300 mt-2">
            Passwodino is a professional password strength checker and secure password generator with entropy analysis, crack-time estimation, and real-time security audit.
          </p>
          <div class="mt-4 flex gap-4">
            <a href="https://www.passwordino.eu/" target="_blank" class="px-3 py-1 bg-indigo-400 text-gray-900 rounded hover:bg-indigo-500 transition">Demo</a>
            <a href="https://github.com/KyryloStyle/passwordino" target="_blank" class="px-3 py-1 bg-gray-700 text-gray-100 rounded hover:bg-gray-600 transition">Code</a>
          </div>
        </div>
      </div>

      <!-- Добавляй новые проекты аналогично -->

    </Motion>

  </section>
</template>

<script setup>
import { Motion } from '@motionone/vue'
</script>
