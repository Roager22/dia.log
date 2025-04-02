<script>
  import { onMount } from 'svelte';
  import { getStages } from './sanity';
  
  let stages = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      stages = await getStages();
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  });
</script>

<section id="stages" class="py-20 relative overflow-hidden scroll-mt-20" style="background-color: #f4d9d9;">
  <!-- Декоративные элементы -->
  <div class="absolute left-0 bottom-0 w-32 h-32 opacity-10 pointer-events-none">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#607e4c" />
    </svg>
  </div>
  
  <div class="absolute right-10 top-10 w-16 h-16 opacity-10 pointer-events-none">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="60" height="60" fill="#607e4c" />
    </svg>
  </div>
  
  <div class="container mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-4">Как проходит работа</h2>
    <p class="text-xl md:text-2xl text-center text-[#3e4c38] font-normal max-w-3xl mx-auto mb-16">Постепенно и без стресса формируем правильную речь</p>
    
    {#if loading}
      <div class="text-center">
        <p class="text-gray-600">Загрузка этапов...</p>
      </div>
    {:else if error}
      <div class="text-center text-red-600">
        <p>Произошла ошибка при загрузке этапов</p>
      </div>
    {:else}
      <!-- Horizontal timeline -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Timeline items -->
        <div class="flex flex-col md:flex-row justify-between items-start">
          {#each stages as stage, index}
            <div class="flex flex-col items-center relative md:w-1/{stages.length} px-2">
              <!-- Connection line -->
              {#if index < stages.length - 1}
                <div class="hidden md:block absolute top-6 left-[calc(50%+20px)] right-0 h-0.5 bg-gray-200 z-0"></div>
              {/if}
              
              <!-- Number circle -->
              <div class="w-12 h-12 rounded-full bg-white border-2 border-[#f8b8c4] flex items-center justify-center shadow-md mb-6 z-10">
                <span class="text-primary font-bold text-lg">{index + 1}</span>
              </div>
              
              <!-- Connection line -->
              {#if index < stages.length - 1}
                <div class="hidden md:block absolute top-6 left-[calc(50%+20px)] right-0 h-0.5 bg-[#f8b8c4]/50 z-0"></div>
              {/if}
              
              <!-- Content -->
              <div class="text-center">
                <h3 class="text-lg font-semibold text-primary mb-2">{stage.title}</h3>
                <p class="text-gray-600 text-sm">{stage.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</section>