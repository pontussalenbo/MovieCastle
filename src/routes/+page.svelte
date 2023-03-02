<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;

	import SearchForm from '../lib/SearchForm.svelte';
	import CardCarousel from '../lib/CardCarousel.svelte';
	import Divider from '../lib/Divider.svelte';
	let movies = data.movies;
	let myMovies: any[] = data.myMovies;
	let submittedSearchText = '';
</script>

<div class="p-8 flex flex-col w-full">
	<SearchForm bind:submittedSearchText bind:movies />
	{#if submittedSearchText !== ''}
		<CardCarousel
			title={`Movies based on search: ${submittedSearchText}`}
			bind:movies
			bind:myMovies
		/>
	{:else}
		<CardCarousel title="Hottest movies today" bind:movies bind:myMovies />
	{/if}
	<Divider />
	<CardCarousel bind:movies={myMovies} bind:myMovies  title="MyMovieCastle" moviecastle={true} />
</div>
