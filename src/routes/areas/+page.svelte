<script>
  import { onMount } from 'svelte';
  import { getAreas } from '../../lib/sanity';
  
  let areas = [];
  let loading = true;
  let error = null;
  let phoneNumber = "+7(999)1234567";

  onMount(async () => {
    try {
      // Hardcode some test data to see if the component renders properly
      areas = [
        {
          title: "Коррекция звукопроизношения",
          description: "Работа над правильным произношением звуков речи, устранение дефектов произношения.",
          bulletPoints: [
            "Диагностика нарушений звукопроизношения",
            "Постановка звуков",
            "Автоматизация звуков в речи",
            "Дифференциация звуков"
          ]
        },
        {
          title: "Развитие фонематического слуха",
          description: "Формирование способности различать звуки речи, что является основой для правильного произношения и грамотного письма.",
          bulletPoints: [
            "Различение звуков на слух",
            "Определение места звука в слове",
            "Звуковой анализ и синтез"
          ]
        }
      ];
      
      // Try to load real data
      const realAreas = await getAreas();
      if (realAreas && realAreas.length > 0) {
        areas = realAreas;
      }
    } catch (e) {
      console.error("Error loading areas:", e);
      // Keep using the hardcoded data if there's an error
    } finally {
      loading = false;
    }
  });
</script>

<!-- No svelte:head to avoid layout conflicts -->

<div class="min-h-screen bg-gray-50 font-sans">
  <header class="bg-white shadow-sm">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2">
        <img src="/logo-placeholder.svg" alt="Логотип" class="h-10 w-auto" />
        <span class="text-[#607E4C] font-semibold text-xl">Dia.log</span>
      </a>
      
      <div class="hidden md:flex items-center gap-6">
        <a href="/" class="text-gray-700 hover:text-[#607E4C] transition-colors">
          Главная
        </a>
        <a href={`tel:${phoneNumber}`} class="text-gray-700 hover:text-[#607E4C] transition-colors">
          {phoneNumber}
        </a>
      </div>
    </div>
  </header>

  <section class="py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-[#607E4C] text-center mb-12">
        Направления логопедической работы
      </h1>
      
      <div class="space-y-8 max-w-4xl mx-auto">
        {#each areas as area, index}
          <div class="bg-white rounded-lg shadow p-6 border border-gray-100">
            <h2 class="text-2xl font-semibold text-[#607E4C] mb-4">{area.title}</h2>
            <p class="text-gray-700 mb-4">{area.description}</p>
            
            {#if area.bulletPoints && area.bulletPoints.length > 0}
              <ul class="space-y-2 mt-4">
                {#each area.bulletPoints as point}
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#607E4C] flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">{point}</span>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>
        {/each}
      </div>
      
      <div class="mt-12 text-center">
        <a href="/" class="bg-[#607E4C] text-white px-6 py-3 rounded-full inline-block hover:bg-opacity-90 transition-colors">
          Вернуться на главную
        </a>
      </div>
    </div>
  </section>
</div>