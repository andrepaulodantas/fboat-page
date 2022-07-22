import  Home from './pages/home';
import  Contact from './pages/contact';
import  About from './pages/about';
import  Publications from './pages/publications';
import  Header from './components/header';
import  Footer from './components/footer';
import  Events from './pages/events';
import  Login  from './pages/login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter(){
    return (
        <Router>  
            <Header />                             
            <Routes>
                <Route path="/" element={<Home />} />           
                <Route path="/about" element={<About />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />                
            </Routes>
            <Footer />
        </Router>
       );
}