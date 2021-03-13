import React, { Component } from 'react'
import ItemWrapper from '../ItemWrapper/ItemWrapper'
import Slider from '../Slider/Slider'
import "./Landing.css"





export class Landing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/90/788302/1.jpg?8598" },
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ae01.alicdn.com/kf/Hd2bc0ae2d9b74250ba0fd357f16b607bu.jpg" },
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ae01.alicdn.com/kf/Hdadd755f08aa4a1585117d744cfb67c2O.jpg" },
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ae01.alicdn.com/kf/H705c9c301c74478faf464f5ccceb1a30Z.jpg?width=800&height=800&hash=1600" },
                { name: "Sneeker", price: "1500.00", color: "black", image: "../convas.jpg" },
            ],
            trending: [
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/90/788302/1.jpg?8598" },
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ae01.alicdn.com/kf/Hd2bc0ae2d9b74250ba0fd357f16b607bu.jpg" },
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ae01.alicdn.com/kf/Hdadd755f08aa4a1585117d744cfb67c2O.jpg" },
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ae01.alicdn.com/kf/H705c9c301c74478faf464f5ccceb1a30Z.jpg?width=800&height=800&hash=1600" },
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ae01.alicdn.com/kf/H705c9c301c74478faf464f5ccceb1a30Z.jpg?width=800&height=800&hash=1600" },
            ],
            Developer:[
                {    name:"Washington Omondi",Email:"washingdi@gmail.com", image:"images/Washington.jpg"},
                {    name:"Washington Omondi",Email:"washingdi@gmail.com", image:"images/Washington.jpg"},
                {    name:"Washington Omondi",Email:"washingdi@gmail.com", image:"images/Washington.jpg"},
                {    name:"Washington Omondi",Email:"washingdi@gmail.com", image:"images/Washington.jpg"},
                {    name:"Washington Omondi",Email:"washingdi@gmail.com", image:"images/Washington.jpg"},
            ]
        }
    }

    render() {
        return (
            <div className="landing">
                <Slider/>
                <div style={{ fontWeight: "900", fontSize: "50px", color: "" }}>Trending</div>

                <div className="slides">
                    {this.state.trending.map((car,index) => (<ItemWrapper key={index} name={car.name} color={car.color} image={car.image} />))}
                </div>

                <div style={{ fontWeight: "900", fontSize: "50px", color: "" }}>Featured</div>

                <div className="slides" >
                    {this.state.data.map((car,index) => (<ItemWrapper key={index} name={car.name} color={car.color} image={car.image} />))}
                </div>

                <div style={{ fontWeight: "900", fontSize: "50px", color: "" }}>New Arrivals</div>

                <div className="slides">
                    {this.state.data.map((car,index) => (<ItemWrapper key={index} name={car.name} color={car.color} image={car.image} />))}
                </div>

                <div style={{ fontWeight: "900", fontSize: "50px", color: "#0086c3" }}>Brands</div>

                <img src="https://www.top10onlinebuy.com/wp-content/uploads/2019/02/top-10-shoe-brands.jpg" alt="avator" style={{ width: "80%" }} />
                <div style={{ fontWeight: "700", fontSize: "25px", color: "" }}>Developers</div>

            </div >
        )
    }
}

export default Landing
