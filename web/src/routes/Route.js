import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import {store} from '../store';
import history from '../services/history';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  let isEdit = false;

  const { path } = rest;

  if(path.indexOf("edit") >= 0){
    isEdit = !isEdit;
  }

  const { signed } = store.getState().auth;

  if(!signed && isPrivate){
    return <Redirect to="/" />;
  }

  if(signed && !isPrivate){
    return <Redirect to="/deliveries" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route 
      {...rest}
      render={props => (
        <Layout {...props}>
          <Component history={history} isEdit={isEdit} {...props} />
        </Layout>
      )}
     />
  );
}
