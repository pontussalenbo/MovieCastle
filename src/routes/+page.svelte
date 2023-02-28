<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;

	import SearchForm from '../lib/SearchForm.svelte';
	import CardCarousel from '../lib/CardCarousel.svelte';
	import Divider from '../lib/Divider.svelte';
	let movies = [
		{
			poster:
				'https://m.media-amazon.com/images/M/MV5BMGJkMjUxNmMtYTk2Mi00N2M1LThhYTgtMDVmZTU4ZjE4MmU3XkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_FMjpg_UX630_.jpg',
			title: 'Pearl Harbour',
			genres: ['Action', 'Drama', 'History'],
			id: '676',
			date: '2001'
		},
		{
			poster:
				'https://m.media-amazon.com/images/M/MV5BMGJkMjUxNmMtYTk2Mi00N2M1LThhYTgtMDVmZTU4ZjE4MmU3XkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_FMjpg_UX630_.jpg',
			title: 'Pearl Harbour',
			genres: ['Action', 'Drama', 'History'],
			id: '676',
			date: '2001'
		},
		{
			poster:
				'https://m.media-amazon.com/images/M/MV5BMGJkMjUxNmMtYTk2Mi00N2M1LThhYTgtMDVmZTU4ZjE4MmU3XkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_FMjpg_UX630_.jpg',
			title: 'Pearl Harbour',
			genres: ['Action', 'Drama', 'History'],
			id: '676',
			date: '2001'
		},
		{
			poster:
				'https://m.media-amazon.com/images/M/MV5BMGJkMjUxNmMtYTk2Mi00N2M1LThhYTgtMDVmZTU4ZjE4MmU3XkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_FMjpg_UX630_.jpg',
			title: 'Pearl Harbour',
			genres: ['Action', 'Drama', 'History'],
			id: '676',
			date: '2001'
		},
		{
			poster:
				'https://m.media-amazon.com/images/M/MV5BMGJkMjUxNmMtYTk2Mi00N2M1LThhYTgtMDVmZTU4ZjE4MmU3XkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_FMjpg_UX630_.jpg',
			title: 'Pearl Harbour',
			genres: ['Action', 'Drama', 'History'],
			id: '676',
			date: '2001'
		}
	];
	let myMovies: any[] = data.myMovies;
	console.log(myMovies);
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
