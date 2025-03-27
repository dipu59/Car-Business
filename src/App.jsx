import './App.css'
import Hero from './Components/Hero';
import Navbar from './Components/Navbar'
import { User, Menu, X, Search } from "lucide-react";
import { Filters } from './Components/Search';
import {Trandings} from './Components/TrandingCar';
import Explore from './Components/BestSellingCar';
import { Reviews } from './Components/Reviews';
import Map from './Components/Map';
import Footer from './Components/footer';
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Filters/>
      <Trandings/>
      <Explore/>
      <Reviews/>
      <Map/>
      <Footer/>
    </>
  )
}

export default App
