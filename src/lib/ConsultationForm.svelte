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

<section class="bg-secondary-light py-20">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-6">
      Запись на консультацию
    </h2>
    <p class="text-center text-gray-700 mb-12">
      Оставьте свои контактные данные, и я свяжусь с вами для уточнения деталей
    </p>

    <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div class="bg-white p-8 rounded-2xl shadow-sm">
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <div>
            <label for="name" class="block text-gray-700 mb-2">Ваше имя</label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              placeholder="Иван Иванов"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-primary text-white font-button py-3 px-6 rounded-full hover:bg-primary/90 transition-colors"
          >
            Отправить заявку
          </button>
        </form>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-sm">
        <h3 class="text-2xl font-heading font-semibold text-primary mb-6">
          Контактная информация
        </h3>
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="text-gray-700">+7 (900) 123-45-67</span>
          </div>
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="text-gray-700">diana@example.com</span>
          </div>
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-gray-700">я тут</span>
          </div>
        </div>
        <div class="mt-8">
          <div class="bg-gray-100 rounded-lg h-64">
            <p class="text-center py-4 text-gray-600">Карта с местоположением</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>