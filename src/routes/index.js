// index for router
import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Authenticated from '../pages/Authenticated';
import Groups from '../pages/Groups';
import Cities from '../pages/Cities';
import Profile from '../pages/Profile';
import Shows from '../pages/Shows';

export default function Routes({ user }) {

const [firebaseUser, setFirebaseUser] = useState({});
const [firstRender, setFirstRender] = useState(false)

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
      setFirebaseUser(fbUser)
      setFirstRender(true)
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

const submit = (user) => {
const newUser = {
  name: user.displayName,
  email: user.email,
  firebaseId: user.$.W,
  image: user.photoURL
}
RegisterUser(newUser)
}

useEffect(() => {
  
    submit()
  
}, [!firebaseUser])

console.log(firebaseUser);

console.log(user.displayName);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Authenticated user={user} fbUser={firebaseUser}/>} />
        <Route path="/profile" component={() => <Profile user={firebaseUser}/>} />
        <Route path="/groups" component={() => <Groups user={firebaseUser}/>} />
        <Route path="/shows" component={() => <Shows user={firebaseUser}/>} />
        <Route path="/cities" component={() => <Cities user={firebaseUser}/>} />
        <Route path="*" component={() => <Authenticated user={user} />} />
      </Switch>
    </div>
  );
}
