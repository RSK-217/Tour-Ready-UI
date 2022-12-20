import React, { useState, useEffect }from "react";
import { useHistory, useParams } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';

export default function EditCity({ currentUser }) {
    const [city, setCity] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { cityId } = useParams();

    const history = useHistory();

    const cancelForm = () => {
        history.push(`/city/${cityId}`)
    }

    useEffect(() => {
        fetch(`https://localhost:7108/api/City/GetCityById/${cityId}`)
        .then(response => response.json())
        .then((data) => {
            setCity(data)
            console.log(city);
        })
 }, [cityId])

 const Delete = () => {
    fetch(`https://localhost:7108/api/City/${cityId}`, {
    method: "DELETE"
    })
    .then(history.push("/cities"))
    .then(history.go())
}

 const UpdateCity = (e) => {
    e.preventDefault()
    const newCity = {
        id: city.id,
        userId: city.userId,
        cityName: city.cityName,
        state: city.state,
        country: city.country,
        people: city.people,
        places: city.places,
        cityNotes: city.cityNotes 
    }
    
    fetch(`https://localhost:7108/api/City/${cityId}`, {
    method: "PUT",
    headers: {
        'Access-Control-Allow-Origin': 'https://localhost:7108',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCity)
})
    .then(() => {
        history.push(`/city/${cityId}`)
    })
}


    return (
        <>
        <form className="edit-city-form">
            <h2 className="edit-city-title">edit a city</h2>
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...city }
                                copy.cityName = e.target.value
                                setCity(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={city.cityName}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...city }
                                copy.state = e.target.value
                                setCity(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={city.state}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...city }
                                copy.country = e.target.value
                                setCity(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={city.country}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <textarea
                        onChange={
                            (e) => {
                                const copy = { ...city }
                                copy.people = e.target.value
                                setCity(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={city.people}
                        placeholder="important people"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <textarea
                        onChange={
                            (e) => {
                                const copy = { ...city }
                                copy.places = e.target.value
                                setCity(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={city.places}
                        placeholder="places to remember"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <textarea
                        onChange={
                            (e) => {
                                const copy = { ...city }
                                copy.cityNotes = e.target.value
                                setCity(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={city.cityNotes}
                        placeholder="notes"
                    />
                </div>
            </fieldset>
            <section className='add-city-btn'>
                <button className="city-btn" onClick={UpdateCity}>
                    Save
                </button>&nbsp;
                <button className="city-btn" onClick={cancelForm}>
                    Cancel
                </button>&nbsp;
                <button className="city-btn" onClick={handleShow}>
                    Delete
                </button>
            </section>
        </form>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete City</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this city?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Delete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )

}