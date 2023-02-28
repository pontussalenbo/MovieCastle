import type { LoadEvent } from '@sveltejs/kit';
export async function load({ fetch, params }: LoadEvent) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    return { props: { data } };
}