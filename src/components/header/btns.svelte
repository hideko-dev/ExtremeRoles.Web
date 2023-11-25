<script>
    import Fa from "svelte-fa";
    import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
</script>

<section>
    <div class="btns">
        <a class="btn" href="https://discord.com/invite/UzJcfBYcyS">
            <Fa icon={faDiscord}/>
            <p>Discord</p>
        </a>
        <a class="btn" href="https://github.com/yukieiji/ExtremeRoles">
            <Fa icon={faGithub}/>
            <p>Github</p>
        </a>
    </div>
</section>

<style>
    section {
        margin: 0 2.5rem 0 auto;
    }
    .btns {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .btn {
        background: rgba(0, 0, 0, 0.6);
        color: #d7d7d7;
        backdrop-filter: blur(10px);
        padding-inline: 10px;
        padding-block: 2px;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        transition: all 0.3s;
        text-decoration: none;
        font-weight: 400;
    }
    .btn:hover {
        opacity: 0.7;
    }
</style>