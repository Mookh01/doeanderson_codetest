import React from "react";
import validator from 'validator'
import emailjs from 'emailjs-com'
export default class Form extends React.Component {

  constructor(props) {
	super(props);
	this.state = { value: '', response: '', feedback: '', name: 'Name', email: 'email@example.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
    <form className="test-mailing" onSubmit={this.handleSubmit} >                <label>
            Submit Email:
         <input id="test-mailing" name="test-mailing" type="text"  value={this.state.value} onChange={this.handleChange} required/>        
         </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit} /> <br />
        <span style={{ fontWeight: 'bold', color: 'red'}}>{this.state.response}</span>
  	</form>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
    let email = event.target.value 
    if (validator.isEmail(email)) {
        this.setState({feedback: '', name: 'Name', email: email, value: event.target.value, response: 'Valid Email :)'}); 
    } else {
        this.setState({feedback: '', name: 'Name', email: email, value: event.target.value, response: 'Enter valid Email!'});
    } 
  }

  handleSubmit(event) {
    // event.preventDefault();
    emailjs.sendForm('service_4t6bnid', 'service_4t6bnid', '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
}