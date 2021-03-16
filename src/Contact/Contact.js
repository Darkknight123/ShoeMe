import React, { Component } from 'react'
import "./Contact.css"
export class Contact extends Component {
    constructor(props){
        super(props);
           
    this.state = {
        name:this.props.name,
        Email:this.props.Email,
        Phonenumber:this.props.Phonenumber,
        image:this.props.image
   }

    }



render() {
   const{name,Email,Phonenumber,image}=this.state
   return (
       <div className="contact-container">
           <img src={image} alt="avator" style={{maxWidth:"50px",maxHeight:"50px",borderRadius:"50%"}}/>
           <div>{name}</div>
           <div>{Email}</div>
           <div>{Phonenumber}</div>
       </div>
        )
    }
}

export default Contact

