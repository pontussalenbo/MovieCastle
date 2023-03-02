import type { LoadEvent } from '@sveltejs/kit';
import { browser } from '$app/environment';
import { getPopular } from '$lib/API';

export async function load({ fetch, params }: LoadEvent) {
	let ret_obj = {};

	if (typeof localStorage === 'undefined') {
		ret_obj = { myMovies: [] };
	} else {
		const myMovies = localStorage.getItem('myMovies');
		if (myMovies !== null) {
			ret_obj = { myMovies: browser && JSON.parse(localStorage.getItem('myMovies') ?? '') };
		}
	}

	const movies = getPopular();
	return { ...ret_obj, movies: movies };
}
