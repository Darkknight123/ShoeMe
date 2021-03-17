import React, { Component } from 'react'
import { Link } from '@reach/router'
import "./Header.css"

export class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.showSearch = this.showSearch.bind(this);
    }


    showSearch() {

        document.getElementById("search").style.display = "block";
        document.getElementById("sicon").style.display = "none";
    }

    render() {
        return (
            <div className="Header">
                <div className="section_one">ShoeMe</div>
                <div className="section_search">
                    <input id="search" style={{ display: "none" }} type="search" placeholder="search for shoe" />
                </div>
                <div className="section_two">
                    <span>
                        <i id="sicon" className="fas fa-search" onClick={this.showSearch}></i></span>
                    <Link to="/">
                        <span ><i className="fas fa-home" ></i></span>
                    </Link>
                    <Link to="/user">
                        <span> <i className="fas fa-user"></i></span>
                    </Link>
                    <Link to="/cart">
                        <span><i className="fas fa-shopping-cart"></i></span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header
