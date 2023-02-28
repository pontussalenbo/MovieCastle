<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import SearchForm from '../lib/SearchForm.svelte';
	import CardCarousel from '../lib/CardCarousel.svelte';
	import Divider from '../lib/Divider.svelte';
	export let data: any;
	let movies = [
		{
			imgsrc:
				'https://m.media-amazon.com/images/M/MV5BMGJkMjUxNmMtYTk2Mi00N2M1LThhYTgtMDVmZTU4ZjE4MmU3XkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_FMjpg_UX630_.jpg',
			title: 'Pearl Harbour',
			genres: ['Action', 'Drama', 'History'],
			imdbkey: 'tt0213149',
			id: '676'
		},
		{
			imgsrc:
				'https://m.media-amazon.com/images/M/MV5BMGJkMjUxNmMtYTk2Mi00N2M1LThhYTgtMDVmZTU4ZjE4MmU3XkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_FMjpg_UX630_.jpg',
			title: 'Pearl Harbour',
			genres: ['Action', 'Drama', 'History'],
			imdbkey: 'tt0213149',
			id: '676'
		},
		{
			imgsrc:
				'https://m.media-amazon.com/images/M/MV5BMGJkMjUxNmMtYTk2Mi00N2M1LThhYTgtMDVmZTU4ZjE4MmU3XkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_FMjpg_UX630_.jpg',
			title: 'Pearl Harbour',
			genres: ['Action', 'Drama', 'History'],
			imdbkey: 'tt0213149',
			id: '676'
		},
		{
			imgsrc:
				'https://m.media-amazon.com/images/M/MV5BMGJkMjUxNmMtYTk2Mi00N2M1LThhYTgtMDVmZTU4ZjE4MmU3XkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_FMjpg_UX630_.jpg',
			title: 'Pearl Harbour',
			genres: ['Action', 'Drama', 'History'],
			imdbkey: 'tt0213149',
			id: '676'
		},
		{
			imgsrc:
				'https://m.media-amazon.com/images/M/MV5BMGJkMjUxNmMtYTk2Mi00N2M1LThhYTgtMDVmZTU4ZjE4MmU3XkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_FMjpg_UX630_.jpg',
			title: 'Pearl Harbour',
			genres: ['Action', 'Drama', 'History'],
			imdbkey: 'tt0213149',
			id: '676'
		}
	];
	const myMovies = [];
	let submittedSearchText = '';
</script>

<div class="p-8 flex flex-col w-full">
	<SearchForm bind:submittedSearchText bind:movies />
	<!-- <Alert>
		{console.log(data)}
		<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
	</Alert> -->
	{#if submittedSearchText !== ''}
		<CardCarousel title={`Movies based on search: ${submittedSearchText}`} {movies} />
	{:else}
		<CardCarousel title="Hottest movies today" {movies} />
	{/if}
	<Divider />
	<CardCarousel title="My MovieCastle" movies={myMovies} />
</div>
