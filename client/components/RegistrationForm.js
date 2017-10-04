import React, {Component} from 'react'
import validator from 'validator'
import querystring from 'querystring'
import '../src/css/RegistrationForm.css'


class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teamName: '',
            topName: '',
            jungleName: '',
            midName: '',
            adcName: '',
            supportName: '',
            sub1Name: '',
            sub2Name: '',
            checked: 'no',
            displaySubForm: false,
            displayErrors: false,
            errors: {
                teamNameError: true,
                teamNameSizeError: true,
                topNameError: true,
                topNameSizeError: true,
                jungleNameError: true,
                jungleNameSizeError: true,
                midNameError: true,
                midNameSizeError: true,
                adcNameError: true,
                adcNameSizeError: true,
                supportNameError: true,
                supportNameSizeError: true,
                subNameError: true,
                subNameSizeError: true
            }
        }

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleValueUpdate = this.handleValueUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate(name) {
        const errors = this.state.errors;
        const validatedName = validator.ltrim(name.target.value);

        if ((name.target.name === 'sub1Name') ||
            (name.target.name === 'sub2Name')) {
            errors['subNameError'] = validator.isEmpty(validatedName);
            errors['subNameSizeError'] = !validator.isLength(validatedName, {min: 3, max: 16});
        }
        else {
            errors[name.target.name + 'Error'] = validator.isEmpty(validatedName);
            errors[name.target.name + 'SizeError'] = !validator.isLength(validatedName, {min:3, max: 16});
        }

        this.setState({ errors: errors });
    }

    handleOptionChange(selection) {
        this.setState({
            checked: selection.target.value,
            displaySubForm: !this.state.displaySubForm
        });
    }

    handleValueUpdate(field) {
        const validatedName = validator.ltrim(field.target.value);

        this.setState({ [field.target.name]: field.target.value });

        this.validate(field);
    }

    handleSubmit(event) {
        this.setState({ displayErrors: true });

        // If yes option checked and no errors are found, submit data
        if (this.state.checked === 'yes') {
           if (!(
                this.state.errors['teamNameError']    ||
                this.state.errors['topNameError']     ||
                this.state.errors['jungleNameError']  ||
                this.state.errors['midNameError']     ||
                this.state.errors['adcNameError']     ||
                this.state.errors['supportNameError'] ||
                this.state.errors['subNameError']
            )) {
                return true;
            }
            event.preventDefault();
        }
        else { // If no option
            if (!(
                this.state.errors['teamNameError']    ||
                this.state.errors['topNameError']     ||
                this.state.errors['jungleNameError']  ||
                this.state.errors['midNameError']     ||
                this.state.errors['adcNameError']     ||
                this.state.errors['supportNameError']
            )) {
                 return true;
            }
            event.preventDefault();
        }
    }

    render() {
        return(
            <form id="team-registration-form" method="post" action="/thank-you" onSubmit={this.handleSubmit}>
                <div id="form-container">
                    <header id="form-title">
                        <h1>Team Registration</h1>
                    </header>

                    <div id="form-content">
                        <div id="content-wrapper">
                            <input type="text" name="teamName" placeholder="Team Name" onChange={this.handleValueUpdate} onBlur={this.validate}/><br/>
                            {this.state.displayErrors && this.state.errors['teamNameError']? <div className="error">Team name field is empty.</div>: null}
                            {this.state.displayErrors && this.state.errors['teamNameSizeError']? <div className="error">Team name must be between 3 and 16 characters long.</div>: null}

                            <input type="text" name="topName" placeholder="Top" onChange={this.handleValueUpdate} onBlur={this.validate}/><br/>
                            {this.state.displayErrors && this.state.errors['topNameError']? <div className="error">Top name field is empty.</div>: null}
                            {this.state.displayErrors && this.state.errors['topNameSizeError']? <div className="error">Top name must be between 3 and 16 characters long.</div>: null}

                            <input type="text" name="jungleName" placeholder="Jungle" onChange={this.handleValueUpdate} onBlur={this.validate}/><br/>
                            {this.state.displayErrors && this.state.errors['jungleNameError']? <div className="error">Jungle name field is empty.</div>: null}
                            {this.state.displayErrors && this.state.errors['jungleNameSizeError']? <div className="error">Jungle name must be between 3 and 16 characters long.</div>: null}

                            <input type="text" name="midName" placeholder="Mid" onChange={this.handleValueUpdate} onBlur={this.validate}/><br/>
                            {this.state.displayErrors && this.state.errors['midNameError']? <div className="error">Mid name field is empty.</div>: null}
                            {this.state.displayErrors && this.state.errors['midNameSizeError']? <div className="error">Mid name must be between 3 and 16 characters long.</div>: null}

                            <input type="text" name="adcName"placeholder="Adc" onChange={this.handleValueUpdate} onBlur={this.validate}/><br/>
                            {this.state.displayErrors && this.state.errors['adcNameError']? <div className="error">Adc name field is empty.</div>: null}
                            {this.state.displayErrors && this.state.errors['adcNameSizeError']? <div className="error">Adc name must be between 3 and 16 characters long.</div>: null}

                            <input type="text" name="supportName" placeholder="Support" onChange={this.handleValueUpdate} onBlur={this.validate}/><br/>
                            {this.state.displayErrors && this.state.errors['supportNameError']? <div className="error">Support name field is empty.</div>: null}
                            {this.state.displayErrors && this.state.errors['supportNameSizeError']? <div className="error">Support name must be between 3 and 16 characters long.</div>: null}

                            <div id="sub-players">
                                <p>Does your team have subs?</p>
                                <div id="sub-choice">
                                    <input type="radio" name="sub" value="no"
                                    checked={this.state.checked === 'no'}
                                    onChange={this.handleOptionChange} onBlur={this.validate}/>
                                    <label htmlFor="no"> No</label>

                                    <input type="radio" name="sub" value="yes"
                                    checked={this.state.checked === 'yes'}
                                    onChange={this.handleOptionChange} onBlur={this.validate}/>
                                    <label htmlFor="yes"> Yes</label>
                                </div>
                            </div>

                            {
                                this.state.displaySubForm ?
                                    <div id="sub-section">
                                        <input type="text" name="sub1Name" placeholder="1st Sub" onChange={this.handleValueUpdate}/><br/>
                                        <input type="text" name="sub2Name" placeholder="2nd Sub" onChange={this.handleValueUpdate}/><br/>
                                        {this.state.displayErrors && this.state.errors['subNameError']? <div className="error">Sub name field is empty.</div>: null}
                                        {this.state.displayErrors && this.state.errors['subNameSizeError']? <div className="error">Sub name must be between 3 and 16 characters long.</div>: null}
                                    </div>
                                    : null
                            }

                            <input type="submit" value="Submit"/>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default RegistrationForm;
