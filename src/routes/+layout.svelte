<script lang="ts">
	import type { Snippet } from 'svelte';

	import '$styles/app.css';

	interface MainLayoutProps {
		children: Snippet;
	}

	let { children }: MainLayoutProps = $props();
</script>

{@render children()}
