
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import LearnMain from './Pages/Learn/Learn_main';
import { Routes, Route, Link } from "react-router-dom"
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/learn" element={<LearnMain />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
