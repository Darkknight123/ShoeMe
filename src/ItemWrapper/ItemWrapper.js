import React, { Component } from 'react'
import "./ItemWrapper.css"

class ItemWrapper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            price: this.props.price,
            color: this.props.color,
            image: this.props.image
        }
    }


    render() {
        const { name, price, color, image } = this.state
        return (
            <div className="item-wrapper" style={{}}>
                <img src={image} alt="avator" style={{ maxWidth: "100%",maxHeight:"250px", borderRadius: "5px" }} />

                <div className="description-wrapper">
                    <div className="description">
                        <div>Description: {name}</div>
                        <div>Price: {price}</div>
                        <div>Color: {color}</div>
                    </div>
                    <div className="cart-button-wrapper">
                        <button>ADD TO <i className="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemWrapper
