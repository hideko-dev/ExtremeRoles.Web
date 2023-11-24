<script>
    import Features from "./features.svelte";
    import {onMount} from "svelte";
    let lineWidth = 0;
    onMount(() => {
        setTimeout(() => {
            lineWidth = 90
        }, 100);
    })
</script>

<!--    <div>-->
<!--        <p class="title">Powerful AmongUs mod for <span>advanced</span> users</p>-->
<!--        <p class="bio">Among Us mods that are very powerful and finely customizable for all users to enjoy.</p>-->
<!--    </div>-->

<section>
    <div class="cover">
        <p class="title">ExtremeRoles</p>
        <div class="line" style="width: {lineWidth}%"/>
        <Features/>
    </div>
</section>

<style>
    section {
        font-family: 'Poppins', sans-serif;
        height: 100vh;
        width: 100%;
        display: flex;
    }
    .title {
        font-family: 'Poppins', sans-serif;
        font-size: 50px;
        font-weight: 500;
        margin-left: 5%;
    }
    .line {
        background: linear-gradient(to right, white, transparent 80%);
        height: 1px;
        margin-left: 5.1%;
        transition: all 0.5s ease;
        border-radius: 100px;
    }
    .cover {
        position: absolute;
        left: 0;
        bottom: 9%;
        width: 100%;
    }
    @media (max-width: 800px) {
    }
</style>