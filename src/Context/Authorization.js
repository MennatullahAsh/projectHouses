import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState();
  const [authLoading, setAuthLoading] = useState(false);


  const [user, setUser] = useState([]);


  const Login = (userData) => {
    setUser(userData);
    setIsAuth(true);

  }
  const logout = () => {
    setUser(null);
    setIsAuth(false);

  }



  useEffect(() => {
    (async () => {
      try {


        setAuthLoading(false);
      } catch (err) {
        setAuthLoading(false);
        if (err.response.status === 401) {
          setIsAuth(false);
        } else {
          setError(
            err.response ? err.response.data.message : 'internal server error'
          );
        }
      }
    })();
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth, authLoading, error, Login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
// AuthProvider.propTypes = {
//   children: PropTypes.func.isRequired,
// };

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;