import type { LoadEvent } from '@sveltejs/kit';
import { browser } from "$app/environment"

export async function load({ fetch, params }: LoadEvent) {
    if (typeof localStorage === "undefined") {
        return { myMovies: [] };
    }
    const myMovies = localStorage.getItem('myMovies');
    if (myMovies !== null) {        
        return {"myMovies": browser && JSON.parse(localStorage.getItem('myMovies') ?? "")};
    }
    return { myMovies: [] };
}