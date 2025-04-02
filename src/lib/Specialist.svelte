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

<section id="specialist-about" class="py-20 relative overflow-hidden scroll-mt-20" style="background-color: #f4d9d9;">
  <div class="container mx-auto px-4">
    {#if loading}
      <div class="text-center w-full">
        <p class="text-gray-600">Загрузка информации...</p>
      </div>
    {:else if error}
      <div class="text-center text-red-600 w-full">
        <p>Произошла ошибка при загрузке информации</p>
      </div>
    {:else if specialist}
      <div class="flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto">
        <!-- Photo -->
        <div class="md:w-5/12 lg:w-4/12">
          <img 
            src={specialist.photo} 
            alt={specialist.name} 
            class="w-full rounded-2xl shadow-lg" 
          />
        </div>
        
        <!-- Content -->
        <div class="md:w-7/12 lg:w-8/12">
          <div class="bg-white p-8 rounded-xl shadow-sm">
            <h3 class="text-2xl font-bold text-primary mb-4">{specialist.name}</h3>
            
            <p class="text-gray-700 mb-8">{specialist.description}</p>
            
            <div class="space-y-3">
              {#each specialist.qualifications as qualification}
                <div class="flex items-center gap-3">
                  <div class="w-4 h-4 rounded-full bg-secondary/30 flex-shrink-0"></div>
                  <span class="text-gray-700">{qualification}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>