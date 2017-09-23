import React, {Component} from 'react'
import '../src/css/RegistrationForm.css'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: 'no',
            displaySubForm: false
        }

        //this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(selection) {
        this.setState({
            checked: selection.target.value,
            displaySubForm: this.state.displaySubForm
        });
    }

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

                        <div id="sub-players">
                            <p>Does your team have subs?</p>
                            <div id="sub-choice">
                                <input type="radio" name="sub" value="no"
                                checked={this.state.checked === 'no'}
                                onChange={this.handleOptionChange}/>
                                <label for="no"> No</label>

                                <input type="radio" name="sub" value="yes"
                                checked={this.state.checked === 'yes'}
                                onChange={this.handleOptionChange}/>
                                <label for="yes"> Yes</label>

                                {
                                    this.state.displaySubForm ?
                                        <div id="sub-section">We are subs hehe</div>
                                        : null
                                }
                            </div>
                        </div>

                        <input type="submit" value="Submit"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default RegistrationForm;
