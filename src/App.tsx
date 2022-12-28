import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/App.scss";

import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import Copyright from "./component/Copyright";
import Background from "./component/Background";
import MainContents from "./component/MainContents";
import Generic from "./component/Generic";
import Elements from "./component/Elements";
import Info from "./component/Info";
import Intro from "./component/Intro";

export default function App(): JSX.Element {
  return (
    <div id="wrapper" className="fade-in">
      <Intro />
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<MainContents />} />
        <Route path="/generic" element={<Generic />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/info/:userName" element={<Info />} />
      </Routes>
      <Footer />
      <Copyright />
      <Background />
    </div>
  );
}
