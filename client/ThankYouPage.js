import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const ThankYouPage = () => (
    <div id="thank-you-page">
        <NavBar/>
        <Footer/>
    </div>
);

ReactDOM.render(<ThankYouPage/>, document.getElementById('root'));
