import { Route, Router, Routes } from "react-router";
import Footer from "./footer";
import Header from "./header";
import PageContainer from "./pagecontainer";
import React from "react";
import Contact from "./contact/contact";
import About from "./About";
import Home from "./home";

const App = () => {
  return (
    <>
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageContainer>
    </>
  );
};

export default App;
