import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const HomePage = () => (
    <div id="home-page">
        <NavBar/>
        Home Page
        <Footer/>
    </div>
);

ReactDOM.render(<HomePage/>, document.getElementById('root'));
