import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Header from "./Header";
import IA from "./IA";
//import UI from "./UI";
//import Autre from "./Autre";
import Accueil from "./Accueil"; 

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="" element={<Accueil/>}/>
                    <Route path="IA" element={<IA/>}/> //TODO à modifier
                    <Route path="UI" element={<Accueil/>}/>
                    <Route path="Autre" element={<Accueil/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;