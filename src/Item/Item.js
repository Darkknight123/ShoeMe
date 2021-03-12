import React, { Component } from 'react'
import "./Item.css"

export class Item extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

             image:this.props.image
        }
    }
    

    render() {
        const{image}=this.state
        return (
            <div style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",marginBottom:"50px",marginTop:"",backgroundColor:"black",height:"90vh",backgroundImage:image}}>
                    {/* <div className="arrows" style={{width:"5%"}}><i className="fas fa-chevron-left fa-3x"></i></div> */}
                    <img src={image} alt="avator" style={{width:"100%"}}></img>
                    {/* <div className="arrows" style={{width:"5%"}}><i className="fas fa-chevron-right fa-3x"></i></div> */}
            </div>
        )
    }
}

export default Item
