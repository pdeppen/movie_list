import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

class Landing extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col><h2>Welcome to MoviesApp.com</h2></Col>
                </Row>
                <br />
                <Row>
                    <Col><Button color ='primary' block>Sign In</Button></Col>
                </Row>
                <br/>
                <Row>
                    <Col><Button color ='danger' block>Register</Button></Col>
                </Row>
            </Container>
        )
    }
}

export default Landing