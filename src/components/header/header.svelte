<script>
    import Nav from "./nav.svelte";
    import Btns from "./btns.svelte";
    import Fa from "svelte-fa";
    import {faBolt} from "@fortawesome/free-solid-svg-icons";
</script>

<section>
    <div class="logo">
        <Fa icon={faBolt}/>
    </div>
    <Nav/>
    <Btns/>
</section>

<style>
    section {
        font-family: 'Poppins', sans-serif;
        z-index: 10;
        position: fixed;
        width: 100%;
        display: flex;
        align-items: center;
        background: transparent;
        height: 5rem;
    }
    .logo {
        font-size: 25px;
        font-weight: 400;
        margin-left: 2rem;
        display:flex;
        align-items: center;
        justify-content: center;
    }
</style>