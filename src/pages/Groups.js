import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { getAllGroups } from "../api/UserData";
import AddGroup from "../Posts/AddGroup";

export default function Groups({ groups, currentUser }) {
    const [clicked, setClicked] = useState(false)

    const handleChange = () => {
        setClicked(true)
    }
    console.log(groups)
     return (
        <>
            <h1>Groups</h1> 
            <button className="add-group-btn" type="button" onClick={handleChange} >Add Group</button>
            {clicked === true ? <AddGroup currentUser={currentUser}/> : null}
            {groups ? groups.map((group) => {
                return (
                <div key={group.id}>
                    <h6>* {group.groupName}</h6>
                    
                    <button type="button">Edit Group</button>
                </div>
            )}) : null } 
            
        </>
    )
}