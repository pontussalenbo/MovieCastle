import type { LoadEvent } from '@sveltejs/kit';
import { browser } from '$app/environment';
import { getByTitle } from '$lib/API';

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

	const movies = getByTitle('Batman');
	return { ...ret_obj, movies: movies };
}
