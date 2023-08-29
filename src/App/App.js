import React from 'react';
import { Layout, Landing, Details, SignIn, SignUp, Favorites,  } from '../Pages';
import { Route, Routes } from 'react-router-dom';
import AboutUS from '../Pages/AboutUS';
import SearchPage from '../Pages/SearchPage';
import ErrorPage from '../Pages/ErrorPage';
import Profile from '../Pages/Profile';

function App() {
  return (
    <Layout className="App">
      {/* <Landing /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Details/:id" element={<Details/>} />
        <Route path="/About" element={<AboutUS/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage/>} />

      </Routes>

    </Layout>
  );
}

export default App