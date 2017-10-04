import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const Teams = () => (
    <div id="teams-page">
        <NavBar/>
        <h1>Teams Page</h1>
        <Footer/>
    </div>
);

ReactDOM.render(<Teams/>, document.getElementById('root'));
