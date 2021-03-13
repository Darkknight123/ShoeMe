import React, { Component } from 'react'
export class Contact extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                   
          <card>
            <cardImg top width="100%" src="https://storage.ws.pho.to/s2/43ad96fd68ac112f9388ca796a6c516ec9c6ce52_m.jpeg" alt="avatar"></cardImg>
                <cardblock>
                  <cardtitle>
                      Washington Omondi
                   </cardtitle>
                  <cardsubtitle>
                      Email:
                  </cardsubtitle>
                  <cardsubtitle>
                      PhoneNumber:
                  </cardsubtitle>
                </cardblock>
        </card>
            </div>
        )
    }
}

export default Contact

