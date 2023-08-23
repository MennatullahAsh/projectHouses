import React from 'react';
import { Layout, Landing, Details } from '../Pages';
import { Route, Routes } from 'react-router-dom';
import AboutUS from '../Pages/AboutUS'

function App() {
  return (
    <Layout className="App">
      {/* <Landing /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Details/:id" element={<Details/>} />
        <Route path="/About" element={<AboutUS/>} />

      </Routes>

    </Layout>
  );
}

export default App