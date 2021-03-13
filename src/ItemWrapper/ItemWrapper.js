import React, { Component } from 'react'
import "./ItemWrapper.css"

class ItemWrapper extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:this.props.name,
             price:this.props.price,
             color:this.props.color,
             image:this.props.image
        }
    }
    
    
    render() {
        const{name,price,color,image}=this.state
        return (
            <div className="item-wrapper" style={{}}>
                <img src={image} alt="avator" style={{maxWidth:"100%",borderRadius:"5px"}}/>
                <div>{name}</div>
                <div>{price}</div>
                <div>{color}</div>
            </div>
        )
    }
}

export default ItemWrapper
