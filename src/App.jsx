import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import About from "./screens/About";
import NoPage from "./screens/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
