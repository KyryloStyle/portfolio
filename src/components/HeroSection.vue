<template>
  <section
    class="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 gap-12 overflow-hidden"
  >
    <!-- 🌐 Соцмережі -->
    <div class="absolute top-6 right-6 flex gap-4 z-20">
      <a
        href="https://github.com/KyryloStyle"
        target="_blank"
        class="p-2 bg-gray-800/90 rounded-full hover:bg-gray-700 transition-all shadow-lg hover:shadow-indigo-400/20"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
          alt="GitHub"
          class="w-6 h-6 invert opacity-90 hover:opacity-100 transition"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/kyrylo-yurchenko/"
        target="_blank"
        class="p-2 bg-gray-800/90 rounded-full hover:bg-gray-700 transition-all shadow-lg hover:shadow-sky-400/20"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
          alt="LinkedIn"
          class="w-6 h-6 invert opacity-90 hover:opacity-100 transition"
        />
      </a>
    </div>

    <!-- Фото -->
    <Motion
      :initial="{ opacity: 0, x: -50, scale: 0.9 }"
      :animate="{ opacity: 1, x: 0, scale: 1, transition: { duration: 1 } }"
      class="flex-shrink-0 relative"
    >
      <div class="relative group">
        <img
          :src="MyPhoto"
          alt="Kyrylo Yurchenko"
          class="rounded-full w-72 h-72 object-cover shadow-2xl border-4 border-indigo-400 transition-transform duration-500 group-hover:scale-105"
        />
        <div
          class="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-indigo-500 opacity-20 blur-2xl animate-pulse"
        ></div>
        <div
          class="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-purple-500 opacity-20 blur-2xl animate-ping"
        ></div>
      </div>
    </Motion>

    <!-- Інфо -->
    <Motion
      :initial="{ opacity: 0, x: 50 }"
      :animate="{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } }"
      class="flex flex-col gap-5 max-w-xl"
    >
      <h1 class="text-4xl md:text-5xl font-semibold text-indigo-300 leading-tight tracking-wide">
        Hi, I'm Kyrylo
        <!-- wave emoji as image (Twemoji) -->
        <img
          src="https://twemoji.maxcdn.com/v/latest/72x72/1f44b.png"
          alt="wave"
          class="inline-block w-6 h-6 ml-3 align-middle"
        />
      </h1>

      <p class="text-gray-200 text-lg md:text-xl leading-relaxed md:leading-loose font-normal">
        I am a <span class="font-semibold">Software Engineering graduate (2025)</span>, eager to start my professional career through a <span class="font-semibold">Trainee program</span>.

        <br />

        My core skills include:
      </p>

      <ul class="mt-3 list-disc list-inside text-gray-200 text-lg md:text-xl space-y-1">
        <li><span class="font-semibold">Vue.js</span></li>
        <li><span class="font-semibold">Python</span></li>
        <li><span class="font-semibold">Tailwind CSS</span></li>
        <li><span class="font-semibold">JavaScript</span></li>
      </ul>

      <p class="text-gray-200 mt-4 text-lg md:text-xl leading-relaxed">
        I am passionate about <span class="font-semibold">learning new technologies</span>, <span class="font-semibold">collaborating in teams</span>, and <span class="font-semibold">contributing to innovative software solutions</span>.
      </p>

      <!-- Мовний блок (з флагами з flagcdn) -->
      <div class="flex flex-wrap gap-3 mt-4 text-sm text-gray-300">
        <span
          class="px-3 py-1 rounded-full bg-gray-800/70 border border-gray-700 flex items-center gap-2"
        >
          <img src="https://flagcdn.com/w20/ua.png" alt="UA" class="w-4 h-3" /> <span>Native</span>
        </span>
        <span
          class="px-3 py-1 rounded-full bg-gray-800/70 border border-gray-700 flex items-center gap-2"
        >
          <img src="https://flagcdn.com/w20/gb.png" alt="GB" class="w-4 h-3" /> <span>B2</span>
        </span>
        <span
          class="px-3 py-1 rounded-full bg-gray-800/70 border border-gray-700 flex items-center gap-2"
        >
          <img src="https://flagcdn.com/w20/de.png" alt="DE" class="w-4 h-3" /> <span>B2</span>
        </span>
        <span
          class="px-3 py-1 rounded-full bg-gray-800/70 border border-gray-700 flex items-center gap-2"
        >
          <img src="https://flagcdn.com/w20/ru.png" alt="RU" class="w-4 h-3" /> <span>C1</span>
        </span>
      </div>

      <!-- Кнопки CTA -->
      <div class="flex gap-4 mt-6 flex-wrap">
        <Motion
          :whileHover="{ scale: 1.05 }"
          class="px-6 py-3 bg-indigo-500 rounded-lg cursor-pointer flex items-center gap-2 transition shadow-md hover:bg-indigo-400 font-medium text-gray-900 hover:shadow-indigo-400/40"
        >
          <a href="#about" class="flex items-center gap-2">
            <HomeIcon class="w-5 h-5" />
            About
          </a>
        </Motion>

        <Motion
          :whileHover="{ scale: 1.05 }"
          class="px-6 py-3 bg-teal-500 rounded-lg cursor-pointer flex items-center gap-2 transition shadow-md hover:bg-teal-400 font-medium text-gray-900 hover:shadow-teal-400/40"
        >
          <a href="#projects" class="flex items-center gap-2">
            <CodeBracketIcon class="w-5 h-5" />
            Projects
          </a>
        </Motion>

        <Motion
          :whileHover="{ scale: 1.05 }"
          class="px-6 py-3 bg-amber-400 rounded-lg cursor-pointer flex items-center gap-2 transition shadow-md hover:bg-amber-300 font-medium text-gray-900 hover:shadow-amber-400/40"
        >
          <a href="#contact" class="flex items-center gap-2"> Contact Me </a>
        </Motion>
      </div>

      <p class="text-gray-400 mt-3 text-sm italic">
        Scroll down to explore my work
        <!-- down arrow as image -->
        <img
          src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2b07.png"
          alt="down"
          class="inline-block w-4 h-4 ml-2 align-middle"
        />
      </p>
    </Motion>
  </section>
</template>

<script setup>
import { Motion } from '@motionone/vue'
import { HomeIcon, CodeBracketIcon } from '@heroicons/vue/24/solid'
import MyPhoto from '../assets/logo-min.jpg'
</script>
