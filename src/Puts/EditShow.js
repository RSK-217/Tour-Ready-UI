import React, { useState, useEffect }from "react";
import { useHistory } from 'react-router-dom'
import { getAllGroups } from "../api/UserData";
import { useParams } from "react-router-dom";

export default function EditShow({currentUser}) {
    const [show, setShow] = useState({});
    const [groups, setGroups] = useState([]);
    const [selectedGroupId, setSelectedGroupId] = useState({});
    const [selectedGroupName, setSelectedGroupName] = useState('');
    const { showId } = useParams()
    
    const history = useHistory()
    
    const cancelForm = () => {
        history.push('/shows')
    }
    
    const handleChange = (e) => {
        const int = parseInt(e.target.value)
        setSelectedGroupId(int)   
    }
    
    const getGroupName = () => {
        groups.map((group) => {
            selectedGroupId === group.id ? setSelectedGroupName(group.groupName) : ''
        })
    }
    
    
    useEffect(() => {
        getGroupName()
    }, [selectedGroupId])

    
    useEffect(() => {
        if(currentUser?.hasOwnProperty("id")) { 
            getAllGroups(currentUser).then((res) => {
                setGroups(res);
            })};
        }, [])

    
    useEffect(() => {
        fetch(`https://localhost:7108/api/Show/GetShowById/${showId}`)
        .then(response => response.json())
        .then((data) => {
            setShow(data)
        })
 }, [showId])


    const UpdateShow = (e) => {
        e.preventDefault()
        const newShow = {
            id: show.id,
            userId: show.userId,
            groupId: selectedGroupId,
            groupName: selectedGroupName,
            venue: show.venue,
            showDate: show.showDate,
            cityName: show.cityName,
            state: show.state,
            country: show.country,
            setList: show.setList,
            showNotes: show.showNotes,
            merchSales: show.merchSales,
            payout: show.payout,
            isFavorite: show.isFavorite
        }
        
        fetch(`https://localhost:7108/api/Show/${showId}`, {
        method: "PUT",
        headers: {
            'Access-Control-Allow-Origin': 'https://localhost:7108',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newShow)
    })
        .then(() => {
            history.push(`/show/${showId}`)
        })
    }

    // const UpdateShow = (e) => {
    //     e.preventDefault()
    //     const newShow = {
    //         userId: show.userId,
    //         groupId: selectedGroupId,
    //         groupName: selectedGroupName,
    //         venue: show.venue,
    //         showDate: show.showDate,
    //         cityName: show.cityName,
    //         state: show.state,
    //         country: show.country,
    //         setList: show.setList,
    //         showNotes: show.showNotes,
    //         merchSales: show.merchSales,
    //         payout: show.payout,
    //         isFavorite: show.isFavorite
    //     }
        
    //         const fetchOptions = {
    //             method: "PUT",
    //             headers: {
    //                 'Access-Control-Allow-Origin': 'https://localhost:7108',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(newShow)   
    //         };
    //         const response = fetch(`https://localhost:7108/api/Show/${showId}`, fetchOptions);
    //         const data = response.json();
    //         console.log(data);
    //     }



    return (
        <form className="edit-show-form">
            <h2 className="edit-show-title">edit a show</h2>
            <fieldset>
                <div className="form-group">
                <select value={selectedGroupId} onChange={handleChange}>
                            <option value={show.groupName}>{show.groupName}</option>
                    {groups.map((group) => {
                        return (
                            <option key={group.id} value={group.id}>{group.groupName}</option>
                        )
                    })}
                </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...show }
                                copy.venue = e.target.value
                                setShow(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={show.venue || ""}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...show }
                                copy.showDate = e.target.value
                                setShow(copy)
                            }}
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={show.showDate}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...show }
                                copy.cityName = e.target.value
                                setShow(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={show.cityName}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...show }
                                copy.state = e.target.value
                                setShow(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={show.state}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...show }
                                copy.country = e.target.value
                                setShow(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={show.country}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...show }
                                copy.setList = e.target.value
                                setShow(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="setlist"
                        value={show.setList || ""}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...show }
                                copy.showNotes = e.target.value
                                setShow(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="show notes"
                        value={show.showNotes || ""}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...show }
                                copy.merchSales = e.target.value
                                setShow(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="merch sales"
                        value={show.merchSales}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...show }
                                copy.payout = e.target.value
                                setShow(copy)
                            }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="payout"
                        value={show.payout}
                    />
                </div>
            </fieldset>
            <section className='add-show-btn'>
                <button className="show-btn" onClick={UpdateShow}>
                    Save
                </button>&nbsp;
                <button className="show-btn" onClick={cancelForm}>
                    Cancel
                </button>
            </section>
        </form>
    )
}
