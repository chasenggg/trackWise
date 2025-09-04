<script lang="ts">
  import { page } from '$app/stores';
  import SurveyForm from '$lib/components/SurveyForm.svelte';
  import { surveys } from '$lib/stores';
  import type { Survey } from '$lib/types';

  export let data: { id: string };
  let id = data.id;
  let survey: Survey | undefined;

  $: surveys.subscribe((list) => {
    survey = list.find((s) => s.id.toString() === id);
  });
</script>

{#if survey}
  <h2>{survey.title}</h2>
  <p>{survey.description}</p>
  <SurveyForm {survey} />
{:else}
  <p>Survey not found</p>
{/if}

