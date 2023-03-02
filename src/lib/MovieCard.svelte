<script lang="ts">
	import { Card, ButtonGroup, Button } from 'flowbite-svelte';

	export let movie: any;
	export let myMovies: any[];
	export let moviecastle: boolean = false;

	const handleAdd = () => {
		if (myMovies.find((item) => movie.id === item.id)) return;
		myMovies = [movie, ...myMovies];
		localStorage.setItem('myMovies', JSON.stringify(myMovies));
	};

	const handleRemove = (e: Event) => {
		myMovies = myMovies.filter((item) => movie.id !== item.id);
		if (myMovies.length === 0) localStorage.removeItem('myMovies');
		else localStorage.setItem('myMovies', JSON.stringify(myMovies));
	};
</script>

<div style="height: 100%; display: flex; flex-direction: column;">
	<Card img={movie.poster} href={'/movies/' + movie.id} style="height: 100%;">
		<h3 class="text-xl font-bold ellipsis line-clamp-2">{movie.title}</h3>
		<div class="mt-2 flex flex-row">
			<p>{movie.genres.join(', ')}</p>
		</div>
		<div class="mt-2" />
	</Card>
	{#if moviecastle}
		<Button class="w-full" on:click={handleRemove} color="red">Remove</Button>
	{:else}
		<Button class="w-full" on:click={handleAdd} color="green">Add to MovieCastle</Button>
	{/if}
</div>
