<script lang="ts">
	import { Card, ButtonGroup, Button } from 'flowbite-svelte';
	export let movie: any;
	export let myMovies: any[];
	export let moviecastle: boolean = false;

	const handleAdd = () => {
		if (myMovies.find(item => movie.id === item.id)) return;
		myMovies = [movie, ...myMovies];
		localStorage.setItem("myMovies", JSON.stringify(myMovies));
	};

	const handleRemove = (e: Event) => {
		myMovies = myMovies.filter(item => movie.id !== item.id);
		if (myMovies.length === 0) localStorage.removeItem("myMovies");
		else localStorage.setItem("myMovies", JSON.stringify(myMovies));
	}
</script>

<div class="mt-2 max-w-4xl">
	<Card img={movie.poster} href={'/movies/' + movie.id}>
		<h3 class="text-xl font-bold">{movie.title}</h3>
		<div class="mt-2 flex flex-row">
			<p>{movie.genres.join(', ')}</p>
		</div>
		<div class="mt-2" />
	</Card>
	{#if moviecastle}
		<Button on:click={handleRemove} outline color="red">Remove</Button>
	{:else}
		<Button on:click={handleAdd} outline color="green">Add to MovieCastle</Button>
	{/if}
</div>
