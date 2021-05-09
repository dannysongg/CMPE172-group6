import React from 'react';
import logo from './demonslayer.png';
import logo2 from './mortalkombat.png';
import logo3 from './godzilla.jpg';
import './App.css';

const Movie = () => {
    return (
        <div className="App">
            <header className="App-header">
                Now Playing
            <div class="row">
                <div class = "column">
                    <a href="/seats"><img src={logo} className="App-logo" alt="Demonslayer" /> </a>
                </div> 
                <div class = "column">
                    <a href="/seats"><img src={logo2} className="App-logo" alt="Mortal Kombat" /> </a>
                </div>
                <div class = "column">
                    <a href ="/seats"> <img src={logo3} className="App-logo" alt="Godzilla vs Kong" /> </a>
                </div>
            </div>
            </header>
        </div>
    );
}

export default Movie;