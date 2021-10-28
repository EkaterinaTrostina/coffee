import {Container, Row, Col} from 'react-bootstrap';
import '../../base/generic.scss';
import './our-best.scss';
import Card from '../card/card';

const OurBest = ({bestCoffeeData}) => {

    let clazz = 'best-card';

    const bestCoffee = bestCoffeeData.map(({name, cost, src, alt, link, id}) => {
        return (
            <Card name={name} cost={cost + "$"} src ={src} alt={alt} key={id} className={clazz} link={link} />
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