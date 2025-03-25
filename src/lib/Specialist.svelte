<script>
  import { onMount } from 'svelte';
  import { getSpecialist } from './sanity';
  
  let specialist = null;
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      specialist = await getSpecialist();
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  });
</script>

<section class="container mx-auto px-4 py-20">
  <h2 class="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-16">Обо мне</h2>
  <div class="flex flex-col md:flex-row items-center gap-12">
    {#if loading}
      <div class="text-center w-full">
        <p class="text-gray-600">Загрузка информации...</p>
      </div>
    {:else if error}
      <div class="text-center text-red-600 w-full">
        <p>Произошла ошибка при загрузке информации</p>
      </div>
    {:else if specialist}
      <div class="flex-1 flex justify-center items-center">
        <img 
          src={specialist.photo} 
          alt={specialist.name} 
          class="w-full max-w-lg h-auto rounded-2xl shadow-lg" 
        />
      </div>
      <div class="flex-1 text-center md:text-left">
        <h2 class="text-3xl font-bold text-primary mb-6">{specialist.name}</h2>
        <p class="text-lg text-gray-700 mb-6">{specialist.description}</p>
        <div class="space-y-2">
          {#each specialist.qualifications as qualification}
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">{qualification}</span>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</section>