import type { LoadEvent } from '@sveltejs/kit';
import { browser } from '$app/environment';
import { getPopular } from '$lib/API';

export async function load({ fetch, params }: LoadEvent) {
	let myMovies = [];

	if (typeof localStorage !== 'undefined') {
		const storedMyMovies = localStorage.getItem('myMovies');
		if (storedMyMovies !== null) {
			myMovies = (browser && JSON.parse(localStorage.getItem('myMovies') ?? '')) || [];
		}
	}

	const movies = getPopular();
	return { myMovies, movies };
}
