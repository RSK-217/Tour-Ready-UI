import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'

export default function Cities({user}) {
   const [cities, setCities] = useState([]);

   useEffect(() => {
       fetch(
               `https://localhost:7108/api/City/GetAllCitiesByUserId/${user.id}` ,
         { 
           method: 'GET',
           headers: {
             'Access-Control-Allow-Origin': 'https://localhost:7108',
             'Content-Type': 'application/json'
           },
         },
       )
         .then((res) => res.json())
         .then((r) => { 
           setCities(r)
           }
       );
}, [])

console.log(cities);

return (
    <>
            <h1>Cities</h1>
            {cities.map((city) => {
                return (<li key={city.id} className='listed-city'>
                        <Link className='city-link' to={`/city`}>{city.cityName}, {city.state} - {city.country}</Link>
                       </li>)
            })}
        </>
    )
}


// const getAllCitiesByUserId = async () => {
//     const result = await fetch(`https://localhost:7108/api/City/GetAllCitiesByUserId/${user.id}`)
//     const jsonResult = result.json();

//     setCities(jsonResult)
// }

// getAllCitiesByUserId();