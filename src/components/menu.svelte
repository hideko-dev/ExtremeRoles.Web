<script>
    import { menuState, toggleMenu } from "$lib/menu.js";
    import {faChild, faHatWizard, faSignature} from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import {onMount} from "svelte";
    let style = "opacity: 0; scale: 0.7";
    $: {
        if($menuState === false){
            style = "opacity: 0; scale: 0.9";
        } else if($menuState === true){
            style = "opacity: 1; scale: 1";
        }
    }
    const menus = [
        {title: "ExtremeHats", sub: "Hats for ExtremeSkins", icon: faHatWizard},
        {title: "ExtremeSkins", sub: "Skins for ExtremeRoles", icon: faChild},
        {title: "ExtremeNamePlate", sub: "NamePlate for ExtremeRoles", icon: faSignature},
    ]
    onMount(() => {
        window.addEventListener('click', handleClick);
        return () => { window.removeEventListener('click', handleClick); };
    });

    function handleClick(event) {
        if (event.target.closest('.menu, .logo')) return;
        if ($menuState) {
            toggleMenu()
        }
    }
</script>

<section style={style}>
    {#each menus as m}
        <div class="box">
            <div class="top">
                <Fa icon={m.icon}/>
                <p class="title">{m.title}</p>
            </div>
            <p class="sub">{m.sub}</p>
        </div>
    {/each}
</section>

<style>
    .box {
        font-size: 15px;
        padding-inline: 10px;
        padding-block: 5px;
        transition: all 0.2s;
        border-radius: 8px;
    }
    .box:hover {
        background: #e5e5e5;
    }
    .top {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .sub {
        font-size: 10px;
    }
    section {
        top: 3.2rem;
        position: absolute;
        width: 13rem;
        height: max-content;
        background:rgb(244,244,244);
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: all 0.2s;
        border-radius: 10px;
        transform-origin: top;
        padding: 5px;
    }
</style>