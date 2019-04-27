import React, { Component } from 'react';
import Input from './fields/inputField';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginFields:
      {
        email: '',
        password: ''
      },
      SignupFields: {
        name: '',
        phoneNo: '',
        email: '',
        password: ''
      },
      formError: { email: '', password: '', name: '', phoneNo: '' }
    }
    this.handleInput = this.handleInput.bind(this);

  }
  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      LoginFields:
      {
        ...prevState.LoginFields, [name]: value
      },
      SignupFields:
      {
        ...prevState.SignupFields, [name]: value
      }
    }), () => { this.validate(name, value) })
  }

  validate(field, value) {
    let errors = this.state.formError;
    switch (field) {
      case 'name':
        errors.name = value.match(/^[A-Za-z\s]+$/i)
        errors.name = errors.name ? '' : 'must be only alphabets'
        break;
      case 'email':
        errors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        errors.email = errors.email ? '' : 'must be valid email id'
        break;
      case 'password':
        errors.password = value.length >= 8 && value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
        errors.password = errors.password ? '' : 'Password is too short and must be combination of an uppercase, a lowercase, a number and a special character'
        break;
      case 'phoneNo':
        errors.phoneNo = value.length === 10 && value.match(/^[0-9]+$/)
        errors.phoneNo = errors.phoneNo ? '' : 'only numbers allowed and 10 digits'
        break;
      default:
        break;
    }

    this.setState({
      formError: errors
    })

  }

  render() {
    return (
      <div>
        <form className="form">
          <Input inputType={'text'}
            name={'email'}
            value={this.state.LoginFields.email}
            placeholder={'email'}
            handleChange={this.handleInput} />
          <p>{this.state.formError.email}</p>
          <Input inputType={'password'}
            name={'password'}
            value={this.state.LoginFields.password}
            placeholder={'password'}
            handleChange={this.handleInput}
          />
           <p>{this.state.formError.password}</p>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

//Signup component
class Signup extends Login {
  render() {
    return (
      <div>
        <form className="form">
          NAME:
                <Input inputType={'text'}
            className="form-control"
            name={'name'}
            value={this.state.SignupFields.name}
            placeholder={'NAME'}
            handleChange={this.handleInput}
          />
           <p>{this.state.formError.name}</p>
          <br></br>

          EMAIL:
                <Input inputType={'text'}
            name={'email'}
            value={this.state.SignupFields.email}
            placeholder={'EMAIL'}
            handleChange={this.handleInput}
          />
           <p>{this.state.formError.email}</p>
          <br></br>

          PASSWORD:
                <Input inputType={'password'}
            name={'password'}
            value={this.state.SignupFields.password}
            placeholder={'PASSWORD'}
            handleChange={this.handleInput}
          />
           <p>{this.state.formError.password}</p>
          <br></br>

          PHONE NO :
                <Input inputType={'text'}
            name={'phoneNo'}
            value={this.state.SignupFields.phone}
            placeholder={'PHONE NO'}
            handleChange={this.handleInput}
          />
           <p>{this.state.formError.phoneNo}</p>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export {
  Signup,
  Login
};
