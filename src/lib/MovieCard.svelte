<script lang="ts">
	import { Card, ButtonGroup, Button } from 'flowbite-svelte';
	export let movie: any;
	export let myMovies: any[];

	const handleAdd = () => {
		console.log(myMovies);
		myMovies = [movie, ...myMovies];
		console.log(myMovies);
	};
</script>

<div class="mt-2 max-w-4xl">
	<Card img={movie.poster} href={'/movies/' + movie.id}>
		<h3 class="text-xl font-bold">{movie.title}</h3>
		<div class="mt-2 flex flex-row">
			<p>{movie.genres.join(', ')}</p>
		</div>
		<div class="mt-2" />
	</Card>
	<Button on:click={handleAdd} outline color="green">Add to MovieCastle</Button>
</div>
