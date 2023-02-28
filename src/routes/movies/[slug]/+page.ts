import type { LoadEvent } from '@sveltejs/kit';
export async function load({ params }: LoadEvent) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    // return { props: { data } };
    return {
        post: {
            imdbkey: `${params.slug}`,

            content: `Content for ${params.slug} goes here`
        }
    };
}
