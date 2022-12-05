// index for router
import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Authenticated from '../pages/Authenticated';
import Groups from '../pages/Groups';
import Cities from '../pages/Cities';
import Profile from '../pages/Profile';
import Shows from '../pages/Shows';

export default function Routes({ user }) {
// console.log(user.name);
const [firebaseUser, setFirebaseUser] = useState([]);

const RegisterUser = (user) => {
  const fetchOptions = {
      method: 'POST',
      headers: {
          'Access-Control-Allow-Origin': 'https://localhost:7108',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
  }
  return fetch('https://localhost:7057/api/User/RegisterUser', fetchOptions)
}
const submit = () => {
  const data = {
    "name": user.displayName,
    "email": user.email,
    "firebaseId": user.$.W,
    "image": user.photoURL
  }
  RegisterUser(data)
}

useEffect(() => {
  fetch(
    'https://localhost:7108/api/User/CheckIfUserExists/' + user.$.W,
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
      setFirebaseUser(r)
    });
}, [])


useEffect(() => {
  if(!firebaseUser) {
    submit()
  }
}, [])


console.log(firebaseUser);



  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Authenticated user={user} />} />
        <Route path="/profile" component={() => <Profile />} />
        <Route path="/groups" component={() => <Groups />} />
        <Route path="/shows" component={() => <Shows />} />
        <Route path="/cities" component={() => <Cities />} />
        <Route path="*" component={() => <Authenticated user={user} />} />
      </Switch>
    </div>
  );
}
