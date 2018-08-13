export default class Starship {
    constructor(reqData) {
        this.name = reqData.name
        this.model = reqData.model
        this.manufacturer = reqData.manufacturer
        this.costInCredits = reqData.cost_in_credits
        this.length = reqData.length
        this.crew = reqData.crew
        this.passengers = reqData.passengers
        this.hyperdriveRating = reqData.hyperdrive_rating
    }
}