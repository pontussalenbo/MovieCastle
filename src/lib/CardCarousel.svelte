<script lang="ts">
	// import Carousel from 'svelte-carousel';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { CardPlaceholder } from 'flowbite-svelte';
	import '@splidejs/svelte-splide/css';
	import MovieCard from './MovieCard.svelte';
	let carousel;
	export let movies: any[] = [];
	export let myMovies: any[];
	export let title: string;
	export let moviecastle: boolean = false;
	const handleNextClick = () => {
		carousel.goToNext();
	};

	$: splideOptions = {
		perPage: movies ? Math.max(1, Math.min(movies.length, 5)) : 5,
		perMove: 1,
		gap: '2rem',
		rewind: true
	};
</script>

<div class="min-h-md">
	<div class="text-4xl font-medium mt-4">
		{title}
	</div>
	<Splide
		options={splideOptions}
		class="flex flex-row"
	>
		{#if movies === undefined || movies.length === 0}
			<SplideSlide>
				<CardPlaceholder class="mt-4" />
			</SplideSlide>
		{:else}
			{#each movies as movie}
				<SplideSlide>
					<MovieCard {movie} bind:myMovies {moviecastle} />
				</SplideSlide>
			{/each}
		{/if}
	</Splide>
</div>
