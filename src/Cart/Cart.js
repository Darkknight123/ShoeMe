import React, { Component } from 'react'
import './Cart.css'
class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: ""
        }
    }

    render() {
        return (
            <div className="wrapper">
                <table>
                    <thead>
                        <tr>
                            <td>Image</td><td>Description</td><td>Quantity</td><td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="" alt="avator" /></td><td>Timberlands Ksh 5500</td><td>2</td>
                            <td>
                                <button>+</button>
                                <button>-</button>
                                <button><i className="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="checkout">
                    <div>Quantity: 3</div>
                    <div>Total Amount: 6000.00</div>
                    <hr/>
                    <div className="checkout-button-wrapper">
                        <button>checkout</button>
                        <button>cancel</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Cart
