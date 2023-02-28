import { getMovieInfo } from '$lib/API';
import type { LoadEvent } from '@sveltejs/kit';

export async function load({ params }: LoadEvent) {
	return await getMovieInfo(params.slug);
}
