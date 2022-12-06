import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';


export default function City() {
    const [city, setCity] = useState({});
    const { cityId } = useParams()


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
            <li>{city.cityNotes}</li>
        </>
    )

 }
