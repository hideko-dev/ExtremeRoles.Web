<section>
    <ul class="cards">

        <li class="card roles">
            <p class="title">+50 roles</p>
            <p class="sub">Hello World</p>
        </li>

        <li class="card options">
            <p class="title">+700 options</p>
            <p class="sub">Hello World</p>
        </li>

        <div class="subs">
            <li class="card cosmetics subc">
            <p class="title">Custom cosmetics</p>
            <p class="sub">Hello World</p>
            </li>

            <li class="card advanced subc">
            <p class="title">Advanced</p>
            <p class="sub">Hello World</p>
          </li>

            <li class="card fastest subc">
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
    }
    .cards {
        display: grid;
        grid-template-columns: 35rem 20rem; /* 2列のグリッド */
        grid-template-rows: 15rem auto; /* 2行のグリッド */
        gap: 10px; /* グリッドアイテム間の間隔 */
        padding: 20px; /* グリッドコンテナのパディング */
        height: 82rem; /* 高さの合計 (15rem + カード2の高さ + 2 * gap) */
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
        left: 20px;
        bottom: 10px;
        font-size: 20px;
        font-weight: 500;
        transition: all 0.2s;
    }
    .card .sub {
        position: absolute;
        left: 22px;
        bottom: 0;
        font-size: 15px;
        font-weight: 400;
        transition: all 0.2s;
        color: gray;
        opacity: 0;
    }
    .card:hover .title {
        bottom: 28px;
    }
    .card:hover .sub {
        bottom: 10px;
        opacity: 1;
    }

    .roles {
        width: 35rem;
        height: 15rem;
    }

    .options {
        width: 20rem;
        height: 32rem;
    }

    .subs {
        display: flex;
        gap: 10px;
    }

    .subc {
        width: 100%;
        height: 16.3rem;
    }
</style>