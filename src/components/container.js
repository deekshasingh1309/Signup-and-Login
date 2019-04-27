import React from 'react'
import { Signup, Login } from './login'
import '../App.css'


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      isSignup: ''
    };
  }

  handleLoginClick = (e) => {
    this.setState({ 
      isLoggedIn: true,
      isSignup: false
    });
  }

  handleSignupClick = (e) => {
    this.setState({ 
      isSignup: true,
      isLoggedIn: false 
    });
  }

  render() {

    return (
      <div>
        {
          <button onClick={this.handleLoginClick} className="btn btn-primary">Login</button>
        }
        {
          <button onClick={this.handleSignupClick} className="btn btn-primary space">Signup</button>
        }
        {
          this.state.isLoggedIn && <Login/>
        }
        {
          this.state.isSignup && <Signup/>
        }
      </div>
    )
  }
}
export default Container

