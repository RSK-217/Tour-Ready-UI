import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { getAllGroups } from "../api/UserData";
import GroupMembers from "./GroupMembers";

export default function Groups({ currentUser }) {
    const [groups, setGroups] = useState([]);
    

    useEffect(() => {
        if(currentUser?.hasOwnProperty("id")) { 
         getAllGroups(currentUser).then((res) => {
         setGroups(res);
        })};
 }, [])

     return (
        <>
            <h1>Groups</h1>
            {groups ? groups.map((group) => {
                return (
                <div key={group.id}>
                    <h3>{group.groupName}</h3>
                    <GroupMembers group={group}/>
                </div>
            )}) : null } 
        </>
    )
}