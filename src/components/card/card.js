import { Component } from 'react';
import './card.scss';


class Card extends Component {
    constructor(props) {
        super(props)
    }
   
    render () {
        const {name, cost, src, alt, className, link, country} = this.props;
        if(country) {
            return(
                <div className = {`card ${className}`} key={name}>
                    <a href= {link}></a>
                    <img src={src} alt={alt}/>
                    <div>{name}</div>
                    <div>{country}</div>
                    <div>{cost}</div>
                </div>
            )
        }
        return(
            <div className = {`card ${className}`} key={name}>
                <a href= {link}></a>
                <img src={src} alt={alt}/>
                <div>{name}</div>
                <div>{cost}</div>
            </div>
        )


    }
}

export default Card;