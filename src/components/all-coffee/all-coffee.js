// import { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Search from '../search/search';
import Filter from '../filter/filter';
import Card from '../card/card';

import './all-coffee.scss';


const AllCoffee = ({coffeeCards, onFilterSelect, filter, searchItem}) => {

    let clazz = 'coffee-card';

    const AllCoffeeCards = coffeeCards.map(({name, cost, src, alt, link, country, id}) => {
        return (
            <Card name={name} cost={cost + "$"} src ={src} alt={alt} key={id} className={clazz} link={link} country={country} />
        )
    });

    const Nothing = <span className="all-coffee-nothing">Совпадений не найдено</span>;

    const AllCoffeeCardsResult = AllCoffeeCards.length === 0 ? Nothing : AllCoffeeCards;

    
    return(
        <section className= "all-coffee">
            <Container>
                <Row>
                    <Col>
                        <div className="all-coffee-filters d-flex justify-content-evenly  align-items-center flex-wrap">
                            <Search 
                                searchItem = {searchItem}/>
                            <Filter 
                                filter = {filter}
                                onFilterSelect = {onFilterSelect} />
                        </div>
                        <div className="all-coffee-wrap col-lg-8 d-flex justify-content-evenly  align-items-center flex-wrap">
                            {AllCoffeeCardsResult}
                        </div>
                        
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default AllCoffee;