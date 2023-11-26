<script>
    import { onMount } from 'svelte';
    import { fade } from "svelte/transition";
    import { featuresOverlayState } from '$lib/featuresOverlay.js';
    import { cards } from "$lib/featuresCards.js";
    let bars = [];
    let title = "";
    let sub = "";
    let interval;

    $: {
        if ($featuresOverlayState === 0) {
            resetBars();
        } else {
            bars = Array.from({ length: 5 }, () => {
                return { width: 0 };
            });
            startTimer($featuresOverlayState);
            const id = $featuresOverlayState
            if(id === 1){
                title = cards.roles.title
                sub = cards.roles.sub
            } else if(id === 2){
                title = cards.options.title
                sub = cards.options.sub
            } else if(id === 3){
                title = cards.sub1.title
                sub = cards.sub1.sub
            } else if(id === 4){
                title = cards.sub2.title
                sub = cards.sub2.sub
            } else if(id === 5){
                title = cards.sub3.title
                sub = cards.sub3.sub
            }
        }
    }

    function resetBars() {
        bars = Array.from({ length: 5 }, () => {
            return { width: 0 };
        });
        clearInterval(interval);
        interval = null;
    }

    function setBar(id){
        bars.forEach((bar, index) => {
            if(id-1 === index) {
                bar.width = 100
            } else {
                bar.width = 0
            }
        })
    }

    function startTimer(id) {
        interval = null;
        clearInterval(interval);
        bars.forEach((bar, index) => {
            if(id-1 === index) {
                bar.width = 100
            }
        });
        interval = setInterval(() => {
            setBar(id)
            if(id !== 5){
                featuresOverlayState.set(id+1)
                if(id === 1){
                    title = cards.options.title
                    sub = cards.options.sub
                } else if(id === 2){
                    title = cards.sub1.title
                    sub = cards.sub1.sub
                } else if(id === 3){
                    title = cards.sub2.title
                    sub = cards.sub2.sub
                } else if(id === 4){
                    title = cards.sub3.title
                    sub = cards.sub3.sub
                }
            } else {
                featuresOverlayState.set(1)
                title = cards.roles.title
                sub = cards.roles.sub
            }
        }, 5000)
    }
</script>

<section>
    <div class="left">
        <div class="timebars">
            {#each bars as {width}}
                <div class="bar"><div class="progress" style="width: {width}%"/></div>
            {/each}
        </div>

        {#key $featuresOverlayState}
            <div in:fade={{ duration: 200, delay: 100 }} out:fade={{ duration: 200, delay: 0 }} style="position: absolute">
                <p>{title}</p>
                <p>{sub}</p>
            </div>
        {/key}
    </div>

    <div class="right">
        <p>ここにIMG</p>
    </div>
</section>

<style>
    .right {
        margin-left: 3rem;
        background: #2f2f2f;
        height: 25rem;
        width: 15rem;
        border-radius: 20px;
    }
    section {
        display: flex;
        justify-content: center;
    }

    .timebars {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .progress {
        height: 100%;
        background-color: white;
        border-radius: 100px;
        pointer-events: none;
        transition: all 5s;
    }

    .bar {
        width: 50px;
        height: 4px;
        background: gray;
        border-radius: 100px;
        cursor: pointer;
    }
</style>
