import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomeContent from './components/HomeContent'

const Home = () => (
    <div id="home-page">
        <NavBar color="#A36334"/>
        <HomeContent/>
        <Footer color="#A36334"/>
    </div>
);

ReactDOM.render(<Home/>, document.getElementById('root'));
