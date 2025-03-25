<script>
  import ConsultationForm from './lib/ConsultationForm.svelte'
  import Testimonials from './lib/Testimonials.svelte'
  import WorkStages from './lib/WorkStages.svelte'
  import Problems from './lib/Problems.svelte'
  import Specialist from './lib/Specialist.svelte'
  let phoneNumber = "+7(999)1234567";
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Montserrat:wght@500;600;700&family=Raleway:wght@400;500;600&display=swap" rel="stylesheet">
</svelte:head>

<main class="min-h-screen bg-secondary/5 font-sans">
  <header class="sticky top-0 bg-white shadow-sm z-50">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img src="/logo-placeholder.svg" alt="Логотип" class="h-10 w-auto" />
        <span class="text-primary font-heading font-semibold text-xl">Dia.log</span>
      </div>
      
      <div class="hidden md:flex items-center gap-6">
        <nav class="flex items-center gap-5">
          <a href="#about" class="font-button text-gray-700 hover:text-primary transition-colors">Обо мне</a>
          <a href="#problems" class="font-button text-gray-700 hover:text-primary transition-colors">Проблемы</a>
          <a href="#stages" class="font-button text-gray-700 hover:text-primary transition-colors">Этапы работы</a>
          <a href="#testimonials" class="font-button text-gray-700 hover:text-primary transition-colors">Отзывы</a>
          <a href="/areas" class="font-button text-gray-700 hover:text-primary transition-colors">Направления</a>
        </nav>
        <a href={`tel:${phoneNumber}`} class="font-button text-gray-700 hover:text-primary transition-colors">
          {phoneNumber}
        </a>
        <a href="#consultation" class="font-button bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
          Записаться на консультацию
        </a>
      </div>
      
      <button class="md:hidden text-primary p-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </header>

  <section class="container mx-auto px-4 py-20">
    <div class="flex flex-col md:flex-row items-center gap-12">
      <div class="flex-1 text-center md:text-left">
        <h1 class="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Логопед для вашего ребёнка</h1>
        <p class="text-lg text-gray-700 mb-8">Помогаем детям говорить правильно и уверенно</p>
        <button class="font-button bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-primary/90 transition-colors">
          Записаться
        </button>
      </div>
      <div class="flex-1 flex justify-center items-center">
        <img src="/specialist-photo.svg" alt="Логопед" class="w-full max-w-lg h-auto rounded-2xl shadow-lg" />
      </div>
    </div>
  </section>

  <section id="about">
    <Specialist />
  </section>

  <section id="problems">
    <Problems />
  </section>

  <section id="stages">
    <WorkStages />
  </section>

  <section id="testimonials">
    <Testimonials />
  </section>

  <!-- Areas component removed from here -->

  <section id="consultation">
    <ConsultationForm />
  </section>

  <footer class="bg-white border-t border-gray-200 mt-16">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <img src="/logo-placeholder.svg" alt="Логотип" class="h-8 w-auto" />
            <span class="text-primary font-heading font-semibold text-lg">Dia.log</span>
          </div>
          <p class="text-gray-600">Профессиональная помощь в развитии речи вашего ребёнка</p>
        </div>

        <div class="space-y-4">
          <h3 class="font-semibold text-gray-900">Контакты</h3>
          <div class="space-y-2">
            <a href={`tel:${phoneNumber}`} class="block text-gray-600 hover:text-primary transition-colors">{phoneNumber}</a>
            <a href="mailto:info@dialog.ru" class="block text-gray-600 hover:text-primary transition-colors">info@dialog.ru</a>
            <p class="text-gray-600">Москва, ул. Примерная, 123</p>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="font-semibold text-gray-900">Услуги</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Консультация</a></li>
            <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Диагностика</a></li>
            <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Коррекция речи</a></li>
            <li><a href="#" class="text-gray-600 hover:text-primary transition-colors">Развитие речи</a></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="font-semibold text-gray-900">Мы в соцсетях</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-600 hover:text-primary transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-600 hover:text-primary transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-600 hover:text-primary transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p>© 2024 Dia.log. Все права защищены.</p>
      </div>
    </div>
  </footer>
</main>
