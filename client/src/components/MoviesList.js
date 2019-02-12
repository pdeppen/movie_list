import React, { Component } from 'react'
import { 
    Container, Row, Col, 
    ListGroup, ListGroupItem, 
    Button, 
    Table, 
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
 } from 'reactstrap'
import Api from '../services/Api'

class MoviesList extends Component {

    state = {
        movies:[],
        tableView: true,
        showDropdown: false,
        sortBy: ""    
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
        this.setState({showDropdown: !this.state.showDropdown})
    }

    compareBy(key) {
        return function (a, b) {
          if (a[key] < b[key]) return -1
          if (a[key] > b[key]) return 1
          return 0
        }
      }

    sorting (sortingValue) {
        const tempMovies = this.state.movies
        tempMovies.sort(this.compareBy(sortingValue));
        this.setState({movies: tempMovies})
    }

    render() {

        const listView = 
            <ListGroup>
            {this.state.movies.map((movie, index) => (
                index % 2 == 0 ?                    
                <ListGroupItem key={movie._id} style={{backgroundColor:"#E5E8E8"}}>
                    {movie.movie_title}
                </ListGroupItem>
                :
                <ListGroupItem key={movie._id}>
                    {movie.movie_title}
                </ListGroupItem>

            ))}
            </ListGroup>
        
        const tableView = 
            <Table  bordered striped responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Watched</th>
                        <th>Genre</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Your Rating</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map((movie, index) => (
                    <tr key={movie._id}>
                        <td>{index+1}</td>
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

        const sortByDropdown = 
            <Dropdown isOpen={this.state.showDropdown} toggle={() => this.onSortClick()}>
                <DropdownToggle caret>
                    Sort By:
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Select</DropdownItem>
                    <DropdownItem onClick={() => this.sorting("movie_title")}>Title</DropdownItem>
                    <DropdownItem onClick={() => this.sorting("movie_year")}>Year</DropdownItem>
                    <DropdownItem onClick={() => this.sorting("movie_rating")}>Rating</DropdownItem>
                    <DropdownItem onClick={() => this.sorting("movie_genre")}>Genre</DropdownItem>
                    <DropdownItem onClick={() => this.sorting("date_added")}>Date Added</DropdownItem>
                </DropdownMenu>
            </Dropdown>

        return(
            <Container>
                <Row>
                    <Col><h3>Movies List</h3></Col>
                </Row>
                <Row>
                    <Col xs="auto">
                        <Button 
                            onClick={() => this.onTableClick()} 
                            color="info"
                        >{buttonTitle}
                        </Button>
                    </Col>
                    {sortByDropdown}
                </Row>
                {movies}
            </Container>
        )
    }
}

export default MoviesList