<script>
  import { onMount } from 'svelte';
  import { getProblems } from './sanity';
  
  let problems = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      problems = await getProblems();
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  });
</script>

<section id="services" class="py-20 relative overflow-hidden scroll-mt-20" style="background-color: #f4d9d9;">
  <!-- Декоративные точки -->
  <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
    <div class="grid grid-cols-12 gap-8 h-full">
      {#each Array(24) as _, i}
        <div class="w-2 h-2 rounded-full bg-primary"></div>
      {/each}
    </div>
  </div>
  
  <div class="container mx-auto px-4">
    <h2 class="text-4xl md:text-[36px] font-heading font-bold text-primary text-center mb-4">С чем могу помочь</h2>
    <p class="text-xl md:text-[24px] text-center text-[#3e4c38] font-normal max-w-3xl mx-auto mb-16">Работаю с проблемами речи и помогаю детям заговорить чисто и красиво</p>
    
    {#if loading}
      <div class="text-center">
        <p class="text-gray-600">Загрузка информации...</p>
      </div>
    {:else if error}
      <div class="text-center text-red-600">
        <p>Произошла ошибка при загрузке информации</p>
      </div>
    {:else}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each problems as problem}
          <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#f8b8c4]/30 flex flex-col h-full transform hover:-translate-y-1 hover:border-[#f8b8c4]/60">
            <div class="w-12 h-12 rounded-full bg-[#f8b8c4]/30 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-primary mb-4">{problem.title}</h3>
            <p class="text-gray-700 leading-relaxed flex-grow">{problem.description}</p>
          </div>
        {/each}
      </div>
      
      <div class="flex justify-center mt-12">
        <a href="/areas" class="font-medium bg-primary text-white px-8 py-3 rounded-full text-lg hover:shadow-lg hover:shadow-green-200 transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-[#4f6a3c]">
          Подробнее о направлениях
        </a>
      </div>
    {/if}
  </div>
</section>