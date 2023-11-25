<script>
    import Fa from "svelte-fa";
    import {faBolt, faBrush, faCode, faFire} from "@fortawesome/free-solid-svg-icons";
    const cards = [
        {title: "Advanced", description: "Hello World", icon: faFire},
        {title: "Fast", description: "Hello World", icon: faBolt},
        {title: "Open Source", description: "Hello World", icon: faCode},
        {title: "Customizable", description: "Hello World", icon: faBrush},
    ];
</script>

<section>
    {#each cards as c}
        <div class="card">
            <div class="titles">
                <div class="icon">
                    <Fa icon={c.icon} fw/>
                </div>
                <p class="title">{c.title}</p>
            </div>
            <p class="desc">{c.description}</p>
        </div>
    {/each}
</section>

<style>
    .titles {
        display: flex;
        align-items: center;
        font-size: 17px;
        width: max-content;
    }
    .title {
        margin-left: 8px;
        font-weight: 500;
    }
    .icon {
        background: white;
        color: black;
        width: 2rem;
        height: 2rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 19px;
    }
    .desc {
        margin-top: 3px;
        color: #9a9a9a;
    }
    .card {
        background: rgba(25, 25, 25, 0.9);
        backdrop-filter: blur(50px);
        width: 12rem;
        height: 7rem;
        padding: 0.7rem;
        border-radius: 9px;
        position: relative;
    }
    section {
        width: 90%;
        margin: 15px auto 0;
        border-radius: 10px;
        display: flex;
        align-items: center;
        /*justify-content: center;*/
        gap: 10px;
        position: absolute;
        left: 5%;
        bottom: 8%;
    }
</style>