<template>
    <div class="table-container">
      <table class="table is-striped is-hoverable">
        <tbody>
          <tr v-for="row in rows" :key="row.type">
            <td>{{ row.type }}</td>
            <td>{{ row.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { computed, ref, watch } from 'vue';
  import { useStore } from 'vuex';
  //import { computeData } from '../compute.js';

  const store = useStore();

  //let parameters = computed(() => store.getters.getSelectedOptions);

  const TYPE = computed(()  => store.getters.getType);
  const EMPLOYEES = computed(() => store.getters.getEmployees);
  const DURABILITY = computed(() => store.getters.getDurability);
  const FIRE_DURABILITY = computed(() => store.getters.getFireDurability);
  const WATER_DURABILITY = computed(() => store.getters.getWaterDurability);
  const TORNADO_DURABILITY = computed(() => store.getters.getTornadoDurability);
  const EARTH_DURABILITY = computed(() => store.getters.getEarthDurability);
  const CONSTRUCTION_COST = computed(() => store.getters.getConstructionCost);
  const TIME = computed(() => store.getters.getTime);
  const REPAIR_COST = computed(() => store.getters.getRepairCost);
  const DEMOLITION_COST = computed(() => store.getters.getDemolitionCost);
  const COST_PER_YEAR = computed(() => store.getters.getCostPerYear);
  const GAIN_PER_MONTH = computed(() => store.getters.getGainPerMonth);
  
  const rows = ref([
    { type: 'Тип', name: TYPE.value},
    { type: 'Кол-во сотрудников необходимое для строительства', name: EMPLOYEES.value},
    { type: 'Стойкость', name: DURABILITY.value},
    { type: 'Огнеупорность', name: FIRE_DURABILITY.value},
    { type: 'Водостойкость', name: WATER_DURABILITY.value},
    { type: 'Ураганоустойчивость', name: TORNADO_DURABILITY.value},
    { type: 'Сейсмостойкость', name: EARTH_DURABILITY.value},
    { type: 'Стоимость стр', name: CONSTRUCTION_COST.value},
    { type: 'Время строительства (месяц)', name: TIME.value},
    { type: 'Стоимость ремонта единицы стойкости', name: REPAIR_COST.value},
    { type: 'Стоимость снос', name: DEMOLITION_COST.value},
    { type: 'Расходы в год', name: COST_PER_YEAR.value},
    { type: 'Выручка в месяц', name: GAIN_PER_MONTH.value}
  ]);

  watch(TYPE, (newType) => {
  rows.value[0].name = newType;
});
watch(EMPLOYEES, (newEmployees) => {
  rows.value[1].name = newEmployees;
});
watch(DURABILITY, (newDurability) => {
  rows.value[2].name = newDurability;
});
watch(FIRE_DURABILITY, (newFireDurability) => {
  rows.value[3].name = newFireDurability;
});
watch(WATER_DURABILITY, (newWaterDurability) => {
  rows.value[4].name = newWaterDurability;
});
watch(TORNADO_DURABILITY, (newTornadoDurability) => {
  rows.value[5].name = newTornadoDurability;
});
watch(EARTH_DURABILITY, (newEarthDurability) => {
  rows.value[6].name = newEarthDurability;
});
watch(CONSTRUCTION_COST, (newConstructionCost) => {
  rows.value[7].name = newConstructionCost;
});
watch(TIME, (newTime) => {
  rows.value[8].name = newTime;
});
watch(REPAIR_COST, (newRepairCost) => {
  rows.value[9].name = newRepairCost;
});
watch(DEMOLITION_COST, (newDemolitionCost) => {
  rows.value[10].name = newDemolitionCost;
});
watch(COST_PER_YEAR, (newCostPerYear) => {
  rows.value[11].name = newCostPerYear;
});
watch(GAIN_PER_MONTH, (newGainPerMonth) => {
  rows.value[12].name = newGainPerMonth;
});
  </script>
  
  <style scoped>
  .table-container {
    margin: 20px;
    overflow-x: auto;
  }
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  .table th,
  .table td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  .is-striped tbody tr:nth-child(odd) {
    background-color: #f9f9f9;
  }
  .is-hoverable tbody tr:hover {
    background-color: #f2f2f2;
  }
  </style>