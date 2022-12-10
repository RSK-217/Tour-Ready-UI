import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';


export default function City() {
    const [city, setCity] = useState({});
    const { cityId } = useParams()

    console.log(cityId)
    useEffect(() => {
        fetch(`https://localhost:7108/api/City/GetCityById/${cityId}`)
        .then(response => response.json())
        .then((data) => {
            setCity(data)
            console.log(city);
        })
 }, [cityId])



    return (
        <>
        <h1>{city.cityName}, {city.state} - {city.country}</h1>
            <div className="city-people">
                <h6>People</h6>
                <li>{city.people}</li>   
            </div>
            <div className="city-places">
                <h6>Places</h6>
                <li>{city.places}</li>   
            </div>
            <div className="city-notes">
                <h6>Notes</h6>
                <li>{city.cityNotes}</li>   
            </div>
        </>
    )

 }
