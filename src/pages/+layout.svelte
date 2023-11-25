<script>
	// import { waitLocale, isLoading } from 'svelte-i18n'
	// export async function preload() {
	// 	return waitLocale()
	// }
	import {isLoading} from "svelte-i18n";
	console.log($isLoading)
	setTimeout(() => { console.log($isLoading) }, 2000)
	import Fonts from "$lib/fonts.svelte";
	import '../globals.css'
</script>

<div>
	<Fonts/>
	<main>
		<slot/>
	</main>
</div>