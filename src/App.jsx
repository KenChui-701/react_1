import { useEffect, useState, useRef} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './components/Nav'
import Footer from "./components/Footer"
import "./App.css"

import Home from "./pages/Home"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Page404 from "./pages/Page404"

export default () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav/>
        <Routes className = "route">
            <Route path="/" element={<Home/>}/>
            <Route path="Home" element={<Home/>}/>
            <Route path="page1" element={<Page1/>}/>
            <Route path="page2" element={<Page2/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
        <Footer className="foot"/>
      </div>
    </BrowserRouter>
  )
}