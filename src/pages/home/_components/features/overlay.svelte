<script>
    import Fa from "svelte-fa";
    import Cards from "./cards.svelte"
    let style = "opacity: 0; pointer-events: none"
    import { featuresOverlayState, closeFeaturesOverlay } from "$lib/featuresOverlay.js";
    import {faXmark} from "@fortawesome/free-solid-svg-icons";
    $: {
        const state = $featuresOverlayState;
        if(state !== 0){
            style = "opacity: 1; pointer-events: all"
        } else {
            style = "opacity: 0; pointer-events: none"
        }
    }
</script>

<section style={style}>
    <div style="width: 80%">
        <div class="closebtn" on:click={closeFeaturesOverlay}>
            <p>close</p>
        </div>
        <Cards/>
    </div>
</section>

<style>
    .closebtn {
        border: 1px solid white;
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 0 auto;
    }
    .closebtn p {
        font-size: 11px;
        color: rgb(244, 244, 244);
    }
    section {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background: rgb(28,28,28);
        z-index: 100;
        transition: all 0.3s;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .contents {
        background:red;
    }
</style>