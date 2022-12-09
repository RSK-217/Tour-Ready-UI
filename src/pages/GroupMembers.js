import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function GroupMembers({group}) {
    const [groupMembers, setGroupMembers] = useState([]);
    const memberId = useParams();

    console.log(memberId)

    useEffect(() => {
        fetch(`https://localhost:7108/api/GroupMember/GetAllMembersByGroupId/${group.id}`)
        .then(response => response.json())
        .then((data) => {
            setGroupMembers(data)
        })
 }, [])

 console.log(groupMembers)

 return (
    <>
        {groupMembers ? groupMembers.map((member) => {
            return (
                <li key={member.id} className='group-members'>
                {member.name} - {member.isEditor === true ? 'editor' : 'view only'}
                </li>
            )
        }) : null}
    </>
 )
}