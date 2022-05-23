import React from 'react';
import './App.css';
import Contact from './contact';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './homepage';

function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    </Router>
);
}
  
export default App;