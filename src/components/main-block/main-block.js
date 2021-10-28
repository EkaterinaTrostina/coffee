import Navi from '../navi/navi';
import Divider from '../divider/divider';

import {Container, Row, Col} from 'react-bootstrap'

import './main-block.scss';
import '../../base/generic.scss';

const MainBlockHomePage = () => {
    return (
        <section className= 'main-block'>
            <Container>
                <Row>
                    <Col>
                        <Navi/>
                        <h1>Everything You Love About Coffee</h1>
                        <Divider/>
                        <h2>We makes every day full of energy and taste</h2>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
};

const MainBlock = () => {
    return (
        <section className= 'main-block-our-coffee'>
            <Container>
                <Row>
                    <Col>
                        <Navi/>
                        <h1>Our Coffee</h1>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
}

export default MainBlockHomePage;

export {MainBlock};