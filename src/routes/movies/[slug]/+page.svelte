<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

<div class="flex justify-center text-4xl">
	hej du har kommit till {data.post.imdbkey}
</div>
