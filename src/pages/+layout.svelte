<script>
	import Fonts from "$lib/fonts.svelte";
	import Header from "../components/header/header.svelte"
	import '../globals.css'
</script>

<div>
	<Fonts/>
	<main>
		<Header/>
		<slot />
	</main>
</div>