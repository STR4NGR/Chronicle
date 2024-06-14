import { createStore } from 'vuex';

const store = createStore({
  state: {
    selectedOptions: {
      blueprint: '',
      foundation: '',
      floor: 1,
      material: '',
      buildingClass: '',
    },
    type: '',
    employees: '',
    durability: '',
    firedurability: '',
    waterdurability: '',
    tornadodurability: '',
    earthdurability: '',
    constructioncost: '',
    time: '',
    repaircost: '',
    demolitioncost: '',
    costperyear: '',
    gainpermonth: '',
    
  },
  mutations: {
    setSelectedOptions(state, options) {
      Object.assign(state.selectedOptions, options);
    },
    setType(state, type) {
      state.type = type;
    },
    setEmployees(state, employees) {
      state.employees = employees;
    },
    setDurability(state, durability) {
      state.durability = durability;
    },
    setFireDurability(state, firedurability) {
      state.firedurability = firedurability;
    },
    setWaterDurability(state, waterdurability) {
      state.waterdurability = waterdurability;
    },
    setTornadoDurability(state, tornadodurability) {
      state.tornadodurability = tornadodurability;
    },
    setEarthDurability(state, earthdurability) {
      state.earthdurability = earthdurability;
    },
    setConstructionCost(state, constructioncost) {
      state.constructioncost = constructioncost;
    },
    setTime(state, time) {
      state.time = time;
    },
    setRepairCost(state, repaircost) {
      state.repaircost = repaircost;
    },
    setDemolitionCost(state, demolitioncost) {
      state.demolitioncost = demolitioncost;
    },
    setCostPerYear(state, costperyear) {
      state.costperyear = costperyear;
    },
    setGainPerMonth(state, gainpermonth) {
      state.gainpermonth = gainpermonth;
    }
  },
  actions: {
    updateSelectedOptions({ commit }, options) {
      commit('setSelectedOptions', options);
    },
    updateType({ commit }, type) {
      commit('setType', type);
    },
    updateEmployees({ commit }, employees) {
      commit('setEmployees', employees);
    },
    updateDurability({ commit }, durability) {
      commit('setDurability', durability);
    },
    updateFireDurability({ commit }, firedurability) {
      commit('setFireDurability', firedurability);
    },
    updateWaterDurability({ commit }, waterdurability) {
      commit('setWaterDurability', waterdurability);
    },
    updateTornadoDurability({ commit }, tornadodurability) {
      commit('setTornadoDurability', tornadodurability);
    },
    updateEarthDurability({ commit }, earthdurability) {
      commit('setEarthDurability', earthdurability);
    },
    updateConstructionCost({ commit }, constructioncost) {
      commit('setConstructionCost', constructioncost);
    },
    updateTime({ commit }, time) {
      commit('setTime', time);
    },
    updateRepairCost({ commit }, repaircost) {
      commit('setRepairCost', repaircost);
    },
    updateDemolitionCost({ commit }, demolitioncost) {
      commit('setDemolitionCost', demolitioncost);
    },
    updateCostPerYear({ commit }, costperyear) {
      commit('setCostPerYear', costperyear);
    },
    updateGainPerMonth({ commit }, gainpermonth) {
      commit('setGainPerMonth', gainpermonth);
    }
  },
  getters: {
    getSelectedOptions: state => state.selectedOptions,
    getType: state => state.type,
    getEmployees: state => state.employees,
    getDurability: state => state.durability,
    getFireDurability: state => state.firedurability,
    getWaterDurability: state => state.waterdurability,
    getTornadoDurability: state => state.tornadodurability,
    getEarthDurability: state => state.earthdurability,
    getConstructionCost: state => state.constructioncost,
    getTime: state => state.time,
    getRepairCost: state => state.repaircost,
    getDemolitionCost: state => state.demolitioncost,
    getCostPerYear: state => state.costperyear,
    getGainPerMonth: state => state.gainpermonth
  }
});

export default store;