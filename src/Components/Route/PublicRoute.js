import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';



import AuthContext from '../../Context/AuthContext';

function PublicRoute({ component: Component, ...rest }) {
  const { isAuth, authLoading } = useContext(AuthContext);
  
  return   !isAuth && !authLoading ? <Outlet /> : <Navigate to="/" />;
}
PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PublicRoute;