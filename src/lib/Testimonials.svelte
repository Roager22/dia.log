<script>
  import { onMount } from 'svelte';
  import { getTestimonials } from './sanity';
  
  let testimonials = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      testimonials = await getTestimonials();
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  });
</script>

<section id="testimonials" class="py-20 relative overflow-hidden scroll-mt-20" style="background-color: #f4d9d9;">
  <!-- Декоративные кавычки -->
  <div class="absolute top-10 left-10 w-24 h-24 opacity-10 pointer-events-none">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="#f8b8c4" />
    </svg>
  </div>
  
  <div class="absolute bottom-10 right-10 w-24 h-24 opacity-10 pointer-events-none rotate-180">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="#f8b8c4" />
    </svg>
  </div>
  
  <div class="container mx-auto px-4">
    <h2 class="text-4xl md:text-[36px] font-heading font-bold text-primary text-center mb-4">Отзывы родителей</h2>
    <p class="text-xl md:text-[24px] text-center text-[#3e4c38] font-normal max-w-3xl mx-auto mb-16">Лучший показатель эффективности – довольные родители и счастливые дети</p>
    
    {#if loading}
      <div class="text-center">
        <p class="text-gray-600">Загрузка отзывов...</p>
      </div>
    {:else if error}
      <div class="text-center text-red-600">
        <p>Произошла ошибка при загрузке отзывов</p>
      </div>
    {:else}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each testimonials as testimonial}
          <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#f8b8c4] testimonial-card transform hover:-translate-y-1 hover:border-l-[6px]">
            <div class="text-[#f8b8c4] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p class="text-gray-700 mb-6 text-lg leading-relaxed">{testimonial.content}</p>
            <div class="flex items-center mt-auto pt-4 border-t border-gray-100">
              {#if testimonial.avatar}
                <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-[#f8b8c4] mr-4 hover:border-primary transition-colors duration-300">
                  <img src={testimonial.avatar} alt={testimonial.name} class="w-full h-full object-cover" />
                </div>
              {/if}
              <div>
                <p class="font-semibold text-primary text-lg">{testimonial.name}</p>
                {#if testimonial.role}
                  <p class="text-gray-600">{testimonial.role}</p>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>