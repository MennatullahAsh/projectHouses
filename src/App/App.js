import React from 'react';
import { Layout, Landing, Details, SignUp, Favorites, Login,  } from '../Pages';
import { Route, Routes } from 'react-router-dom';
import AboutUS from '../Pages/AboutUS';
import SearchPage from '../Pages/SearchPage';
import ErrorPage from '../Pages/ErrorPage';
import Profile from '../Pages/Profile';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Register from '../Pages/SignUp';
import { PrivateRoute, PublicRoute } from '../Components/Route';
import AuthProvider from '../Context/Authorization';
function App() {
  return (
    <ThemeProvider theme={theme}>

      <AuthProvider>

    <Layout className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Details/:id" element={<Details/>} />
        <Route path="/About" element={<AboutUS/>} />

            <Route exact path='/Login' element={<PublicRoute />}>
        <Route path="/Login" element={<Login/>}/>
            </Route>

            <Route exact path='/SignUp' element={<PublicRoute />}>
                <Route exact path='/SignUp' element={<Register />} />
            </Route>
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Search" element={<SearchPage />} />

            <Route exact path='/Favorites' element={<PrivateRoute />}>
              <Route exact path='/Favorites' element={<Favorites />} />
            </Route>


            <Route exact path='/Profile' element={<PrivateRoute />}>
              <Route exact path='/Profile' element={<Profile />} />
            </Route>

        <Route path="*" element={<ErrorPage/>} />

      </Routes>

    </Layout>

      </AuthProvider>

    </ThemeProvider>
  );
}

export default App