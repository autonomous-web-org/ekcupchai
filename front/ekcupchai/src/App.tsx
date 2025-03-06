import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Nav from '../components/navbar'
import Home from '../components/home'
import About from '../components/about'


const router = createBrowserRouter([
  {
    path: "/components/home",
    element: <div>Home Page</div>
  },
  {
    path: "/components/about",
    element: <div>About Page</div>
  }
])

function App() {
  return (
    <>
      <div><h1>Fatty Buddha </h1></div>
      <Nav />
      <RouterProvider router={router} />
    </>
  )
}

export default App
