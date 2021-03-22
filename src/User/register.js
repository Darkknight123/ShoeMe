import React from "react";
import './User.css'


export class Register extends React.Component{


    constructor(props){
        super(props);
    }
    render() {
        return( <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">

            <div className="form">
                <div className="form-group">
                    <h2 htmlFor="UserName">UserName</h2>
                    <input type="text" name="username" placeholder="Username"></input>
                  
                </div>
                <div className="form-group">
                    <h1 htmlFor="UserName">Email</h1>
                    <input type="email" name="email" placeholder="example@gmail.com"></input>
                  
                </div>
                <div className="form-group">
                    <h2 htmlFor="UserName">Password</h2>
                    <input type="password" name="password" placeholder="password"></input>
                  
                </div>
            </div>
        </div>
        <div className="footer">
            <button type="button" className="btn">
                Register
            </button>
        </div>
    </div>)
    }    
}
