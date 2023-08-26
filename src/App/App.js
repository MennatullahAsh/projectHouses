import React from 'react';
import { Layout, Landing, Details, SignIn ,SignUp} from '../Pages';
import { Route, Routes } from 'react-router-dom';
import AboutUS from '../Pages/AboutUS';
import SearchPage from '../Pages/SearchPage';
// import SignIn from '../Pages/SignIn'

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

      </Routes>

    </Layout>
  );
}

export default App