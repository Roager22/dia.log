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

<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-[#607E4C] text-center mb-12">С чем могу помочь</h2>
    
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
          <div class="bg-[#FDCBD5]/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#607E4C]/10">
            <h3 class="text-xl font-semibold text-[#607E4C] mb-4">{problem.title}</h3>
            <p class="text-gray-700 leading-relaxed">{problem.description}</p>
            {#if problem.solution}
              <p class="mt-4 text-[#607E4C]/80 italic">{problem.solution}</p>
            {/if}
          </div>
        {/each}
      </div>
      
      <div class="flex justify-center mt-10">
        <a href="/areas" class="font-button bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-primary/90 transition-colors">
          Подробнее о направлениях
        </a>
      </div>
    {/if}
  </div>
</section>