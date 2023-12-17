<script>
</script>

<section id="top">
    <div class="left">
        <p class="title">ExtremeRoles</p>
        <p class="bio">Bio Bio Bio Bio Bio Bio Bio Bio Bio</p>
        <a class="btn" href="https://exr-docs.vercel.app">Documentation</a>
    </div>
    <div class="right">
        <p>Img</p>
    </div>
</section>

<style>
    section {
        font-family: 'Poppins', sans-serif;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title {
        font-weight: 600;
        font-size: 60px;
    }
    .bio {
        width: 8rem;
        line-height: 22px;
        margin-left: 3px;
    }
    .left {
        margin-right: 6rem;
    }
    .right {
        background: #eeeeee;
        width: 25rem;
        height: 20rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
    }
    .btn {
        border: 1px solid black;
        width: max-content;
        padding-inline: 15px;
        padding-block: 5px;
        border-radius: 8px;
        transition: all 0.3s;
        position: relative;
        top: 25px;
        text-decoration: none;
        color: black;
        user-select: none;
    }
    .btn::before {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width: 0;
        height: 100%;
        background: black;
        border-radius: 6px;
        z-index: -1;
        transition: all 0.3s;
        cursor: pointer;
    }
    .btn:hover {
        color: white;
    }
    .btn:hover::before {
        width: 100%;
        left: 0;
    }
</style>