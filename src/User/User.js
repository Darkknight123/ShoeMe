import React, { Component } from 'react'
import './User.css'

class User extends Component {
    render() {
        return (
            <div className="user">

                <h2>Sign up</h2>
                <div className="input-wrapper"><label>Firstname</label> <input placeholder="input"/></div>
                <div className="input-wrapper"><label>Lastname</label> <input placeholder="input"/></div>
                <div className="input-wrapper"><label>Email</label> <input placeholder="input"/></div>
                <div className="input-wrapper"><label>Phone</label> <input placeholder="input"/></div>

                <h2>Security</h2>
                <div className="input-wrapper"><label>new password</label> <input placeholder="input"/></div>
                <div className="input-wrapper"><label>confirm password</label> <input placeholder="input"/></div>
                <div className="input-wrapper button"><button>Sign Up</button></div>

            </div>
        )
    }
}

export default User
