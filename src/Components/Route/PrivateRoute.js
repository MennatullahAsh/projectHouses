import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../../Context/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuth, authLoading } = useContext(AuthContext);
  return <Outlet {...rest}>{isAuth && !authLoading && <Component />}</Outlet>;
}
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;