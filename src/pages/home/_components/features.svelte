<section>
    <ul class="cards">

        <li class="card roles">
            <p class="title">+50 roles</p>
        </li>

        <li class="card options">
            <p class="title">+700 options</p>
        </li>

        <li class="card cosmetics">
            <p class="title">Custom cosmetics</p>
        </li>

        <li class="card advanced">
            <p class="title">Advanced</p>
        </li>

        <li class="card fastest">
            <p class="title">Fastest</p>
        </li>

    </ul>
</section>

<style>
    section {
        height: 100vh;
        width: 50%;
        margin: 0 auto;
        font-family: 'Poppins', sans-serif;
    }
    .cards {
        display: grid;
        grid-template-columns: 20rem 20rem 15rem;
        grid-template-rows: 300px 300px;
        gap: 20px 20px;
    }
    .card {
        background: white;
        border-radius: 30px;
        position: relative;
        list-style: none;
        transition: all 0.3s;
    }
    .card:hover {
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
    }
    .card .title {
        position: absolute;
        left: 20px;
        bottom: 10px;
        font-size: 20px;
        font-weight: 500;
    }
    .roles {
        width: 20rem;
    }
</style>