import store from './store';
import Building from './building';

// Социальные
const HOSPITAL = new Building("Больница", undefined, undefined, undefined, undefined, "Соц", "Нач.кв.700 Ср.кв.400", 12); 
const UNIVERSITY = new Building("Университет", undefined, undefined, undefined, undefined, "Соц", "Нач.кв.300 Ср.кв.200 Выш.кв.100", 8);
const SCHOOL = new Building("Школа", undefined, undefined, undefined, undefined, "Соц", "Нач.кв.1000", 10);
const SOCIALOBJ = new Building("Социальный объект", undefined, undefined, undefined, undefined, "Соц", "Нач.кв.300", 12);
// Жилое
const SMALLBUILDING = new Building("Малоэтажное жилое здание", undefined, undefined, undefined, undefined, "Жилое", "Нач.кв.300", 6);
const MEDIUMBUILDINGS = new Building("Среднеэтажное жилое здание", undefined, undefined, undefined, undefined, "Жилое", "Нач.кв.600 Ср.кв.300", 16);
const HIGHBUILDING = new Building("Многоэтажное жилое здание", undefined, undefined, undefined, undefined, "Жилое", "Нач.кв.400 Ср.кв.300 Выш.кв.200", 22);
// Бизнес
const SMALLBUSINESS = new Building("Малоэтажный бизнес-центр", undefined, undefined, undefined, undefined, "Бизнес", "Нач.кв.500 Ср.кв.100", 10);
const SMALLOBJ = new Building("Объект для малого бизнеса", undefined, undefined, undefined, undefined, "Бизнес", "Ср.кв.100", 6);
const SUPERMARKET = new Building("Супермаркет", undefined, undefined, undefined, undefined, "Бизнес", "Ср.кв.400", 8);
const MALL = new Building("Торговый центр", undefined, undefined, undefined, undefined, "Бизнес", "Нач.кв.200 Ср.кв.400", 14);
const HIGHBUSINESS = new Building("Высотный бизнес-центр", undefined, undefined, undefined, undefined, "Бизнес", "Нач.кв.1000 Ср.кв.300 Выш.кв.100", 26);

const BUILDINGMAP = new Map();
BUILDINGMAP.set(HOSPITAL.blueprint, HOSPITAL);
BUILDINGMAP.set(UNIVERSITY.blueprint, UNIVERSITY);
BUILDINGMAP.set(SMALLBUILDING.blueprint, SMALLBUILDING);
BUILDINGMAP.set(SCHOOL.blueprint, SCHOOL);
BUILDINGMAP.set(SMALLBUSINESS.blueprint, SMALLBUSINESS);
BUILDINGMAP.set(SMALLOBJ.blueprint, SMALLOBJ);
BUILDINGMAP.set(SOCIALOBJ.blueprint, SOCIALOBJ);
BUILDINGMAP.set(SUPERMARKET.blueprint, SUPERMARKET);
BUILDINGMAP.set(MEDIUMBUILDINGS.blueprint, MEDIUMBUILDINGS);
BUILDINGMAP.set(MALL.blueprint, MALL);
BUILDINGMAP.set(HIGHBUILDING.blueprint, HIGHBUILDING);
BUILDINGMAP.set(HIGHBUSINESS.blueprint, HIGHBUSINESS);

const FOUNDATION = new Map();
FOUNDATION.set("Свайный 1", 10);
FOUNDATION.set("Свайный 2", 20);
FOUNDATION.set("Свайный 3", 30);
FOUNDATION.set("Ленточный 1", 12);
FOUNDATION.set("Ленточный 2", 24);
FOUNDATION.set("Ленточный 3", 36);
FOUNDATION.set("Столбчатый 1", 5);
FOUNDATION.set("Столбчатый 2", 15);
FOUNDATION.set("Столбчатый 3", 25);
FOUNDATION.set("Плитный 1", 35);
FOUNDATION.set("Плитный 2", 50);
FOUNDATION.set("Плитный 3", 65);

