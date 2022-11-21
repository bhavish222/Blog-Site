import React from "react"
import './App.css';
import Home from "../home/Home"
import Article from "../article/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BollyWood from "../bollywood/BollyWood";
import HollyWood from "../hollywood/HollyWood";
import Technology from "../technology/Technology";
import Fitness from "../fitness/Fitness";
import Food from "../food/Food";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/article" element={<Article />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/bollywood" element={<BollyWood />}></Route>
        <Route path="/hollywood" element={<HollyWood />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
        <Route path="/fitness" element={<Fitness />}></Route>
        <Route path="/food" element={<Food />}></Route>
      </Routes>
    </BrowserRouter>
  )
}