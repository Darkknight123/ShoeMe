import React, { Component } from 'react'
import Featured from '../Featured/Featured'
import Item from '../Item/Item'
import shoe from '../canvas.jpg'

import "./Main.css"

export class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                { name: "Nissan March", price: "1.5", color: "black", image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/90/788302/1.jpg?8598" },
                { name: "Toyota Auris", price: "1.5", color: "black", image: "https://ae01.alicdn.com/kf/Hd2bc0ae2d9b74250ba0fd357f16b607bu.jpg" },
                { name: "Nissan March", price: "1.5", color: "black", image: "https://ae01.alicdn.com/kf/Hdadd755f08aa4a1585117d744cfb67c2O.jpg" },
                { name: "Nissan March", price: "1.5", color: "black", image: "https://ae01.alicdn.com/kf/H705c9c301c74478faf464f5ccceb1a30Z.jpg?width=800&height=800&hash=1600" },
                { name: "Nissan March", price: "1.5", color: "black", image: "https://ae01.alicdn.com/kf/H705c9c301c74478faf464f5ccceb1a30Z.jpg?width=800&height=800&hash=1600" },
            ],
            trending: [
                { name: "Nissan March", price: "1.5", color: "black", image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/90/788302/1.jpg?8598" },
                { name: "Toyota Auris", price: "1.5", color: "black", image: "https://ae01.alicdn.com/kf/Hd2bc0ae2d9b74250ba0fd357f16b607bu.jpg" },
                { name: "Nissan March", price: "1.5", color: "black", image: "https://ae01.alicdn.com/kf/Hdadd755f08aa4a1585117d744cfb67c2O.jpg" },
                { name: "Nissan March", price: "1.5", color: "black", image: "https://ae01.alicdn.com/kf/H705c9c301c74478faf464f5ccceb1a30Z.jpg?width=800&height=800&hash=1600" },
                { name: "Nissan March", price: "1.5", color: "black", image: "https://ae01.alicdn.com/kf/H705c9c301c74478faf464f5ccceb1a30Z.jpg?width=800&height=800&hash=1600" },
            ]

        }
    }

    render() {
        return (
            <div className="main">
                <Item image={shoe} />
                <div style={{ fontWeight: "900", fontSize: "50px", color: "" }}>Trending</div>
                <br />

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "50px", width: "100%", textAlign: "center" }}>
                    {this.state.trending.map((car) => (<Featured name={car.name} color={car.color} image={car.image} />))}
                </div>

                <div style={{ fontWeight: "900", fontSize: "50px", color: "" }}>Featured</div>
                <br />

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "50px", width: "100%", textAlign: "center" }}>
                    {this.state.data.map((car) => (<Featured name={car.name} color={car.color} image={car.image} />))}
                </div>
                <br />
                <div style={{ fontWeight: "900", fontSize: "50px", color: "" }}>New Arrivals</div>
                <br />

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "50px", width: "100%", textAlign: "center" }}>
                    {this.state.data.map((car) => (<Featured name={car.name} color={car.color} image={car.image} />))}
                </div>
                <div style={{ fontWeight: "900", fontSize: "50px", color: "#0086c3" }}>Brands</div>

                <img src="https://www.top10onlinebuy.com/wp-content/uploads/2019/02/top-10-shoe-brands.jpg" alt="avator" style={{ width: "80%" }} />

                <div style={{ backgroundColor: "black",color: "white" }}>
                    <h3>Developers</h3>
                    <div>Washington omondi</div>
                    <div>Kerry philip</div>
                    <div>Brian devid </div>
                    <div>Duncun Kiprotich</div>
                    <div>Peter Karanja</div>
                </div>
            </div >
        )
    }
}

export default Main
