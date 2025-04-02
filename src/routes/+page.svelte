<script>
  import ConsultationForm from '$lib/ConsultationForm.svelte';
  import Testimonials from '$lib/Testimonials.svelte';
  import WorkStages from '$lib/WorkStages.svelte';
  import Problems from '$lib/Problems.svelte';
  import Specialist from '$lib/Specialist.svelte';
</script>

<svelte:head>
  <title>Dia.log | Логопед для вашего ребёнка</title>
  <meta name="description" content="Профессиональная помощь в развитии речи вашего ребёнка" />
</svelte:head>

<section id="about">
  <Specialist />
</section>

<section id="problems">
  <Problems />
</section>

<section id="stages">
  <WorkStages />
</section>

<section id="testimonials">
  <Testimonials />
</section>

<section id="consultation">
  <ConsultationForm />
</section>