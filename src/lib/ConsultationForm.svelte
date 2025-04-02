<script>
  let formData = {
    name: '',
    phone: '',
    childAge: '',
    problem: ''
  };

  const handleSubmit = () => {
    // Here you can implement the form submission logic
    console.log('Form submitted:', formData);
  };
</script>

<section id="consultation" class="py-20 bg-white scroll-mt-20 relative overflow-hidden">
  <!-- Декоративные элементы фона -->
  <div class="absolute top-0 right-0 w-1/3 h-64 opacity-10 pointer-events-none">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#f8b8c4" d="M42.8,-65.2C54.9,-56.3,63.7,-42.8,69.2,-28.2C74.8,-13.6,77.1,2.1,73.6,16.2C70.1,30.4,60.8,43,48.9,53.1C37,63.2,22.4,70.8,6.2,73.1C-10,75.4,-27.9,72.4,-41.7,63.5C-55.5,54.6,-65.2,39.8,-70.3,23.7C-75.4,7.6,-75.9,-9.8,-70.2,-24.8C-64.5,-39.8,-52.6,-52.3,-39.1,-60.7C-25.6,-69.1,-10.6,-73.4,3.1,-73.1C16.8,-72.8,30.7,-74.1,42.8,-65.2Z" transform="translate(100 100)" />
    </svg>
  </div>
  
  <div class="absolute bottom-0 left-0 w-1/3 h-64 opacity-10 pointer-events-none">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#607e4c" d="M47.7,-73.2C62.1,-67.3,74.5,-54.9,79.8,-40.1C85.2,-25.3,83.5,-8.1,79.9,8C76.3,24.1,70.8,39.1,60.8,50.5C50.8,61.9,36.3,69.7,21.2,73.9C6.1,78.1,-9.6,78.7,-24.8,74.8C-40,70.9,-54.7,62.5,-65.4,50.1C-76.1,37.7,-82.8,21.4,-83.9,4.7C-85,-12.1,-80.5,-29.3,-70.8,-42.3C-61.1,-55.3,-46.2,-64.1,-31.6,-69.8C-17,-75.5,-2.7,-78.1,10.8,-77.1C24.3,-76.1,33.3,-79.1,47.7,-73.2Z" transform="translate(100 100)" />
    </svg>
  </div>

  <div class="container mx-auto px-4 relative z-10">
    <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-6">
      Запись на консультацию
    </h2>
    <p class="text-center text-gray-700 mb-12">
      Оставьте свои контактные данные, и я свяжусь с вами для уточнения деталей
    </p>

    <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-[#f8b8c4]/20 hover:shadow-md transition-all duration-300">
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <div>
            <label for="name" class="block text-gray-700 mb-2">Ваше имя</label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              placeholder="Иван Иванов"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f8b8c4] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label for="phone" class="block text-gray-700 mb-2">Телефон</label>
            <input
              type="tel"
              id="phone"
              bind:value={formData.phone}
              placeholder="+7 (___) ___-__-__"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f8b8c4] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label for="childAge" class="block text-gray-700 mb-2">Возраст ребенка</label>
            <input
              type="number"
              id="childAge"
              bind:value={formData.childAge}
              placeholder="5"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f8b8c4] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label for="problem" class="block text-gray-700 mb-2">Опишите проблему</label>
            <textarea
              id="problem"
              bind:value={formData.problem}
              placeholder="Расскажите кратко о речевых трудностях вашего ребёнка"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f8b8c4] focus:border-transparent resize-none"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            class="w-full bg-primary text-white font-button py-3 px-6 rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-[#f8b8c4]/20 transition-all"
          >
            Отправить заявку
          </button>
        </form>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-sm border border-[#f8b8c4]/20 hover:shadow-md transition-all duration-300">
        <h3 class="text-2xl font-heading font-semibold text-primary mb-6">
          Контактная информация
        </h3>
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#f8b8c4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="text-gray-700">+7 (900) 123-45-67</span>
          </div>
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#f8b8c4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="text-gray-700">diana@example.com</span>
          </div>
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#f8b8c4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-gray-700">я тут</span>
          </div>
        </div>
        <div class="mt-8">
          <div class="bg-gray-100 rounded-lg h-64 border border-[#f8b8c4]/10">
            <p class="text-center py-4 text-gray-600">Карта с местоположением</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>