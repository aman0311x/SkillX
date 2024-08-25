
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import LearnMain from './Pages/Learn/Learn_main';
import { Routes, Route } from "react-router-dom"
import Footer from './Pages/Shared/Footer';
import SignIn from './Pages/Login/SignIn';
import SignUp from './Pages/Login/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import PageNotFound from './Pages/Shared/PageNotFound';
import ContactUs from './Pages/Contact/ContactUs';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/learn" element={<LearnMain />} />
        <Route path="/login" element={<SignIn></SignIn>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/contact" element={<ContactUs></ContactUs>} />
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
