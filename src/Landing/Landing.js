import React, { Component } from 'react'
import Contact from '../Contact/Contact'
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
                { name: "Sneeker", price: "1500.00", color: "black", image: "images/canvas.jpg" },
                { name: "shoe", price: "2000.00", color: "mixed", image: "shoes/erik-mclean-ByjIzFupcHo-unsplash.jpg" },
                { name: "shoe", price: "4000.00", color: "mixed", image: "shoes/lefteris-kallergis-j1GiPlvSGWI-unsplash.jpg" },
                { name: "shoe", price: "2000.00", color: "mixed", image: "shoes/paul-volkmer-updW-QUccFE-unsplash.jpg" }

            ],
            trending: [
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/90/788302/1.jpg?8598" },
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ae01.alicdn.com/kf/Hd2bc0ae2d9b74250ba0fd357f16b607bu.jpg" },
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ae01.alicdn.com/kf/Hdadd755f08aa4a1585117d744cfb67c2O.jpg" },
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ae01.alicdn.com/kf/H705c9c301c74478faf464f5ccceb1a30Z.jpg?width=800&height=800&hash=1600" },
                { name: "Sneeker", price: "1500.00", color: "black", image: "https://ae01.alicdn.com/kf/H705c9c301c74478faf464f5ccceb1a30Z.jpg?width=800&height=800&hash=1600" },
                { name: "ladies shoe", price: "2000.00", color: "mixed", image: "shoes/one.jpg" },
                { name: "ladies shoe", price: "3000.00", color: "mixed", image: "shoes/two.jpg" },
                { name: "ladies shoe", price: "2500.00", color: "mixed", image: "shoes/three.jpg" }
            ],
            Developer: [
                { name: "Washie", image: "developers/Washington.jpg" },
                { name: "Hitman", image: "developers/hitman.jpeg" },
                { name: "Brian", image: "developers/Brian.jpeg" },
                { name: "Kerry", image: "developers/Kerry.jpeg" },
                { name: "Pete", image: "developers/pete.jpeg" }
            ]
        }
    }

    render() {
        return (
            <div className="landing">
                <Slider />
                <div style={{ fontWeight: "900", fontSize: "30px", color: "" }}>Trending</div>

                <div className="slides">
                    {this.state.trending.map((shoe, index) => (<ItemWrapper key={index} name={shoe.name} price={shoe.price} color={shoe.color} image={shoe.image} />))}
                </div>

                <div style={{ fontWeight: "900", fontSize: "30px", color: "" }}>Featured</div>

                <div className="slides" >
                    {this.state.data.map((shoe, index) => (<ItemWrapper key={index} name={shoe.name} price={shoe.price} color={shoe.color} image={shoe.image} />))}
                </div>

                <div style={{ fontWeight: "900", fontSize: "30px", color: "" }}>New Arrivals</div>

                <div className="slides">
                    {this.state.data.map((shoe, index) => (<ItemWrapper key={index} name={shoe.name} price={shoe.price} color={shoe.color} image={shoe.image} />))}
                </div>


                <div className="footer">
                    <div style={{ fontWeight: "700", fontSize: "25px", color: "" }}>Developers</div>

                    <div className="contributors">
                        {this.state.Developer.map((dev, index) => (<Contact key={index} name={dev.name} price={dev.price} color={dev.Phonenumber} image={dev.image} />))}
                    </div>

                    <div className="owners">
                        All rights Reserved <br />
                        ShoeMe<br />
                        @2021
                    </div>
                </div>


            </div >
        )
    }
}

export default Landing
