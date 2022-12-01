// index for router
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Authenticated from '../pages/Authenticated';
import Groups from '../pages/Groups';
import Cities from '../pages/Cities';
import Profile from '../pages/Profile';
import Shows from '../pages/Shows';

export default function Routes({ user }) {
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
