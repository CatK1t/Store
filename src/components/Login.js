import React, { Component } from 'react';


class Login extends Component {


  render() {
      
      return (
        <div className="Login">
        <h3 className="text-center">Login</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Login name</label>
                    <input type="email" className="form-control" id="exampleInputLogin" aria-describedby="loginHelp" placeholder="Enter login" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
      );

  }


}

export default Login;
