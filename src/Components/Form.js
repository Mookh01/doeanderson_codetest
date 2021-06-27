import React from "react";
import validator from 'validator'

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', response: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {    
        let email = event.target.value 
        if (validator.isEmail(email)) {
            this.setState({value: event.target.value, response: 'Valid Email :)'}); 
        } else {
            this.setState({value: event.target.value, response: 'Enter valid Email!'});
        } 
    }

    handleSubmit(event) {
    event.preventDefault();
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>        
        <label>
            Submit Email:
        <input type="text" value={this.state.value} onChange={this.handleChange} />        
        </label>
        <input type="submit" value="Submit" /> <br />
        <span style={{ fontWeight: 'bold', color: 'red'}}>{this.state.response}</span>
        </form>
    );
    }
  }