//import logo from './logo.svg';
import './App.css';
//import { FaCcDinersClub } from "react-icons/fa";
//import { HiArrowCircleLeft } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./Custom.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Checkouts from './Pages/Checkouts';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import Cart from './Pages/Cart';
import Details from './Pages/Details';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/Checkouts' element={ <Checkouts/>} />
        <Route path='/Cart' element={ <Cart /> } />
        <Route path='/Details/:id' element={ <Details/> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
