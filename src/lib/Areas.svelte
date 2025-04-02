<script lang="ts">
  import { onMount } from 'svelte';
  import { getAreas } from './sanity';
  
  interface Area {
    title: string;
    description: string;
    icon?: string;
    workMethods?: string[];
    techniques?: string[];
  }
  
  let areas: Area[] = [];
  let loading: boolean = true;
  let error: string | null = null;

  onMount(async () => {
    try {
      areas = await getAreas();
      console.log('Loaded areas:', areas);
    } catch (e) {
      error = e instanceof Error ? e.message : 'Unknown error occurred';
      console.error('Error loading areas:', e);
    } finally {
      loading = false;
    }
  });
</script>

<section id="areas" class="py-20 bg-white relative overflow-hidden">
  <!-- Decorative pattern -->
  <div class="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fbced2" d="M42.8,-65.2C54.9,-56.3,63.7,-42.8,69.2,-28.2C74.8,-13.6,77.1,2.1,73.6,16.2C70.1,30.4,60.8,43,48.9,53.1C37,63.2,22.4,70.8,6.2,73.1C-10,75.4,-27.9,72.4,-41.7,63.5C-55.5,54.6,-65.2,39.8,-70.3,23.7C-75.4,7.6,-75.9,-9.8,-70.2,-24.8C-64.5,-39.8,-52.6,-52.3,-39.1,-60.7C-25.6,-69.1,-10.6,-73.4,3.1,-73.1C16.8,-72.8,30.7,-74.1,42.8,-65.2Z" transform="translate(100 100)" />
    </svg>
  </div>
  <div class="container mx-auto px-4">
    
    {#if loading}
      <div class="text-center w-full">
        <p class="text-gray-600">Загрузка информации...</p>
      </div>
    {:else if error}
      <div class="text-center text-red-600 w-full">
        <p>Произошла ошибка при загрузке информации</p>
      </div>
    {:else if areas.length > 0}
      <div class="grid md:grid-cols-2 gap-8">
        {#each areas as area, index}
          <div class="bg-white p-6 flex flex-col h-full border-t border-l border-r border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <h3 class="text-xl font-heading font-semibold text-primary mb-3">{area.title}</h3>
            
            <div class="flex flex-col md:flex-row gap-6">
              <div class="md:w-1/2">
                <p class="text-gray-700 text-sm">{area.description}</p>
              </div>
              
              <div class="md:w-1/2">
                {#if area.workMethods && area.workMethods.length > 0}
                  <div class="mb-4">
                    <h4 class="text-lg font-semibold mb-2 text-primary">Как я работаю:</h4>
                    <ul class="space-y-1 text-sm">
                      {#each area.workMethods as method}
                        <li class="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                          <span class="text-gray-700">{method}</span>
                        </li>
                      {/each}
                    </ul>
                  </div>
                {/if}
                
                {#if area.techniques && area.techniques.length > 0}
                  <div>
                    <h4 class="text-lg font-semibold mb-2 text-primary">методы:</h4>
                    <ul class="space-y-1 text-sm">
                      {#each area.techniques as technique}
                        <li class="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                          <span class="text-gray-700">{technique}</span>
                        </li>
                      {/each}
                    </ul>
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center text-gray-600 w-full">
        <p>Нет доступных направлений</p>
      </div>
    {/if}
  </div>
</section>