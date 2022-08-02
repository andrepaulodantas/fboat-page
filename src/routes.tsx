import  Home from './pages/home';
import  Contact from './pages/contact';
import  About from './pages/about';
import  Login  from './pages/login';
import Card from './pages/notice';
import  Publications from './pages/publications';
import  Header from './components/header';
import  Footer from './components/footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function AppRouter(){
    return (
        <Router>  
            <Header />                             
            <Routes>
                <Route path="/" element={<Home />} />           
                <Route path="/about" element={<About />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/card" element={<Card />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />                
            </Routes>
            <Footer />
        </Router>
       );
}