<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;
	import { onMount } from 'svelte';
	import { getMovieInfo } from '$lib/API';
	import { Img } from 'flowbite-svelte';
	const IMG_URL = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces";


	let movie: any = {};
	onMount(async () => {
		movie = await getMovieInfo(data.slug);
		console.log(movie);
	})
</script>

<div class="flex flex-col justify-center text-4xl">
	{#if movie.title}
		<Img src={IMG_URL+movie.backdrop_path} />
		hej du har kommit till {movie.title}
	{/if}
</div>
