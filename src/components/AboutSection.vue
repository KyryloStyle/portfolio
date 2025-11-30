<template>
  <section id="about" class="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-20 flex flex-col gap-20">

    <!-- Заголовок -->
    <Motion
      :initial="{ opacity: 0, y: 50 }"
      :animate="{ opacity: 1, y: 0, transition: { duration: 1 } }"
      class="text-center px-4 sm:px-6 md:px-0"
    >
      <h1 class="text-4xl md:text-5xl font-extrabold text-indigo-400 tracking-wide">
        About Me
      </h1>
      <p class="mt-4 text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-normal">
        I am Kyrylo, a <strong>Software Engineering graduate (2025)</strong> with hands-on experience building clean, interactive web applications using <strong>Vue.js</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Vanilla JavaScript</strong>.
        I am passionate about <strong>learning new technologies</strong> and creating maintainable, efficient code that delivers excellent user experiences.
      </p>
    </Motion>



    <!-- What I Can Do -->
    <Motion
      :initial="{ opacity: 0, y: 50 }"
      :animate="{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }"
      class="w-full max-w-5xl mx-auto"
    >
      <h2 class="text-2xl font-semibold text-indigo-400 mb-6 text-center uppercase tracking-wide">
        What I Can Do
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div class="bg-gray-800/60 p-6 rounded-2xl shadow-lg hover:shadow-indigo-400/40 transition flex flex-col items-center text-center hover:-translate-y-2">
          <span class="text-4xl mb-3">💻</span>
          <h3 class="text-lg font-semibold text-gray-100">Full-Stack Development</h3>
          <p class="text-gray-400 mt-1 text-sm">
            I can build clean and interactive web applications with Vue.js, React, and Vanilla JavaScript, and have basic backend experience with Python and APIs.
          </p>
        </div>

        <div class="bg-gray-800/60 p-6 rounded-2xl shadow-lg hover:shadow-teal-400/40 transition flex flex-col items-center text-center hover:-translate-y-2">
          <span class="text-4xl mb-3">⚡</span>
          <h3 class="text-lg font-semibold text-gray-100">IT Systems & SaaS Projects</h3>
          <p class="text-gray-400 mt-1 text-sm">
            Experience working on interactive web apps and small SaaS projects, understanding system workflows and user interfaces.
          </p>
        </div>

        <div class="bg-gray-800/60 p-6 rounded-2xl shadow-lg hover:shadow-amber-400/40 transition flex flex-col items-center text-center hover:-translate-y-2">
          <span class="text-4xl mb-3">🛠️</span>
          <h3 class="text-lg font-semibold text-gray-100">Problem Solving & Collaboration</h3>
          <p class="text-gray-400 mt-1 text-sm">
            Able to work independently or in a team, learn quickly, and take responsibility for tasks and small projects.
          </p>
        </div>
      </div>
    </Motion>

    <!-- Skills -->
    <Motion
      :initial="{ opacity: 0, y: 50 }"
      :animate="{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } }"
      class="flex flex-col gap-12 max-w-6xl mx-auto"
    >
      <h2 class="text-2xl font-semibold text-indigo-400 mb-6 text-center uppercase tracking-wide">
        Skills & Technologies
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="group bg-gray-800/60 backdrop-blur-sm border border-gray-700 hover:border-indigo-400 transition-all duration-300 p-6 rounded-2xl flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
        >
          <img
            :src="skill.icon"
            :alt="skill.name"
            class="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110"
          />
          <span class="text-gray-100 font-medium text-lg">{{ skill.name }}</span>
        </div>
      </div>
    </Motion>

    <!-- Education Mini Card -->
    <Motion
      :initial="{ opacity: 0, y: 50 }"
      :animate="{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }"
      class="flex justify-center"
    >
      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-400/40 transition max-w-4xl flex flex-col md:flex-row gap-6 items-center">
        <img src="../assets/uni.png" alt="College" class="w-36 h-36 rounded-xl object-cover "/>
        <div class="flex-1">
          <h3 class="text-2xl font-semibold text-indigo-300">
            <a
              href="https://www.kpi.kharkov.ua/eng/"
              target="_blank"
              class="hover:underline"
            >
              Branch of the Kharkiv Computer and Technology Professional College of NTU "KhPI"
            </a>
          </h3>
          <p class="text-gray-300 mt-2">
            Graduated in 2025 with a Junior Bachelor degree in Software Engineering.
            Learned full-stack development, algorithms, and software design principles.
          </p>
          <ul class="mt-3 list-disc list-inside text-gray-400">
            <li>Graduated with grade 4/5</li>
            <li>Completed final project on web development</li>
            <li>Participated in coding competitions</li>
          </ul>
        </div>
      </div>
    </Motion>

    <!-- Languages -->
    <Motion
      :initial="{ opacity: 0, y: 50 }"
      :animate="{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } }"
      class="w-full max-w-4xl mx-auto"
    >
      <h2 class="text-2xl font-semibold text-indigo-400 mb-6 text-center uppercase tracking-wide">
        Languages
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="lang in languages"
          :key="lang.name"
          class="bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700 hover:border-indigo-400 transition-all duration-300 p-5 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
        >
          <img
            :src="lang.flag"
            :alt="lang.name"
            class="w-10 h-10 rounded-full mb-3 border border-gray-600"
          />
          <span class="text-gray-100 font-semibold text-lg">{{ lang.name }}</span>
          <span class="text-indigo-300 mt-1 font-medium">{{ lang.level }}</span>
        </div>
      </div>
    </Motion>

  </section>
</template>

<script setup>
import { Motion } from '@motionone/vue'
import TailwindIcon from '../assets/tailwind.png'


const skills = [
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  { name: 'Tailwind', icon: TailwindIcon },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
]

const languages = [
  { name: 'English', level: 'B2', flag: 'https://flagcdn.com/w40/gb.png' },
  { name: 'German', level: 'B2', flag: 'https://flagcdn.com/w40/de.png' },
  { name: 'Russian', level: 'C1', flag: 'https://flagcdn.com/w40/ru.png' },
  { name: 'Ukrainian', level: 'Native', flag: 'https://flagcdn.com/w40/ua.png' }
]
</script>

<style scoped>
section {
  scroll-margin-top: 100px;
}
</style>
