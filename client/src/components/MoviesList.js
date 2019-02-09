import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'reactstrap'

class MoviesList extends Component {

    state = {
        movies:[
            {
                movie_title: "Testing Title",
                id: 1 
            }
        ]
    }

    render() {
        return(
            <Container>
                <h3>Movies List</h3>

                <ListGroup>
                        {this.state.movies.map((movie) => (
                            <ListGroupItem key={movie.id} style={{backgroundColor:"lightgray"}}>
                                {movie.movie_title}
                            </ListGroupItem>
                        ))}
                </ListGroup>
            </Container>
        )
    }
}

export default MoviesList