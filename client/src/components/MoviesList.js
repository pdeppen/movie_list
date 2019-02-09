import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'reactstrap'
import Api from '../services/Api'

class MoviesList extends Component {

    state = {
        movies:[]
    }

    componentDidMount() {
        Api().get('movies')
            .then(res => this.setState({movies: res.data}))
            .catch(err => console.log(err))
    }   

    onTableClick() {
        alert('Table View Not Yet Supported')
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col><h3>Movies List</h3></Col>
                </Row>
                <Row>
                    <Col><Button onClick={() => this.onTableClick()} color="info">Table View</Button></Col>
                </Row>
                <ListGroup>
                        {this.state.movies.map((movie) => (
                            <ListGroupItem key={movie._id} style={{backgroundColor:"lightgray"}}>
                                {movie.movie_title}
                            </ListGroupItem>
                        ))}
                </ListGroup>
            </Container>
        )
    }
}

export default MoviesList