import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

const TeamRegistrationPage = () => (
    <div id="team-registration-page">
        <NavBar/>
        <RegistrationForm/>
        <Footer/>
    </div>
);

ReactDOM.render(<TeamRegistrationPage/>, document.getElementById('root'));
