import {Container, Row, Col} from 'react-bootstrap';
import Divider from '../divider/divider';

import AboutOurBeansImg from './about-our-beans.jpg';
import './our-beans.scss';
import '../../base/generic.scss';

const OurBeans = () => {
    return (
        <section className= 'our-beans'>
        <Container>
            <Row className="justify-content-center  align-items-center">
                <Col className= "col-12 col-md-4"> 
                    <img src={AboutOurBeansImg} alt={"AboutOurBeansImg"}/> 
                </Col>
                <Col className= "col-12 col-md-6">
                    <h3>About our beans</h3>
                    <Divider secondary/>
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br/> <br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                </Col>
                <div className= "our-beans-line"/>
            </Row>
        </Container>
    </section>
    )
}

export default OurBeans;