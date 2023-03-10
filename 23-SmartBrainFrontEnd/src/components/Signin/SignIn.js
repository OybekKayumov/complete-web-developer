import React, { Component } from 'react'

class SignIn extends Component {   // ({ onRouteChanges })
  // create a state
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPwd: ''
    }
  }
  
  // to get data from input
  onEmailChange = (e) => {
    this.setState({signInEmail: e.target.value})
  }

  onPasswordChange = (e) => {
    this.setState({signInPwd: e.target.value})
  }

  // fetch data from input
  onSubmitSignIn = () => {
    console.log(this.state);
    // send to server input data, (POST)
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPwd,
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChanges('home');
        }
      })
  }

  render () {
    // destructuring
    const { onRouteChanges } = this.props;

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">    
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address" 
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password" 
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input 
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="Sign in" 
                // onClick={() => this.props.onRouteChanges('home')} // run when onClick happens
                // onClick={() => onRouteChanges('home')} 
                onClick={this.onSubmitSignIn} 
              />
            </div>
            <div className="lh-copy mt3">
              <p 
                // onClick={() => this.props.onRouteChanges('register')} 
                onClick={() => onRouteChanges('register')} 
                className="f3 link dim black db pointer">
                  Register
              </p>
            </div>
          </form>
        </main>
      </article>
    )
  }
  
}

export default SignIn