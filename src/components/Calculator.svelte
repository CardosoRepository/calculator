<script lang="ts">
    import Display from "./Display.svelte";
    import Row from "./Row.svelte";
    import Button from "./Button.svelte";

    class Model {
        value: string;

        constructor(value: string = '0') {
            this.value = value;
        }

        inc() {
            return new Model(`${parseInt(this.value) + 1}`);
        }
    }

    let obj = new Model()

    function typedNumber(number: string) {
        // obj.value += number;
        obj = obj.inc();
    }
</script>

<div class="calculator">
    <Display value={obj.value} />
    <Row>
        <Button text="AC" triple highlight />
        <Button text="/" operation />
    </Row>
    <Row>
        <Button text="7" onClick={typedNumber} />
        <Button text="8" onClick={typedNumber} />
        <Button text="9" onClick={typedNumber} />
        <Button text="*" operation />
    </Row>
    <Row>
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="+" operation />
    </Row>
    <Row>
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="-" operation />
    </Row>
    <Row>
        <Button double text="0" />
        <Button text="," />
        <Button text="=" highlight />
    </Row>
</div>

<style>
    .calculator {
        background-color: var(--background-color);
        height: 220px;
        width: 150px;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }
</style>
