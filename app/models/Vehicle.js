export default class Vehicle {
    constructor(reqData) {
        this.name = reqData.name
        this.model = reqData.model
        this.manufacturer = reqData.manufacturer
        this.costInCredits = reqData.cost_in_credits
        this.vehicleClass = reqData.vehicle_class
    }
}