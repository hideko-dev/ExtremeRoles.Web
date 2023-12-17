<script>
    import Top from "./_components/top.svelte";
    import Features from "./_components/features/cards.svelte";
    import Fa from "svelte-fa";
    import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
    import {handleScroll} from "$lib/scroll/scroller.js";
</script>

<section>
    <div style="width: 100%">
        <Top/>
        <Features/>
    </div>

    <div class="gotop" on:click={() => handleScroll("top")}>
        <Fa icon={faChevronUp} fw/>
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        height: max-content;
    }
    .gotop {
        background: white;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
        border-radius: 100px;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 94%;
        left: 96.5%;
    }
</style>