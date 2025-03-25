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

<section class="bg-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-[#607E4C] text-center mb-12">Отзывы родителей</h2>
    
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
          <div class="bg-[#FDCBD5]/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#607E4C]/10">
            <p class="text-gray-700 mb-6 text-lg leading-relaxed italic">"{testimonial.content}"</p>
            <div class="flex items-center">
              {#if testimonial.avatar}
                <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-[#607E4C] mr-4">
                  <img src={testimonial.avatar} alt="" class="w-full h-full object-cover" />
                </div>
              {/if}
              <div>
                <p class="font-semibold text-[#607E4C] text-lg">{testimonial.name}</p>
                {#if testimonial.role}
                  <p class="text-[#607E4C]/80">{testimonial.role}</p>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>