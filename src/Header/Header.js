import React, { Component } from 'react'
import "./Header.css"

export class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="section_one">Auto Genius</div>
                <div className="section_two">
                    <span >Search</span>
                    <span>Home</span>
                    <span>Login</span>
                    <span>Menu</span>
                </div>                
            </div>
        )
    }
}

export default Header
