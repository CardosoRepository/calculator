<script>
	import Display from './Display.svelte';
	import Row from './Row.svelte';
    import Button from "./Button.svelte";
</script>

<div class="calculator">
    <Display value="1234567890" />
    <Row>
        <Button text = "AC" triple highlight/>
        <Button text = "/" operation/>
    </Row>
    <Row>
        <Button text = "7"/>
        <Button text = "8"/>
        <Button text = "9"/>
        <Button text = "*" operation/>
    </Row>
    <Row>
        <Button text = "4"/>
        <Button text = "5"/>
        <Button text = "6"/>
        <Button text = "+" operation/>
    </Row>
    <Row>
        <Button text = "1"/>
        <Button text = "2"/>
        <Button text = "3"/>
        <Button text = "-" operation/>
    </Row>
    <Row>
        <Button double text = "0"/>
        <Button text = ","/>
        <Button text = "=" highlight/>
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