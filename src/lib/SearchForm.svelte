<script lang="ts">
	import { Search, Button } from 'flowbite-svelte';
	import { getByTitle } from './API';

	export let submittedSearchText = '';
	export let movies;
	let searchText = '';

	const onSubmit = (e: Event) => {
		e.preventDefault();
		if (searchText.trim() === '') {
			return;
		}
		getByTitle(searchText).then((searchResult) => {
			movies = searchResult;
		});
		// console.log(`Search form submitted: ${searchText}`);
		submittedSearchText = searchText;
	};
</script>

<form on:submit={onSubmit}>
	<Search bind:value={searchText}>
		<Button type="submit">Search</Button>
	</Search>
</form>
