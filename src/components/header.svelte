<script>
    import Fa from "svelte-fa";
    import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
    import Menu from "./menu.svelte";
    import {menuState, toggleMenu} from "$lib/menu.js";
    let arrowRotate = 0;
    $: {
        if($menuState === false){
            arrowRotate = 0;
        } else if($menuState === true){
            arrowRotate = -180;
        }
    }
</script>

<section>
    <div class="logo" on:click={toggleMenu}>
        <p>ExtremeRoles</p>
        <div class="icon" style="rotate: {arrowRotate}deg"><Fa icon={faChevronDown} size="14"/></div>
        <Menu/>
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 4rem;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
    }
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
    }
    .logo {
        font-weight: 500;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        user-select: none;
    }
</style>