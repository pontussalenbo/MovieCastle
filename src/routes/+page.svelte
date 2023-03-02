<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import { Checkbox } from 'flowbite-svelte';

	import SearchForm from '$lib/SearchForm.svelte';
	import CardCarousel from '$lib/CardCarousel.svelte';
	import Divider from '$lib/Divider.svelte';

	let movies = data.movies;
	let myMovies: any[] = data.myMovies;
	let genres = data.genres;
	let selectedGenres: any[] = [];
	let submittedSearchText = '';
</script>

<div class="p-8 flex flex-col w-full">
	<SearchForm bind:submittedSearchText bind:movies bind:selectedGenres />
	<div class="flex flex-row flex-wrap">
		{#each genres as genre}
			<Checkbox class="m-2" custom bind:group={selectedGenres} value={genre}>
				<div
					class="font-normal px-3 py-1 text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-gray-600 peer-checked:bg-gray-300 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
				>
					<div class="w-full text-lg font-semibold">{genre.name}</div>
				</div>
			</Checkbox>
		{/each}
	</div>
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
	<div class="flex flex-row items-center mt-2">
		<p class="text-4xl mr-3">My</p>
		<img
			class="w-[70px] mt-5"
			src="https://cdn-icons-png.flaticon.com/512/618/618855.png"
			alt="castle"
		/>
	</div>
	<CardCarousel bind:movies={myMovies} bind:myMovies title="" moviecastle={true} />
</div>
