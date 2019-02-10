import React, { Component } from 'react'
import { 
    Container, Row, Col, 
    ListGroup, ListGroupItem, 
    Button, 
    Table, 
    Modal, ModalHeader, ModalBody, ModalFooter, 
    Label, Input } from 'reactstrap'
import Api from '../services/Api'

class MoviesList extends Component {

    state = {
        movies:[],
        tableView: true,
        showModal: false
    }

    componentDidMount() {
        Api().get('movies')
            .then(res => this.setState({movies: res.data}))
            .catch(err => console.log(err))
    }   

    onTableClick() {
        this.setState({tableView: !this.state.tableView})
    }

    onSortClick() {
        this.setState({showModal: !this.state.showModal})
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

        const sortByModal = 
            <Modal isOpen={this.state.showModal}>
                <ModalHeader toggle={() => this.onSortClick()}>Sort By:</ModalHeader>
                <ModalBody>
                <Label for="exampleSelect">Options</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>Title</option>
                    <option>Rating</option>
                    <option>Date Added</option>
                    <option>Year</option>
                    <option>Genre</option>
                </Input>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => this.onSortClick()} color="primary">Select</Button>
                </ModalFooter>
            </Modal>

        return(
            <Container>
                <Row>
                    <Col><h3>Movies List</h3></Col>
                </Row>
                <Row>
                    <Col>
                        <Button 
                            onClick={() => this.onTableClick()} 
                            color="info"
                        >
                        {buttonTitle}
                        </Button>
                        <Button 
                            onClick={() => this.onSortClick()}
                            style={{marginLeft: '5px'}} 
                        >
                        Sort By:
                        </Button>
                    </Col>
                </Row>
                {movies}
                {sortByModal}
            </Container>
        )
    }
}

export default MoviesList