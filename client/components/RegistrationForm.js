import React, {Component} from 'react'
import '../src/css/RegistrationForm.css'

class RegistrationForm extends Component {
    render() {
        return(
            <form id="team-registration-form" method="post" action="/thank-you">
                <div id="form-container">
                    <header id="form-title">
                        <h1>Team Registration</h1>
                    </header>

                    <div id="form-content">
                        <input type="text" name="team-name" placeholder="Team Name"/><br/>
                        <input type="text" name="Top" placeholder="Top"/><br/>
                        <input type="text" name="Jungle" placeholder="Jungle"/><br/>
                        <input type="text" name="Mid" placeholder="Mid"/><br/>
                        <input type="text" name="Adc"placeholder="Adc"/><br/>
                        <input type="text" name="Support" placeholder="Support"/><br/>
                        <input type="submit" value="Submit"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default RegistrationForm;
