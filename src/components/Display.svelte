<script lang="ts">
    export let value: string;
</script>

<div class="display">
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
</style>