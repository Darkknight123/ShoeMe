import React, { Component } from 'react'
import { Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import "./Slider.css"

export class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slideImages: [
                "images/andres-jasso-PqbL_mxmaUE-unsplash.jpg",
                "images/hermes-rivera-OX_en7CXMj4-unsplash.jpg",
                "images/revolt-164_6wVEHfI-unsplash.jpg",
                "images/radek-skrzypczak-WlB8TsI_th0-unsplash.jpg",
                "images/maksim-larin-ezdrvzA1hZw-unsplash.jpg",
            ]
        }
    }

    render() {
        const { slideImages } = this.state
        const properties = {
            duration: 1000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
        }
        return (
            <div className="slide-container">
                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                            <span>Online store with</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                            <span>Most affordable</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                            <span>Quality shoes</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[3]})` }}>
                            <span>Just ShoeMe!</span>
                        </div>
                    </div>
                </Slide>
            </div>
        )
    }
}

export default Slider
