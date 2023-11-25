<script>
    import Features from "./features.svelte";
    import Btns from "./btns.svelte";
</script>

<!--    <div>-->
<!--        <p class="title">Powerful AmongUs mod for <span>advanced</span> users</p>-->
<!--        <p class="bio">Among Us mods that are very powerful and finely customizable for all users to enjoy.</p>-->
<!--    </div>-->

<section>
    <div>
        <p class="title">Powerful AmongUs mod for <span>advanced</span> users</p>
        <p class="sub">Among Us mods that are very powerful and finely customizable for all users to enjoy.</p>
        <Btns/>
        <Features/>
    </div>
</section>

<style>
    section {
        font-family: 'Poppins', sans-serif;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
    }
    .title {
        font-size: 50px;
        font-weight: 500;
        margin-left: 15%;
        width: 40rem;
        line-height: 4rem;
    }
    .sub {
        margin-left: 15%;
        color: #9b9b9b;
        font-weight: 500;
        font-size: 16px;
        width: 70%;
    }
    span {
        background: linear-gradient(to right, #00b2ff, #d000ff);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    @media (max-width: 800px) {
    }
</style>