<script lang="ts">
    import { responses, surveys } from '$lib/stores';
    import type { Survey } from '$lib/types';

    let allResponses: any;
    responses.subscribe(r => allResponses = r);

    let allSurveys: Survey[];
    surveys.subscribe(s => allSurveys = s);
</script>

<h2> Survey responses </h2>

{#if allResponses.length === 0}
    <p>No responses yet.</p>
{:else}
    {#each allResponses as res, i}
    <div class="response">
      <h3>Response {i + 1} - 
        {allSurveys.find(s => s.id === res.surveyId)?.title}
      </h3>
      <ul>
        {#each Object.entries(res.answers) as [question, answer]}
          <li><strong>{question}:</strong> {answer}</li>
        {/each}
      </ul>
    </div>
  {/each}
{/if}