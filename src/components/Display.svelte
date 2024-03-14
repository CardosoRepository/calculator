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
        font-size: 1.7rem;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .s-11 { font-size: 1.5rem; }
    .s-12 { font-size: 1.4rem; }
    .s-13 { font-size: 1.3rem; }
    .s-14 { font-size: 1.25rem; }
    .s-15 { font-size: 1.15rem; }
    .s-16 { font-size: 1.05rem; }
    .s-17 { font-size: 1.00rem; }
    .s-18 { font-size: 0.95rem; }
    .s-19 { font-size: 0.90rem; }
    .s-20 { font-size: 0.85rem; }

    .small { font-size: 0.65rem; }
</style>