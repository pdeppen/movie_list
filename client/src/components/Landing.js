import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Landing extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col><h2>Welcome to your Movies App!</h2></Col>
                </Row>
            </Container>
        )
    }
}

export default Landing