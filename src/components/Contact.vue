<template>
  <section id="contact" class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 px-6 md:px-20 py-20 text-white flex flex-col gap-16 items-center">

    <!-- Заголовок секции -->
    <Motion
      :initial="{ opacity: 0, y: 40 }"
      :animate="{ opacity: 1, y: 0, transition: { duration: 1 } }"
      class="text-center"
    >
      <h2 class="text-4xl md:text-5xl font-extrabold text-indigo-400 tracking-wide">Get in Touch</h2>
      <p class="mt-4 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
        I'm open to new opportunities, collaborations, or just an interesting conversation.
      </p>
    </Motion>

    <!-- Контент форми та контактів -->
    <div class="flex flex-col lg:flex-row items-stretch justify-center gap-12 w-full max-w-6xl">

      <!-- Форма -->
      <Motion
        :initial="{ opacity: 0, x: -50 }"
        :animate="{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }"
        class="flex-1"
      >
        <form @submit.prevent="handleSubmit" action="https://formspree.io/f/xldodbjk" method="POST" class="flex flex-col gap-5 bg-gray-800/70 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-2xl hover:shadow-indigo-400/20 transition-all">
          <h3 class="text-2xl font-semibold text-indigo-400 mb-2">Send me a Message</h3>

          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            required
            class="p-4 rounded-lg bg-gray-900/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input 
            type="email"
            name="email" 
            placeholder="Your Email" 
            required
            class="p-4 rounded-lg bg-gray-900/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <textarea 
            name="messege"
            placeholder="Your Message" 
            required
            class="p-4 rounded-lg bg-gray-900/70 text-white h-36 resize-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          ></textarea>

          <button 
            type="submit" 
            class="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-indigo-400/40 transition-transform transform hover:-translate-y-1 active:scale-95"
          >
            ✉️ Send Message
          </button>
          <p 
            v-if="success" 
            class="text-green-400 mt-3 text-center transition-opacity duration-500"
          >
            ✅ Message sent successfully!
          </p>
        </form>
      </Motion>

      <!-- Контактні кнопки -->
      <Motion
        :initial="{ opacity: 0, x: 50 }"
        :animate="{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.4 } }"
        class="flex-1 flex flex-col justify-center gap-8"
      >
        <h3 class="text-2xl font-semibold text-indigo-400 text-center lg:text-left">Or reach me via</h3>

        <div class="flex flex-col gap-5">
          <!-- Email -->
          <a 
            href="mailto:kyrylo.yurchenkoo@gmail.com" 
            class="group flex items-center gap-4 bg-gray-800/60 hover:bg-indigo-600 border border-gray-700 hover:border-indigo-500 transition-all duration-300 p-5 rounded-2xl shadow-lg hover:shadow-indigo-400/30"
          >
            <div class="p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition">
              <img 
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" 
                alt="Gmail" 
                class="w-7 h-7 invert opacity-90 group-hover:opacity-100 transition"
              />
            </div>
            <span class="text-gray-100 font-medium text-lg tracking-wide group-hover:text-white">
              kyrylo.yurchenkoo@gmail.com
            </span>
          </a>

          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/kyrylo-yurchenko/" target="_blank" class="group flex items-center gap-4 bg-white hover:bg-gray-100 transition-all duration-300 p-5 rounded-2xl shadow-lg hover:shadow-indigo-400/20 border border-gray-300">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" class="h-7 w-7 text-blue-600"/>
            <span class="text-gray-900 font-semibold text-lg">LinkedIn Profile</span>
          </a>

          <!-- GitHub -->
          <a href="https://github.com/KyryloStyle" target="_blank" class="group flex items-center gap-4 bg-gray-800/70 hover:bg-gray-700 border border-gray-700 transition-all duration-300 p-5 rounded-2xl shadow-lg hover:shadow-indigo-400/20">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" class="h-7 w-7"/>
            <span class="text-white font-medium text-lg">GitHub</span>
          </a>

          
        </div>
      </Motion>
    </div>

  </section>
</template>

<script setup>
  import { Motion } from '@motionone/vue'
  import { ref } from 'vue'

  const success = ref(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })

      if (response.ok) {
        success.value = true
        form.reset()

        // скрываем сообщение через 4 секунды
        setTimeout(() => (success.value = false), 4000)
      }
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }
</script>
