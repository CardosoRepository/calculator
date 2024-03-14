<script lang="ts">
    import Display from "./Display.svelte";
    import Row from "./Row.svelte";
    import Button from "./Button.svelte";
    import CalculatorModel from "../model/CalculatorModel";

    let calc = new CalculatorModel();

    const typedNumberChanges = (num: string) => (calc = calc.typedNumber(num));
    const typedDotChanges = () => (calc = calc.typedDot());
    const typedOperationChanges = (op: string) =>
        (calc = calc.typedOperation(op));
    const calculate = () => (calc = calc.calculate());
    const clearDisplay = () => (calc = calc.clearDisplay());
</script>

<div class="calculator">
    <Display value={calc.value} />
    <Row>
        <Button text="AC" triple highlight onClick={clearDisplay} />
        <Button text="/" operation onClick={typedOperationChanges} />
    </Row>
    <Row>
        <Button text="7" onClick={typedNumberChanges} />
        <Button text="8" onClick={typedNumberChanges} />
        <Button text="9" onClick={typedNumberChanges} />
        <Button text="*" operation onClick={typedOperationChanges} />
    </Row>
    <Row>
        <Button text="4" onClick={typedNumberChanges} />
        <Button text="5" onClick={typedNumberChanges} />
        <Button text="6" onClick={typedNumberChanges} />
        <Button text="+" operation onClick={typedOperationChanges} />
    </Row>
    <Row>
        <Button text="1" onClick={typedNumberChanges} />
        <Button text="2" onClick={typedNumberChanges} />
        <Button text="3" onClick={typedNumberChanges} />
        <Button text="-" operation onClick={typedOperationChanges} />
    </Row>
    <Row>
        <Button text="0" onClick={typedNumberChanges} double />
        <Button text="," onClick={typedDotChanges} />
        <Button text="=" highlight onClick={calculate}/>
    </Row>
</div>

<style>
    .calculator {
        background-color: var(--background-color);
        height: 440px;
        width: 300px;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }
</style>
