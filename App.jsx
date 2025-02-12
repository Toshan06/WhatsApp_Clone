import React from "react";
import "tailwindcss/tailwind.css";
import './App.css'
import { NavBar } from "./Components/NavBar";
import { Hero } from "./Components/Hero";
import { Feature } from "./Components/Feature";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <div>
      
      <div className='bg-amber-50'>
        <NavBar></NavBar>
      </div>
      <div className="bg-amber-50">
        <Hero></Hero>
      </div>
      <div className="relative bg-amber-50 rounded-b-[4rem] mb-[-10rem]">
        <Feature></Feature>
      </div>
      <div className="bg-gray-950">
        <Footer></Footer>
      </div>
    </div>
)}
export default App;