const SUSTAINABILITY = new Map();
SUSTAINABILITY.set("Кирпич 1", [20, 10, 25, 15, 20]);
SUSTAINABILITY.set("Кирпич 2", [40, 20, 35, 20, 32]);
SUSTAINABILITY.set("Кирпич 3", [60, 30, 45, 25, 50]);
SUSTAINABILITY.set("Керамический блок 1", [25, 20, 30, 10, 24]);
SUSTAINABILITY.set("Керамический блок 2", [50, 35, 50, 20, 44]);
SUSTAINABILITY.set("Керамический блок 3", [75, 50, 70, 30, 62]);
SUSTAINABILITY.set("Деревянный брус 1", [0, 25, 10, 10, 10]);
SUSTAINABILITY.set("Деревянный брус 2", [10, 50, 20, 20, 16]);
SUSTAINABILITY.set("Деревянный брус 3", [20, 75, 30, 30, 40]);
SUSTAINABILITY.set("Деревянная сип панель 1", [10, 20, 10, 15, 20]);
SUSTAINABILITY.set("Деревянная сип панель 2", [25, 40, 20, 35, 36]);
SUSTAINABILITY.set("Деревянная сип панель 3", [40, 60, 30, 45, 52]);
SUSTAINABILITY.set("Газобетон 1", [30, 10, 30, 10, 20]);
SUSTAINABILITY.set("Газобетон 2", [50, 20, 50, 20, 44]);
SUSTAINABILITY.set("Газобетон 3", [70, 30, 70, 30, 66]);
SUSTAINABILITY.set("Железобетон 1", [25, 0, 20, 30, 20]);
SUSTAINABILITY.set("Железобетон 2", [50, 15, 40, 60, 48]);
SUSTAINABILITY.set("Железобетон 3", [75, 30, 60, 90, 74]);
SUSTAINABILITY.set("Силикатный кирпич 1", [20, 25, 20, 10, 24]);
SUSTAINABILITY.set("Силикатный кирпич 2", [35, 45, 40, 20, 40]);
SUSTAINABILITY.set("Силикатный кирпич 3", [50, 65, 60, 30, 58]);

let mainBuilding;

export function getOutput(options) {
    initialize(options.blueprint, options.foundation, options.floor, options.material, options.buildingClass);
    store.dispatch('updateType', mainBuilding.getType());
    store.dispatch('updateEmployees', mainBuilding.getEmployees());
    store.dispatch('updateDurability', getDurability());
    store.dispatch('updateFireDurability', getFireDurability(options.material));
    store.dispatch('updateWaterDurability', getWaterDurability(options.material));
    store.dispatch('updateTornadoDurability', getTornadoDurability(options.material));
    store.dispatch('updateEarthDurability', getEarthDurability(options.material));
    store.dispatch('updateConstructionCost', getConstructionCost());
    store.dispatch('updateTime', mainBuilding.getTime());
    store.dispatch('updateRepairCost', getRepairCost());
    store.dispatch('updateDemolitionCost', getDemolitionCost());
    store.dispatch('updateCostPerYear', getCostPerYear());
    store.dispatch('updateGainPerMonth', getGainPerMonth());
}

export function getAllProfit() {
    // U2-N2-(R2*10)
    // U2 - getAllGain
    // N2 - getConstructionCost
    // R2 - getCostPerYear
    return getAllGain() - getConstructionCost() - ((getConstructionCost() / 20) * 10);
}

export function getAllGain() {
    // N2*AJ2
    // N2 - getConstructionCost
    // AJ2 - getTypeRation
    return getConstructionCost() * getTypeRatio(mainBuilding.getType());
}

export function getGainPerMonth() {
    // U2/12
    // U2 - getAllGain
    return Math.round(getAllGain() / 12);
}

export function getCostPerYear() {
    // N2/20
    // N2 - getConstructionCost
    return Math.round(getConstructionCost() / 20);
}

export function getDemolitionCost() {
    // AF2*2
    // AF2 - FoundationCost
    return getFoundationCost(mainBuilding.getFoundation()) * 2;
}

