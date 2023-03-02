<script lang="ts">
	import { Search, Button } from 'flowbite-svelte';
	import { getByTitle, getMoviesByGenre } from './API';

	export let submittedSearchText = '';
	export let movies;
	export let selectedGenres: any[];
	let searchText = '';

	const onSubmit = (e: Event) => {
		e.preventDefault();
		if (searchText.trim() === '') {
			if (selectedGenres.length === 0) {
				return;
			}
			getMoviesByGenre(selectedGenres).then((searchResult) => {
				movies = searchResult;
			});
			return;
		}

		submittedSearchText = searchText;

		if (selectedGenres.length === 0) {
			getByTitle(searchText).then((searchResult) => {
				movies = searchResult;
			});
			return;
		}
		getByTitle(searchText).then((searchResult) => {
			movies = searchResult.filter((movie) => {
				console.log(movie.genres);
				return selectedGenres.every((genre) => movie.genres.includes(genre.name));
			});
		});
		// console.log(`Search form submitted: ${selectedGenres}`);
	};
</script>

<form on:submit={onSubmit}>
	<Search bind:value={searchText}>
		<Button type="submit">Search</Button>
	</Search>
</form>
