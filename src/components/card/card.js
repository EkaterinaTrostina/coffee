import { Component } from 'react';
import './card.scss';


class Card extends Component {
    constructor(props) {
        super(props)
    }
   
    render () {
        const {name, cost, src, alt, className} = this.props;

        return(
            <div className = {`card ${className}`} key={name}>
                <a href= "#"></a>
                <img src={src} alt={alt}/>
                <div>{name}</div>
                <div>{cost}</div>
            </div>
        )

    }
}

export default Card;