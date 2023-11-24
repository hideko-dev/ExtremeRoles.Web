<section>
    <div class="navs">
        <a href="https://exr-docs.github.com">Documentation</a>
        <a href="/status">Status</a>
    </div>
</section>

<style>
    .navs {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 300;
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        margin-left: 2.5rem;
        transition: all 0.2s;
    }
    section a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.6);
        transition: all 0.2s;
    }
    section a:hover {
        color: white;
    }
    @media (max-width: 650px) {
        .navs {
            display: none;
        }
    }
</style>