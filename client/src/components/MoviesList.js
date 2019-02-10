import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem, Button, Table } from 'reactstrap'
import Api from '../services/Api'

class MoviesList extends Component {

    state = {
        movies:[],
        tableView: true,
    }

    componentDidMount() {
        Api().get('movies')
            .then(res => { 
                this.setState({movies: res.data}) 
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }   

    onTableClick() {
        this.setState({tableView: !this.state.tableView})
    }

    render() {

        const listView = 
            <ListGroup>
            {this.state.movies.map((movie) => (
                <ListGroupItem key={movie._id} style={{backgroundColor:"#E5E8E8"}}>
                    {movie.movie_title}
                </ListGroupItem>
            ))}
            </ListGroup>
        
        const tableView = 
            <Table responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Watched</th>
                        <th>Genre</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Your Rating</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map((movie) => (
                    <tr key={movie._id}>
                        <td>{movie.movie_title}</td>
                        <td>{movie.watched ? "Yes" : "No"}</td>
                        <td>{movie.movie_genre}</td>
                        <td>{movie.movie_year}</td>
                        <td>{movie.movie_director}</td>
                        <td>{movie.watched ? movie.movie_rating : "N/A"}</td>
                    </tr>
                ))}
                </tbody>
            </Table>

        const movies = this.state.tableView ? tableView : listView

        const buttonTitle = this.state.tableView ? "List View" : "Table View"

        return(
            <Container>
                <Row>
                    <Col><h3>Movies List</h3></Col>
                </Row>
                <Row>
                    <Col><Button onClick={() => this.onTableClick()} color="info">{buttonTitle}</Button></Col>
                </Row>
                {movies}
            </Container>
        )
    }
}

export default MoviesList