export function getRepairCost() {
    // AG2/4 
    // AG2 -  MaterialCost
   return getMaterialCost(mainBuilding.getMaterial()) / 4;

}

export function getConstructionCost() {
    //(AF2+AG2+(AH2*C2))*AI2
    // AF2 - FoundationCost
    // AG2 -  MaterialCost
    // AH2 - HeightCost
    // C2 - Floor
    // AI2 - ClassRatio
    let foundationCost = getFoundationCost(mainBuilding.getFoundation());
    let materialCost = getMaterialCost(mainBuilding.getMaterial());
    let heightCost = getHeightCost(mainBuilding.getType());
    let floor = mainBuilding.getFloor();
    let classRatio = getClassRatio(mainBuilding.getBuildingClass());
    return (foundationCost+materialCost+(heightCost*floor))*classRatio;
}

export function getDurability() {
// Y2+Z2  FoundationStrength + HeightResistance
    let foundationStrength = getFoundationStrength(mainBuilding.getFoundation());
    let heightResistance = mainBuilding.getHeightResistance();
    return foundationStrength + heightResistance;
} 

function initialize(name, foundation, floor, material, buildingClass) {
    mainBuilding = getBuilding(name);
    mainBuilding.setFoundation(foundation);
    mainBuilding.setFloor(floor);
    mainBuilding.setMaterial(material);
    mainBuilding.setBuildingClass(buildingClass);
}

function getTypeRatio(name) {
    let response;
    switch (name) {
        case "Соц":
            response = 1.25;
            break;
        case "Бизнес":
            response = 3;
            break;
        case "Жилое":
            response = 2;
            break;
        default:
            response = 0;
    }
    return response;
}

function getClassRatio(name) {
    let response;
    switch (name) {
        case "Эконом":
            response = 1;
            break;
        case "Комфорт":
            response = 1.25;
            break;
        case "Бизнес":
            response = 1.5;
            break;
        case "Премиум":
            response = 2;
            break;
        case "Элит":
            response = 3;
            break;
        default:
            response = 0;
    }
    return response;
}

function getHeightCost(name) {
    let response;
    switch (name) {
        case "Соц":
            response = 2;
            break;
        case "Бизнес":
            response = 5;
            break;
        case "Жилое":
            response = 3;
            break;
        default:
            response = 0;
    }
    return response;
}

function getMaterialCost(name) {
    if (SUSTAINABILITY.has(name)) {
        return (SUSTAINABILITY.get(name)[4]);
    } else {
        return 'Стоимость материала не найдена';
    }     
}

function getFireDurability(name) {
    if (SUSTAINABILITY.has(name)) {
        return (SUSTAINABILITY.get(name)[0]);
    } else {
        return 'Огнеупорность не найдена';
    } 
}

function getWaterDurability(name) {
    if (SUSTAINABILITY.has(name)) {
        return (SUSTAINABILITY.get(name)[1]);
    } else {
        return 'Водостойкость не найдена';
    } 
}

function getTornadoDurability(name) {
    if (SUSTAINABILITY.has(name)) {
        return (SUSTAINABILITY.get(name)[2]);
    } else {
        return 'Ураганоустойчивость не найдена';
    } 
}

function getEarthDurability(name) {
    if (SUSTAINABILITY.has(name)) {
        return (SUSTAINABILITY.get(name)[3]);
    } else {
        return 'Сейсмоустойчивость не найдена';
    } 
}

function getFoundationStrength(name) {
    if (FOUNDATION.has(name)) {
        return (FOUNDATION.get(name));
    } else {
        return 'Стойкость фундамента не найдена';
    } 
}

function getFoundationCost(name) {
    if (FOUNDATION.has(name)) {
        return (FOUNDATION.get(name) * 2);
    } else {
        return 'Стоимость фундамента не найдена';
    }     
}

function getBuilding(blueprint) {
    if (BUILDINGMAP.has(blueprint)) {
        return (BUILDINGMAP.get(blueprint));
    } else {
        return 'Здание не найдено';
    } 
}
