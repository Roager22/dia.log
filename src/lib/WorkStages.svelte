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

<section class="py-16 bg-[#FDCBD5]/5">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-[#607E4C] text-center mb-12">Как проходит работа</h2>
    
    {#if loading}
      <div class="text-center">
        <p class="text-gray-600">Загрузка этапов...</p>
      </div>
    {:else if error}
      <div class="text-center text-red-600">
        <p>Произошла ошибка при загрузке этапов</p>
      </div>
    {:else}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each stages as stage, index}
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#607E4C]/10">
            <div class="flex items-center mb-6">
              <span class="w-10 h-10 rounded-full bg-[#607E4C] text-white flex items-center justify-center font-bold text-lg shadow-md">
                {index + 1}
              </span>
              <h3 class="text-xl font-semibold text-[#607E4C] ml-4">{stage.title}</h3>
            </div>
            <p class="text-gray-700 leading-relaxed">{stage.description}</p>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>