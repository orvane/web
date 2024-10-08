<script lang="ts">
	import type { Snippet } from 'svelte';

	interface AuthLayoutProps {
		children: Snippet;
	}

	let {}: AuthLayoutProps = $props();
</script>

<div>test</div>
