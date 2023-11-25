<script>
    import Fa from "svelte-fa";
    import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
</script>

<section>
    <div class="btn">
        <p>Read the documentation</p>
        <div class="icon">
            <Fa icon={faArrowRight} fw/>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: center;
        margin-left: 15%;
        margin-top: 1rem;
    }
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #1e1e1e;
        padding-inline: 1.2rem;
        padding-block: 5px;
        border-radius: 100px;
        transition: all 0.2s ease;
        border: 1px solid transparent;
        cursor: pointer;
        color: #d3d3d3;
    }
    .icon {
        margin-left: 5px;
        transition: all 0.2s ease;
    }
    .btn:hover {
        background: transparent;
        border-color: #2a2a2a;
    }
    .btn:hover .icon {
        transform: translateX(5px);
    }
</style>