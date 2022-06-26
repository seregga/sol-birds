import React from 'react';
import './App.css';
import About from './components/about/About';
import BasicUtilities from './components/basic-utilities/BasicUtilities';
import BirdsCoin from './components/birds-coin/BirdsCoin';
import Header from './components/header/Header';
import LogoBlock from './components/logo-block/LogoBlock';
import RoadMap from './components/road-map/RoadMap';

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <LogoBlock />
            <About />
            <RoadMap />
            <BirdsCoin />
            <BasicUtilities />
        </div>
    );
}

export default App;
