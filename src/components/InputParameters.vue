<template>
    <div class="form-container">
      <!-- Your existing form fields -->
      <div class="form-group">
        <label for="option1-select" class="form-label">Чертёж</label>
        <select id="option1-select" class="form-select" v-model="selectedOptions.blueprint" @change="saveOptionsToStore">
          <option disabled value="">Выберите чертёж</option>
          <option>Больница</option>
          <option>Университет</option>
          <option>Малоэтажное жилое здание</option>
          <option>Школа</option>
          <option>Малоэтажный бизнес-центр</option>
          <option>Объект для малого бизеса</option>
          <option>Социальный объект</option>
          <option>Супермаркет</option>
          <option>Среднеэтажное жилое здание</option>
          <option>Торговый центр</option>
          <option>Многоэтажное жилое здание</option>
          <option>Высотный бизнес-центр</option>
        </select>
      </div>
      <div class="form-group">
        <label for="option2-select" class="form-label">Фундамент</label>
        <select id="option2-select" class="form-select" v-model="selectedOptions.foundation" @change="saveOptionsToStore">
          <option disabled value="">Выберите фундамент</option>
          <option>Свайный 1</option>
          <option>Свайный 2</option>
          <option>Свайный 3</option>
          <option>Ленточный 1</option>
          <option>Ленточный 2</option>
          <option>Ленточный 3</option>
          <option>Столбчатый 1</option>
          <option>Столбчатый 2</option>
          <option>Столбчатый 3</option>
          <option>Плитный 1</option>
          <option>Плитный 2</option>
          <option>Плитный 3</option>
        </select>
      </div>
      <div class="form-group">
        <label for="option3-input" class="form-label">Этажность</label>
        <input id="option3-input" type="number" class="form-input" v-model.number="selectedOptions.floor" min="1" max="25" @input="validateFloor" @focus="selectText" @change="saveOptionsToStore">
      </div>
      <div class="form-group">
        <label for="option4-select" class="form-label">Материал</label>
        <select id="option4-select" class="form-select" v-model="selectedOptions.material" @change="saveOptionsToStore">
          <option disabled value="">Выберите материал</option>
          <option>Кирпич 1</option>
          <option>Кирпич 2</option>
          <option>Кирпич 3</option>
          <option>Керамический блок 1</option>
          <option>Керамический блок 2</option>
          <option>Керамический блок 3</option>
          <option>Деревянный брус 1</option>
          <option>Деревянный брус 2</option>
          <option>Деревянный брус 3</option>
          <option>Деревянная сип панель 1</option>
          <option>Деревянная сип панель 2</option>
          <option>Деревянная сип панель 3</option>
          <option>Газобетон 1</option>
          <option>Газобетон 2</option>
          <option>Газобетон 3</option>
          <option>Железобетон 1</option>
          <option>Железобетон 2</option>
          <option>Железобетон 3</option>
          <option>Силикатный кирпич 1</option>
          <option>Силикатный кирпич 2</option>
          <option>Силикатный кирпич 3</option>
        </select>
      </div>
      <div class="form-group">
        <label for="option5-select" class="form-label">Класс</label>
        <select id="option5-select" class="form-select" v-model="selectedOptions.buildingClass" @change="saveOptionsToStore">
          <option disabled value="">Выберите класс</option>
          <option>Эконом</option>
          <option>Комфорт</option>
          <option>Бизнес</option>
          <option>Премиум</option>
          <option>Элит</option>
        </select>
      </div>
    </div>
  </template>

<script>
import { mapState, mapActions } from 'vuex';
import { getOutput } from '../compute';

export default {
  name: 'InputParameters',
  data() {
    return {
      selectedOptions: {
        blueprint: 'Больница', 
        foundation: 'Плитный 3', 
        floor: 25, 
        material: 'Железобетон 3', 
        buildingClass: 'Элит' 
      }
    };
  },
  computed: {
    ...mapState(['selectedOptions'])
  },
  methods: {
    ...mapActions(['updateSelectedOptions']),
    validateFloor() {
      if (this.selectedOptions.floor > 25) {
        this.selectedOptions.floor = 25;
      } else if (this.selectedOptions.floor < 1) {
        this.selectedOptions.floor = 1;
      }
    },
    selectText(event) {
      event.target.select();
    },
    saveOptionsToStore() {
      this.updateSelectedOptions(this.selectedOptions);
      getOutput(this.selectedOptions);
    },
    exportData() {
      this.updateSelectedOptions(this.selectedOptions);
    }
  },
  mounted() {
    getOutput(this.selectedOptions);
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
    min-width: 25px;
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
        min-width: 5px;
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
        margin-left: 1rem;
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