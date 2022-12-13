import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { getAllShows } from "../api/UserData";



export default function Shows({ currentUser }) {
    const [shows, setShows] = useState([]);
    
    useEffect(() => {
        if(currentUser?.hasOwnProperty("id")) { 
         getAllShows(currentUser).then((res) => {
         setShows(res);
        })};
 }, [])

 console.log(shows)
    
     return (
        <>
            <h1>Shows</h1>
            {shows ? shows.map((show) => {
                return (<li key={show.id} className='listed-show'>
                        <Link className='show-link' to={`/show/${show.id}`}>{show.showDate} - {show.venue} - {show.cityName}, {show.state} {show.country}</Link>
                       </li>)
            }) : null } 

            <Link className='add-show-link' to='/show/add'>+ add show</Link>
            
        </>
    )
}