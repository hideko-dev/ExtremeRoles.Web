<script>
    let style = "opacity: 0; pointer-events: none"
    import { featuresOverlayState, closeFeaturesOverlay } from "$lib/featuresOverlay.js";
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
    <div>
        <div on:click={closeFeaturesOverlay}>click to close</div>
        <p>このIDは割り振り用: {$featuresOverlayState}</p>
    </div>
</section>

<style>
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
</style>