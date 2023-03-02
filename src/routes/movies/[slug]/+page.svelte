<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;
	import { onMount } from 'svelte';
	import { getMovieInfo, getTrailerURL } from '$lib/API';
	import { Img, Button, Rating } from 'flowbite-svelte';
	const BACKDROP_URL = 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces';
	const POSTER_URL = 'https://themoviedb.org/t/p/w600_and_h900_bestv2/';

	let movie: any = {};
	let myMovies: any = {};
	let trailerURL: string = '';
	onMount(async () => {
		movie = await getMovieInfo(data.slug);
		myMovies = JSON.parse(localStorage.getItem('myMovies') ?? '[]');
		trailerURL = await getTrailerURL(movie.id);
	});

	const handleAdd = () => {
		if (myMovies.find((item: any) => movie.id === item.id)) return;
		movie['poster'] = POSTER_URL + movie.poster_path;
		const { id, title, poster } = movie;
		const genres = movie.genres.map((m: any) => m.name);
		const date = movie.release_date.slice(0, 4);
		const savedMovie = {
			id,
			title,
			genres,
			poster,
			date
		};
		myMovies = [savedMovie, ...myMovies];
		localStorage.setItem('myMovies', JSON.stringify(myMovies));
	};
</script>

<svelte:head>
	<style>
		body {
			background: rgba(0, 0, 0, 0.7);
		}
		.rating > p {
			color: white;
			font-size: inherit;
		}
	</style>
</svelte:head>

<div class="flex flex-col items-center text-white">
	{#if movie.title}
		<div class="h-0">
			<Img
				class="min-h-[600px] object-cover opacity-30 z-0"
				src={BACKDROP_URL + movie.backdrop_path}
			/>
		</div>

		<a class="flex self-start text-4xl z-10 p-5 mb-5 opacity-80" href="/">
			<div>
				<Img
					class="w-[70px] brightness-0 invert"
					src="https://cdn-icons-png.flaticon.com/512/618/618855.png"
					alt="castle"
				/>
				<p class="text-xs">Take me back!</p>
			</div>
		</a>

		<div class="flex flex-row w-2/3 z-10 min-h-[500px]">
			<Img class="w-[300px] h-[450px]" src={POSTER_URL + movie.poster_path} />
			<div class="flex flex-col text-center ml-5 max-h-[450px]">
				<div class="text-4xl">{movie.title + ' (' + movie.release_date.slice(0, 4) + ')'}</div>
				<div class="text-lg overflow-auto">
					<p>{movie.release_date}</p>
					<p>Genres: {movie.genres.map((m) => m.name).join(', ')}</p>
					<p class="text-left text-xl">Overview</p>
					<p class="text-left">{movie.overview}</p>
					<Rating class="rating" count rating={movie.vote_average}>
						<p class="ml-2">of {movie.vote_count} reviews</p>
					</Rating>
					<a
						href={'https://www.imdb.com/title/' + movie.imdb_id}
						target="_blank"
						rel="noopener noreferrer"
						><Img
							class="w-[50px]"
							src="https://cdn-icons-png.flaticon.com/512/5977/5977585.png"
							alt="imdb"
						/></a
					>
					<p>Spoken languages: {movie.spoken_languages.map((m) => m.english_name).join(', ')}</p>
				</div>
				<Button class="w-full mt-2" on:click={handleAdd} color="green">Add to MovieCastle</Button>
			</div>
		</div>

		<div>
			<div>
				<iframe
					width="560"
					height="315"
					src={trailerURL}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>
		</div>
	{/if}
</div>
