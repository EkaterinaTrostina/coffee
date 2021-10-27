import Navi from '../navi/navi';
import Divider from '../divider/divider';
import {Container, Row, Col} from 'react-bootstrap';

import './footer.scss';

const Footer = () => {
    return (
        <footer className= 'footer'>
            <Container>
                <Row>
                    <Col>
                        <Navi secondary center/>
                    
                        <Divider secondary/>
                    
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;