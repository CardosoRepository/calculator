<script lang="ts">
    export let value: string;

    $: fontSize = value.length > 20 ? 'small' : `s-${value.length}`
</script>

<div class={`display ${fontSize}`}>
    <span>{value}</span>
</div>

<style>
    .display {
        display: flex;
        flex: 1;
        background-color: aliceblue;
        justify-content: flex-end;
        align-items: center;
        padding: 0px 5px;
        border: 1px solid var(--background-color);
        overflow: hidden;
        font-size: 2.5rem;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .s-14 { font-size: 2.40rem; }
    .s-15 { font-size: 2.30rem; }
    .s-16 { font-size: 2.20rem; }
    .s-17 { font-size: 2.05rem; }
    .s-18 { font-size: 1.95rem; }
    .s-19 { font-size: 1.85rem; }
    .s-20 { font-size: 1.75rem; }

    .small { font-size: 1.60rem; }
</style>