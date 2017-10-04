import React from 'react'
import '../src/css/NavBar.css'

const NavBar = (props) => (
    <nav id="navbar" style={{borderBottom: '1px solid ' + props.color}}>
        <div id="navbar-container">
            <div id="navbar-logo">
                <a href="https://jsweet895.com/"><h1>Jsweet's</h1></a>
                <h1>Autumn Annihilation</h1>
            </div>

            <div id="navbar-links">
                <a href='/'>Home</a>
                <a href="/registration">Registration</a>
                {/*<a href="/teams">Teams</a>*/}
            </div>
        </div>
    </nav>
);

export default NavBar;
