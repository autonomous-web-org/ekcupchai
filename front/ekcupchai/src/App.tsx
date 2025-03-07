// <<<<<<< HEAD
// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
// import Nav from '../components/navbar'
// import Home from '../components/home'
// import About from '../components/about'


// const router = createBrowserRouter([
//   {
//     path: "/components/home",
//     element: <div>Home Page</div>
//   },
//   {
//     path: "/components/about",
//     element: <div>About Page</div>
//   }
// ])

// function App() {
//   return (
//     <>
//       <div><h1>Fatty Buddha </h1></div>
//       <Nav />
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default App



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "../components/navbar";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact"

function App() {
  return (
    <Router>
      <div>
        <h1>Fatty Buddha</h1>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/q"  />
          <Route path="/qr"  />
        </Routes>
      </div>
    </Router>
  );
}
  export default App;

// =======
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   return (
//     <>
//       <h1 className='text-xl font-bold text-center'>hello world</h1>
//     </>
//   )
// >>>>>>> refs/remotes/origin/Lakshya-Setup
// }