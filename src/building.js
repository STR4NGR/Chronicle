class Building {
    constructor(
        blueprint = "Больница",
        foundation = "Свайный 1", 
        floor = 1, 
        material = "Железобетон 3",
        buildingClass = "Элит",  
        type = "Соц", 
        numberOfEmployees = "Нач.кв.700 Ср.кв.400", 
        constructionTime = 12 
    ) {
        this.blueprint = blueprint;
        this.foundation = foundation;
        this.floor = floor;
        this.material = material;
        this.buildingClass = buildingClass;
        this.type = type;
        this.numberOfEmployees = numberOfEmployees;
        this.constructionTime = constructionTime;
    }  
    getBlueprint() {
        return this.blueprint
    }
    getFoundation() {
        return this.foundation;
    }
    getFloor() {
        return this.floor;
    }
    getMaterial() {
        return this.material;
    }
    getBuildingClass() {
        return this.buildingClass;
    }
    getType() {
        return this.type;
    }
    getEmployees() {
        return this.numberOfEmployees;
    }
    getTime() {
        return this.constructionTime;
    }

    getHeightResistance() {
        let response;
        switch (this.type) {
            case "Соц":
                switch (this.floor) {
                    case 1:
                        response = 50;
                        break;
                    case 2:
                        response = 30;
                        break;
                    case 3:
                        response = 15;
                        break;
                    case 4:
                        response = 5;
                        break;
                    case 5:
                        response = 0;
                        break;
                    case 6:
                        response = -10;
                        break;
                    case 7:
                        response = -20;
                        break;
                    case 8:
                        response = -30;
                        break;
                    default:
                        response = 0;
                }
                break;
            case "Жилое":
                response = 75 - 5 * this.floor;
                break;
            case "Бизнес":
                response = 65 - 5 * (this.floor);
                break;
            default:
                response = "Неверный ввод";
        }
        return response;
    }

    setBlueprint(newBlueprint) {
        this.blueprint = newBlueprint;
    }
    setFoundation(newFoundation) {
        this.foundation = newFoundation;
    }
    setFloor(newFloor) {
        this.floor = newFloor;
    }
    setMaterial(newMaterial) {
        this.material = newMaterial;
    }
    setBuildingClass(newBuildingClass) {
        this.buildingClass = newBuildingClass
    }

  }
export default Building;