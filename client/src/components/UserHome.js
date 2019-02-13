import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class UserHome extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col><h2>Welcome to your Movies App!</h2></Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/movies"><Button>Your Movies</Button></Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/create"><Button>Add Movie</Button></Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UserHome