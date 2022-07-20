import  Home from './pages/home';
import  Contact from './pages/contact';
import  About from './pages/about';
import  Publications from './pages/publications';
import  Header from './components/header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter(){
    return (
        <Router>  
            <Header />          
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/publications" element={<Publications />} />
            </Routes>
        </Router>
       );
}