<script>
  import { surveys } from '$lib/stores';
</script>

<h2>Available Surveys</h2>
<ul>
  {#each $surveys as survey}
    <li><a href={`/surveys/${survey.id}`}>{survey.title}</a></li>
  {/each}
</ul>
