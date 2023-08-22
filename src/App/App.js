import React from 'react';
import { Layout, Landing, Details } from '../Pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Layout className="App">
      {/* <Landing /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Details/:id" element={<Details/>} />

      </Routes>

    </Layout>
  );
}

export default App