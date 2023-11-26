<script>
    import FeaturesOverlay from "./overlay.svelte";
    import { openFeaturesOverlay } from "$lib/featuresOverlay.js";
    import { cards } from "$lib/featuresCards.js";
</script>

<section>
    <FeaturesOverlay/>
    <ul class="cards">
        <li class="card roles" on:click={() => openFeaturesOverlay(1)}>
            <p class="title">{cards.roles.title}</p>
            <p class="sub">{cards.roles.sub}</p>
        </li>
        <li class="card options" on:click={() => openFeaturesOverlay(2)}>
            <p class="title">{cards.options.title}</p>
            <p class="sub">{cards.roles.sub}</p>
        </li>
        <div class="subs">
            <li class="card cosmetics subc" on:click={() => openFeaturesOverlay(3)}>
            <p class="title">Custom cosmetics</p>
            <p class="sub">Hello World</p>
            </li>
            <li class="card advanced subc" on:click={() => openFeaturesOverlay(4)}>
            <p class="title">Advanced</p>
            <p class="sub">Hello World</p>
          </li>
            <li class="card fastest subc" on:click={() => openFeaturesOverlay(5)}>
            <p class="title">Fastest</p>
            <p class="sub">Hello World</p>
          </li>
        </div>
    </ul>
</section>

<style>
    section {
        height: 100vh;
        width: 50%;
        margin: 0 auto;
        font-family: 'Poppins', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cards {
        display: grid;
        grid-template-columns: 37rem 20rem;
        grid-template-rows: 15rem auto;
        gap: 10px;
        height: max-content;
    }
    .card {
        background: white;
        border-radius: 30px;
        position: relative;
        list-style: none;
        transition: all 0.3s;
        cursor: pointer;
        padding: 20px;
        box-sizing: border-box;
    }
    .card:hover {
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
    }
    .card .title {
        position: absolute;
        left: 25px;
        bottom: 15px;
        font-size: 20px;
        font-weight: 500;
        transition: all 0.2s;
        line-height: 1.5rem;
    }
    .card .sub {
        position: absolute;
        left: 25px;
        bottom: 0;
        font-size: 15px;
        font-weight: 400;
        transition: all 0.2s;
        color: gray;
        opacity: 0;
    }
    .card:hover .title {
        bottom: 32px;
    }
    .card:hover .sub {
        bottom: 10px;
        opacity: 1;
    }

    .roles {
        width: 37rem;
        height: 15rem;
    }

    .options {
        width: 20rem;
        height: 32rem;
    }

    .subs {
        display: flex;
        gap: 10px;
        height: 16.3rem;
    }

    .subc {
        width: 100%;
        height: 100%;
    }
</style>