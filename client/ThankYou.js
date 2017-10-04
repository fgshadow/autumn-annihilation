import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import ThankYouSection from './components/ThankYouSection'
import Footer from './components/Footer'

const ThankYou = () => (
    <div id="thank-you-page">
        <NavBar color="#AA1822"/>
        <ThankYouSection/>
        <Footer color="#AA1822"/>
    </div>
);

ReactDOM.render(<ThankYou/>, document.getElementById('root'));
