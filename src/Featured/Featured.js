import React, { Component } from 'react'

class Featured extends Component {
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
            <div style={{width:"15%",borderRadius:"5px",boxShadow:"3px 3px 2px grey",padding:"5px",textAlign:"left",float:"left",margin:"20px",background:"white"}}>
                <img src={image} alt="avator" style={{maxWidth:"100%",borderRadius:"5px"}}/>
                <div>{name}</div>
                <div>{price}</div>
                <div>{color}</div>
            </div>
        )
    }
}

export default Featured
