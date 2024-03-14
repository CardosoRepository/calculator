<script lang="ts">
    export let text = '';
    export let triple = false;
    export let double = false;
    export let operation = false;
    export let highlight = false;
</script>

<!-- <button class={`button ${triple ? 'triple' : ''}`}>{text}</button> -->
<button class="button" class:triple class:double class:operation class:highlight>{text}</button>

<style>
    .button {
        margin: 0;
        border: 1px solid var(--background-color);
        flex-basis: 25%;
    }

    .triple {
        flex-basis: 75%;
    }

    .double {
        flex-basis: 50%;
    }

    .operation {
        background-color: orange;
        color: white;
    }

    .highlight {
        background-color: red;
        color: white;
    }
</style>
