<script lang="ts">
	// import Carousel from 'svelte-carousel';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import MovieCard from './MovieCard.svelte';
	let carousel;
	export let movies: any[];
	export let myMovies: any[];
	export let title: string;
	export let moviecastle: boolean = false;
	const handleNextClick = () => {
		carousel.goToNext();
	};
</script>

<div class="min-h-md">
	<div class="text-4xl font-medium mt-4">
		{title}
	</div>
	<Splide
		options={{ perPage: Math.max(1, Math.min(movies.length, 5)), perMove: 1, gap: '5rem', rewind: true }}
		class="flex flex-row"
	>
		{#each movies as movie}
			<SplideSlide>
				<MovieCard {movie} bind:myMovies {moviecastle} />
			</SplideSlide>
		{/each}
	</Splide>
</div>
