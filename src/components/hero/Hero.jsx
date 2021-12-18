import { Container, Col } from 'reactstrap'
import './hero.css'

export default function Hero(props) {
    return (
        <div>
            <header className="headerAge">
                <Container>
                    <Col sm='6' md='12' lg='8'>
                        <h4 className="__title"> {props.page} </h4>
                        <p> {props.text} </p>
                    </Col>
                </Container>                
            </header>
        </div>
    )
}
