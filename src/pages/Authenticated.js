import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { getAllGroups } from "../api/UserData";

export default function Authenticated({ user, currentUser }) {
  
  const [groups, setGroups] = useState([]);
    

    useEffect(() => {
        if(currentUser?.hasOwnProperty("id")) { 
         getAllGroups(currentUser).then((res) => {
         setGroups(res);
        })};
 }, [])
  
  return (
    <div className="text-center mt-5">
      <img
        referrerPolicy="no-referrer"
        src={user.photoURL}
        alt={user.displayName}
        />
        <h1>{currentUser.name}</h1>
        <h5>{currentUser.email}</h5>
      <div>
        <Link className="groups-link" to={'/groups'}><h3>Groups</h3></Link>
        {groups ? groups.map((group) => {
          return (
            <div key={group.id}>
                    <h5>{group.groupName}</h5>  
                </div>
            )}) : null } 
      </div>
      
    </div>
  );
}
