import SwapiService from "./swapi-service.js"
import Starship from "../models/Starship.js";

const swapiService = new SwapiService
let app = document.getElementById('app')

function draw(data) {
    console.log(data)
    app.innerHTML = `
    <div id="error"></div>
    <button onclick="app.controllers.swapi.getStarships()">
    Get Ships!
    </button>
    <button onclick="app.controllers.swapi.getPeople()">
    Get Peeps!
    </button>
    <div id="starships"></div>
    `
}

function drawStarships(data) {
    let starshipsElem = document.getElementById('starships')
    let template = ''
    data.results.forEach(starship => {
        template += `<div><p>
        ${starship.name}
        ${starship.model}
        ${starship.manufacturer}
        ${starship.costInCredits}
        ${starship.length}
        ${starship.crew}
        ${starship.passengers}
        ${starship.hyperdriveRating}
        </p></div>`
    })
    starshipsElem.innerHTML = template
}

function drawPeople(data) {
    let starshipsElem = document.getElementById('starships')
    let template = ''
    data.results.forEach(person => {
        template += `<div><p>
        ${person.name}
        ${person.height}
        ${person.mass}
        ${person.hair_color}
        ${person.skin_color}
        ${person.eye_color}
        ${person.birth_year}
        ${person.gender}
        </p></div>`
    })
    starshipsElem.innerHTML = template
}

function drawError(error) {
    console.log(error)
    document.getElementById('error').innerHTML = error.message
}

export default class SwapiController {
    constructor() {
        draw()
    }

    getStarships() {
        console.log("hello from controller starships!")
        swapiService.getStarships(drawStarships, drawError)

    }

    getPeople() {
        swapiService.getPeople(drawPeople, drawError)

    }

}