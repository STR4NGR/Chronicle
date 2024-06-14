<template>

    <h1>Игровой калькулятор</h1>
    <InputParameters />
    <OutputParameters />

</template>

<script>
import InputParameters from './InputParameters.vue'
import OutputParameters from './OutputParameters.vue'
export default {
    name: 'GameCalculator',
    components: {
        InputParameters,
        OutputParameters
    },
    data() {
        return {
            selectedOptions: {
                option1: '',
                option2: '',
                option3: 25, // Default value for этажность
                option4: '',
                option5: '',
            },
            result: 'Пока не рассчитано'
        };
    },
    methods: {
        updateResult() {
            this.result = `Результат: ${this.selectedOptions.option1} + ${this.selectedOptions.option2} + ${this.selectedOptions.option3} + ${this.selectedOptions.option4} + ${this.selectedOptions.option5}`;
        },
        incrementFloor() {
            if (this.selectedOptions.option3 < 25) {
                this.selectedOptions.option3++;
            }
        },
        decrementFloor() {
            if (this.selectedOptions.option3 > 1) {
                this.selectedOptions.option3--;
            }
        },
        validateFloor() {
            if (this.selectedOptions.option3 > 25) {
                this.selectedOptions.option3 = 25;
            } else if (this.selectedOptions.option3 < 1) {
                this.selectedOptions.option3 = 1;
            }
        },
        selectText(event) {
            event.target.select();
        }
    }
}
</script>
<style>
#app {
    text-align: center;
}

.form-container {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}

.form-group {
    margin: 5px; 
    text-align: left;
}

.form-label {
    font-weight: bold;
    margin-bottom: 5px;
}

.form-select,
.form-input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: auto;
    min-width: 75px;
}

.input-group {
    display: flex;
    align-items: center;
}

.btn {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    cursor: pointer;
}

.btn:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

@media (max-width: 768px) {
    #app {
        font-size: 14px;
        margin-top: 20px;
    }

    .form-container {
        flex-direction: column;
        align-items: center;
    }

    .form-group {
        width: 100%;
        max-width: 350px;
    }
    .form-select,
    .form-input {
        margin-top: 5px;
        margin-left: 0rem;
        width: auto;
        min-width: 75px;
    }
    .form-label {
        margin-right: 0.7rem;
    }
}

@media (min-width: 769px) {
    .form-container {
        flex-direction: row;
    }

    .form-group {
        display: inline-block;
        margin-bottom: 1rem;
    }

    .form-label {
        margin-left: 0.8rem;
    }

    .form-select,
    .form-input {
        margin-top: 5px;
        margin-left: 0.4rem;
        width: auto;
        min-width: 75px;
    }
}
</style>
