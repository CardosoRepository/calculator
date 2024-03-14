<script lang="ts">
    import Calculator from "./../components/Calculator.svelte";
</script>

<main>
    <Calculator />
</main>

<style>
    :global(body) {
        background-color: black;
    }

    :global(:root) {
        --background-color: #555;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>
