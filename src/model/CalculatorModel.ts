const KEEP_DISPLAY = false;
const CLEAN_DISPLAY = true;

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

    typedDot() {
        return new CalculatorModel(
            this.#value?.includes(".") ? this.#value : this.#value + ".",
            this.#accumulator,
            KEEP_DISPLAY,
            this.#operation
        );
    }

    clearDisplay() {
        return new CalculatorModel();
    }

    typedOperation(nextOperation: string) {
        return this.calculate(nextOperation);
    }

    calculate(nextOperation: string | null = null) {
        const accumulator = !this.#operation
            ? parseFloat(!this.#value ? "0" : this.#value)
            : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`);

        const value = !this.#operation ? this.#value : `${accumulator}`;

        return new CalculatorModel(
            value,
            accumulator,
            nextOperation ? CLEAN_DISPLAY : KEEP_DISPLAY,
            nextOperation
        );
    }
}
