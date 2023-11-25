<script>
    import Top from "./_components/top.svelte";
    import Features from "./_components/features.svelte";
</script>

<section>
    <div style="width: 100%">
        <Top/>
        <Features/>
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        height: max-content;
    }
</style>