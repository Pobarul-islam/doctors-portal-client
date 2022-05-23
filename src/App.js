import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link, Router } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appoinment from './Pages/Appoinment/Appoinment';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/appoinment' element={<Appoinment></Appoinment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
