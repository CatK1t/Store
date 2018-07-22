import React, { Component } from 'react';


class Registration extends Component {


  render() {
      
      return (
        <div className="Registration">
        <h3 className="text-center">Registration</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Login name</label>
                    <input type="email" className="form-control" id="exampleInputLogin" aria-describedby="loginHelp" placeholder="Enter login" />
                    <small id="loginHelp" className="form-text text-muted">Your Login</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Registration</button>
            </form>
        </div>
      );

  }


}

export default Registration;
