import React, {useState, useEffect} from "react";

export default function RegisterUser ({user}) {
    const [newUser, setNewUser] = useState({});

    // const RegisterUser = (user) => {
    //       const fetchOptions = {
    //         method: 'POST',
    //         headers: {
    //           'Access-Control-Allow-Origin': 'https://localhost:7108',
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(user)
    //       }
    //       return fetch('https://localhost:7108/api/User/RegisterUser', fetchOptions)
    //       .then(res => res.json())
    //       .then(() => {
    //         history.push('/home')
    //       })
    //     }
        
    //     const submit = (user) => {
    //     const newUser = {
    //       name: user.displayName,
    //       email: user.email,
    //       firebaseId: user.$.W,
    //       image: user.photoURL
    //     }
    //     RegisterUser(newUser)
    //     }
        
    //     useEffect(() => {
          
    //         submit()
          
    //     }, [])
    return (
        <>
        <h1>Register page</h1>
        <h3>{user.displayName}</h3>
        </>
    )
}