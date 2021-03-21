import React from "react";
import loginImage from '../images/loginImage.png'


export class login extends React.Component{


    constructor(props){
        super(props); 
    }
      
      render() {
        return <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                < div className="image">
                    <img src={images/loginImage}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <Label htmlFor="UserName">UserName</Label>
                        <input type="text" name="username" placeholder="Username"></input>
                      
                    </div>
                    <div className="form-group">
                        <Label htmlFor="UserName">Password</Label>
                        <input type="password" name="password" placeholder="password"></input>
                      
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Login
                </button>
            </div>
        </div>
    }
}
