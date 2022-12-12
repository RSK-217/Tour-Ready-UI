// index for router
import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Authenticated from '../pages/Authenticated';
import EditGroup from '../Puts/EditGroup';
import Cities from '../pages/Cities';
import City from '../pages/City';
import AddCity from '../Posts/AddCity';
import EditCity from '../Puts/EditCity';
import Shows from '../pages/Shows';
import Show from '../pages/Show';
import EditShow from '../Puts/EditShow';
import AddShow from '../Posts/AddShow';
import Register from '../pages/Register';
import { getGroupById } from "../api/GroupData";

export default function Routes({ user }) {
  
  const history = useHistory()
  
  const [userExists, setUserExists] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  

useEffect(() => {
  fetch(`https://localhost:7108/api/User/CheckIfUserExists/${user.$.W}`,
  {
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin': 'https://localhost:7108',
    'Content-Type': 'application/json'
  },
},
)
    .then((res) => res.json())
    .then((fbUser) => {
      setUserExists(fbUser)
    })
}, [])

useEffect((user) => {
  if(userExists === true) {
    GetUser(user)
  } else if (userExists === false){
    history.push("/register")
    history.go()
  } else {
    history.push("/")
  }
}, [])

const GetUser = () => {
  fetch(`https://localhost:7108/api/User/GetUserByFirebaseId/${user.uid}`,
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
      setCurrentUser(r)
    });
}

console.log(userExists);

console.log(user);

console.log(currentUser);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Authenticated user={user} currentUser={currentUser}/>} />
        <Route path="/register" component={() => <Register user={user}/>} />
        <Route path="/group/edit/:groupId(\d+)" component={() => <EditGroup />} />
        
        <Route path="/shows" component={() => <Shows currentUser={currentUser}/>} />
        <Route path="/show/:showId(\d+)" component={() => <Show />} />
        <Route path="/show/edit/:showId(\d+)" component={() => <EditShow currentUser={currentUser} />} />
        <Route path="/show/add" component={() => <AddShow currentUser={currentUser}/>}/>
        
        <Route exact path="/cities" component={() => <Cities currentUser={currentUser}/>} />
        <Route path="/city/:cityId(\d+)" component={() => <City />} />
        <Route path="/city/add" component={() => <AddCity currentUser={currentUser}/>}/>
        <Route path="/city/edit/:cityId(\d+)" component={() => <EditCity currentUser={currentUser} />} />
        <Route path="*" component={() => <Authenticated user={user} currentUser={currentUser}/>} />
      </Switch>
    </div>
  );
}

// useEffect(() => {
//   fetch(`https://localhost:7108/api/User/CheckIfUserExists/${user.$.W}`,
//   {
//   method: 'GET',
//   headers: {
//     'Access-Control-Allow-Origin': 'https://localhost:7108',
//     'Content-Type': 'application/json'
//   },
// },
// )
//     .then((res) => res.json())
//     .then((fbUser) => {
//       setUserExists(fbUser)
//     })
// }, [])