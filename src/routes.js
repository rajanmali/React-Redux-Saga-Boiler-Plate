import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = React.lazy(() => import('./containers/Home/index'));
const NotFoundPage = React.lazy(() =>
  import('./containers/NotFoundPage/index')
);

//replace loading... with loader component

export default function AppRoutes() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Suspense>
  );
}
