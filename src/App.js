import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addformdata from "./components/Addformdata";
import Blogdata from "./containers/Blogdata";
import Header from "./components/Header";
import Singlepost from "./containers/Singlepost";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Addformdata />} />
          <Route path="/blogs" element={<Blogdata />} />
          <Route path="/singlepost/:index" element={<Singlepost />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;