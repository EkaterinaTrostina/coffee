import {Container, Row, Col} from 'react-bootstrap';
import '../../base/generic.scss';
import './our-best.scss';
import Card from '../card/card';

import coffee1 from './best-1.png';
import coffee2 from './best-2.png';
import coffee3 from './best-3.png';

const OurBest = () => {

    const bestCoffeeData = [
        {
            name: 'Solimo Coffee Beans 2 kg',
            cost: '10.73',
            src: coffee1,
            alt: 'Solimo Coffee Beans 2 kg'
        },
        {
            name: 'Presto Coffee Beans 1 kg',
            cost: '15.99',
            src: coffee2,
            alt: 'Presto Coffee Beans 1 kg'
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            cost: '6.99',
            src: coffee3,
            alt: 'AROMISTICO Coffee 1 kg'
        }
    ];
    let clazz = 'best-card';

    const bestCoffee = bestCoffeeData.map(({name, cost, src, alt}) => {
        return (
            <Card name={name} cost={cost + "$"} src ={src} alt={alt} key={name} className={clazz} />
        )
    });

    return (
        <section className= 'our-best'>
            <Container>
                <Row>
                    <Col>
                        <h3>Our best</h3>
                        <div className="best-cards">
                            {bestCoffee}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>     
    )
}

export default OurBest;