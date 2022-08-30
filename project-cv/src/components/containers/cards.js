import React, { Component } from 'react'
import Img from '../../assets/taolathao.jpg'
export default class Card extends Component {
    render() {
        return (

            <div className="card" style={{width: '80%'}}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator"  src={Img} />
            </div>
                    
            </div>
            
        )
    }
}
