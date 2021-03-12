import React, { Component } from 'react'
import "./Header.css"

export class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.showSearch =this.showSearch.bind(this);
    }


    showSearch(){
        document.getElementById("search").style.display="block";
    }
    
    render() {
        return (
            <div className="Header">
                <div className="section_one">ShoeMe</div>
                <div className="section_two">
                    <span><input id="search" style={{display:"none"}} type="search"/><i className="fas fa-search"></i></span>
                    <span onClick={this.showSearch}><i className="fas fa-home" ></i></span>
                    <span> <i className="fas fa-user"></i></span>
                    <span><i className="fas fa-bars"></i></span>                    
                </div>
            </div>
        )
    }
}

export default Header
