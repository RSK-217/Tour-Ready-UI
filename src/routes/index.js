// index for router
import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Authenticated from '../pages/Authenticated';
import Groups from '../pages/Groups';
import Cities from '../pages/Cities';
import City from '../pages/City';
import Profile from '../pages/Profile';
import Shows from '../pages/Shows';
import Show from '../pages/Show';

export default function Routes({ user }) {

const [userExists, setUserExists] = useState({});
const [currentUser, setCurrentUser] = useState({});
const history = useHistory()

useEffect(() => {
  fetch(
    `https://localhost:7108/api/User/CheckIfUserExists/${user.$.W}`,
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
    });

}, [])

useEffect(() => {
  fetch(`https://localhost:7108/api/User/GetUserByFirebaseId/${user.$.W}`,
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
}, [])

const RegisterUser = (user) => {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'https://localhost:7108',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  }
  return fetch('https://localhost:7108/api/User/RegisterUser', fetchOptions)
  .then(res => res.json())
  .then(() => {
    history.push('/profile')
  })
}

// const submit = (user) => {
// const newUser = {
//   name: user.displayName,
//   email: user.email,
//   firebaseId: user.$.W,
//   image: user.photoURL
// }
// RegisterUser(newUser)
// }

// useEffect(() => {
  
//     submit()
  
// }, [])

console.log(userExists);

console.log(user);

console.log(currentUser);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Authenticated user={user} />} />
        <Route path="/profile" component={() => <Profile currentUser={currentUser}/>} />
        <Route path="/groups" component={() => <Groups currentUser={currentUser}/>} />
        <Route path="/shows" component={() => <Shows currentUser={currentUser}/>} />
        <Route path="/show/:showId(\d+)" component={() => <Show />} />
        <Route exact path="/cities" component={() => <Cities currentUser={currentUser}/>} />
        <Route path="/city/:cityId(\d+)" component={() => <City />} />
        <Route path="*" component={() => <Authenticated user={user} />} />
      </Switch>
    </div>
  );
}
