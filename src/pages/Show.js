import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';


export default function Show() {
    const [show, setShow] = useState({});
    const { showId } = useParams()


    useEffect(() => {
        fetch(`https://localhost:7108/api/Show/GetShowById/${showId}`)
        .then(response => response.json())
        .then((data) => {
            setShow(data)
        })
 }, [showId])

console.log(showId)

    return (
        <>
        <h1 className='show-headline'>{show.showDate} - {show.venue} - {show.cityName}, {show.state} {show.country}</h1>
            <Link className='edit-show-link' to={`/show/edit/${showId}`}>edit show</Link>
            <div>
                <h5 className='show-section-title'>setlist:</h5>
                    <p className='show-section-body'>{show.setList}</p>
            </div>
            <div>
                <h5 className='show-section-title'>show notes:</h5>
                    <p className='show-section-body'>{show.showNotes}</p>
            </div>
            <div>
                <h5 className='show-section-title'>merch sales:</h5>
                    <p className='show-section-body'>${show.merchSales}</p>
            </div>
            <div>
                <h5 className='show-section-title'>payout:</h5>
                    <p className='show-section-body'>${show.payout}</p>
            </div>
        </>
    )

 }