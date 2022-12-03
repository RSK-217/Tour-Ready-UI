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
const [foundUser, setFoundUser] = useState([]);

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
      setFoundUser(r)
    });
}, [])

console.log(foundUser);


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
