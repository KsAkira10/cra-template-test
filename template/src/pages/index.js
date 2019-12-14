// @flow
import React, { lazy, Suspense } from 'react';
import { shape } from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Fallback from '../shared/components/Fallback/Fallback';
import Layout from '../containers/Layout/Layout';

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./Domain/Domain'))
  }
];

const Pages = ({ history }) => (
  <BrowserRouter history={history}>
    <Switch>
      <Layout>
        <Suspense
          fallback={
            <>
              <Fallback />
            </>
          }
        >
          {routes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} component={component} key={path} />
          ))}
        </Suspense>
      </Layout>
    </Switch>
  </BrowserRouter>
);

Pages.propTypes = {
  history: shape({})
};

export default connect(({ history }) => ({ history }))(Pages);
