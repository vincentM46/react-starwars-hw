import axios from 'axios';
import { useState, useEffect } from 'react';

function StarwarsAPI () {
    const [starShip, setStarShip] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/?format=json')
        .then(response => {
            console.log(response)
            setStarShip(response.data.results)
        })
        .catch(error => {
            console.log(error)
        })}, [])
    return (
        <div>
            <h1 className="banner">Ships from The Star Wars Franchise!</h1>
            <div className="background">
                {starShip.map((starShip, index) => (
                    <div className="card" key ={index}>
                        <p className="name">{starShip.name}</p>
                        <div>
                            <p className="class">Starship Class: {starShip.starship_class}</p>
                            <p className="crew">Crew Capacity: {starShip.crew}</p>
                            <p className="cost">Cost (in credits): {starShip.cost_in_credits}</p>
                            <p className="capacity">Passenger Capacity: {starShip.passengers}</p>
                            <p className="hyperdrive">Hyperdrive Rating: {starShip.hyperdrive_rating}</p>
                            <p className="speed">Max Speed: {starShip.max_atmosphering_speed}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default StarwarsAPI;