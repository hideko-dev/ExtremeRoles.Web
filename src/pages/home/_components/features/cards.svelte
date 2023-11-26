<script>
    import { onMount } from 'svelte';
    import { featuresOverlayState } from '$lib/featuresOverlay.js';
    let bars = [];
    let interval;

    $: {
        if ($featuresOverlayState === 0) {
            resetBars();
        } else {
            bars = Array.from({ length: 5 }, () => {
                return { width: 0 };
            });
            startTimer($featuresOverlayState);
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
        bars.forEach((bar, index) => {
            if(id-1 === index) {
                bar.width = 100
            }
        })

        interval = setInterval(() => {
            setBar(id)
            if(id !== 5){
                featuresOverlayState.set(id+1)
            } else {
                featuresOverlayState.set(1)
            }
        }, 5000)

        if (interval) {
            clearInterval(interval);
            interval = null;
        }

        // setInterval(() => {
        //     if (index === 4) {
        //         setTimeout(() => {
        //             featuresOverlayState.set(1);
        //             startTimer(1);
        //         }, 5000);
        //     } else {
        //         setTimeout(() => {
        //             featuresOverlayState.set(id + 1);
        //             startTimer(id + 1);
        //         }, 5000);
        //     }
        // }, 5000);
    }
</script>

<section>
    <div class="timebars">
        {#each bars as {width}}
            <div class="bar"><div class="progress" style="width: {width}%"/></div>
        {/each}
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: center;
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
