import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

export default function RouterWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  //const { signed } = store.getState().auth;
  const signed = false;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  conponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
};
