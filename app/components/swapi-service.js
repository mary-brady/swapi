import Person from "../models/Person.js"
import Vehicle from "../models/Vehicle.js"
import Starship from "../models/Starship.js"

let people = {}

export default class SwapiService {

    getPeople(draw, drawError) {
        fetch('https://swapi.co/api/people')
            .then(res => res.json())
            .then(draw)
            .catch(drawError)
    }
    // getPeople(draw, drawError) {
    //     console.log("Hello from swapiService!!")
    //     fetch('https://swapi.co/api/people')
    //         .then(res => res.json())
    //         .then(res => {
    //             let myPeople = res.results.map(rawPerson => {
    //                 let person = new Person(rawPerson)
    //                 people[person.id] = person
    //                 return person
    //             })
    //             draw(myPeople)
    //         })
    //         .catch(drawError)
    // }
    // get people() {
    //     return people
    // }

    // getStarships(draw, drawError) {
    //     console.log("hello from swapiService getStarships!")
    //     fetch('https://swapi.co/api/starships')
    //         .then(res => res.json())
    //         .then(res => {
    //             let myStarships = res.results.map(ships => {
    //                 return new Starship(ships)
    //             })
    //             draw(myStarships)
    //         })
    //         .catch(drawError)
    // }

    getStarships(draw, drawError) {
        fetch('https://swapi.co/api/starships')
            .then(res => res.json())
            .then(draw)
            .catch(drawError)
    }

    getVehicles(draw, drawError) {
        console.log("hello from swapiService getVehicles!")
        fetch('https://swapi.co/api/vehicles')
            .then(res => res.json())
            .then(res => {
                let myVehicles = res.results.map(vehicles => {
                    return new Vehicle(vehicles)
                })
                draw(myVehicles)
            })
            .catch(drawError)
    }

}