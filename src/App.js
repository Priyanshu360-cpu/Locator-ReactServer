import React from 'react';
import './App.css';
import Contact from './contact';
import Realmdb from './realmdb';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './homepage';

function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/mapview' element={<Contact/>} />
        <Route path='/realm' element={<Realmdb/>} />
    </Routes>
    </Router>
);
}
  
export default App;