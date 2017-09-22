import React from 'react'
import '../src/css/NavBar.css'

const links = ['Home', 'Team'];

const linksList = links.map((value, key) => {
    let path = '/' + value.toLowerCase() + '-registration';

    if (value === 'Home')
        path = "/";

    return <a href={path} key={key}>{value}</a>;
});

const NavBar = () => (
    <nav id="navbar">
        <div id="navbar-container">
            <div id="navbar-logo">
                <a href="https://jsweet895.com/"><h1>Jsweet's</h1></a>
                <h1>Autumn Annihilation</h1>
            </div>

            <div id="navbar-links">
                {linksList}
            </div>
        </div>
    </nav>
);

export default NavBar;
