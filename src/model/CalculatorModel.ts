const KEEP_DISPLAY = false;

export default class CalculatorModel {
    #value: string | null;
    #accumulator: number | null;
    #clearDisplay: boolean;
    #operation: string | null;

    constructor(
        value: string | null = null,
        accumulator: number | null = null,
        clearDisplay = false,
        operation: string | null = null
    ) {
        this.#value = value;
        this.#accumulator = accumulator;
        this.#clearDisplay = clearDisplay;
        this.#operation = operation;
    }

    get value() {
        return this.#value?.replace(".", ",") || "0";
    }

    typedNumber(newValue: string) {
        return new CalculatorModel(
            this.#clearDisplay || !this.#value
                ? newValue
                : this.#value + newValue,
            this.#accumulator,
            KEEP_DISPLAY,
            this.#operation
        );
    }
}
