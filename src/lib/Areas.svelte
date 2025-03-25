<script lang="ts">
  import { onMount } from 'svelte';
  import { getAreas } from './sanity';
  
  interface Area {
    title: string;
    description: string;
    icon?: string;
    bulletPoints?: string[];
  }
  
  let areas: Area[] = [];
  let loading: boolean = true;
  let error: string | null = null;

  onMount(async () => {
    try {
      areas = await getAreas();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Unknown error occurred';
    } finally {
      loading = false;
    }
  });
</script>

<section id="areas" class="py-20 bg-secondary-light">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-16">
      Направления психологической работы
    </h2>
    
    {#if loading}
      <div class="text-center w-full">
        <p class="text-gray-600">Загрузка информации...</p>
      </div>
    {:else if error}
      <div class="text-center text-red-600 w-full">
        <p>Произошла ошибка при загрузке информации</p>
      </div>
    {:else if areas.length > 0}
      <div class="space-y-12">
        {#each areas as area, index}
          <div class="bg-white rounded-lg shadow-md p-8">
            <h3 class="text-2xl font-heading font-semibold text-primary mb-4">{area.title}</h3>
            
            <div class="prose max-w-none">
              <p class="text-gray-700">{area.description}</p>
              
              <!-- If you have a list of bullet points in your description, you can render them here -->
              {#if area.bulletPoints && area.bulletPoints.length > 0}
                <ul class="mt-4 space-y-2">
                  {#each area.bulletPoints as point}
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-gray-700">{point}</span>
                    </li>
                  {/each}
                </ul>
              {/if}
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