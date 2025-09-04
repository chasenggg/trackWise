<script lang="ts">
    import type { Survey, Answer } from '$lib/types';
    import { responses } from '$lib/stores';
    export let survey: Survey;

    let answers: Answer = {};

    function submit() {
        responses.update(r => [...r, { surveyId: survey.id, answers }]);
        console.log('Survey submitted:', answers);
        alert('Survey submitted! Check console for details.');
        answers = {}; 
    }
</script>

<form on:submit|preventDefault={submit}>
    {#each survey.questions as q}
    <label>
        {q}
        <input type="text" bind:value={answers[q]} />
    </label>
    {/each}
    <button type="submit">Submit</button>   
</form>



