import React, { Component } from 'react'
import { Alert, Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddMovie extends Component {

    state = {
        years: [],
        genres: ['Action','Adventure', 'Comedy', 'Crime', 'Drama',
                 'Fantasy', 'Historical', 'Horror', 'Mystery', 
                 'Romance', 'Science Fiction', 'Thriller', 'Western'],
        ratings: [1,2,3,4,5,6,7,8,9,10],
        movie_title: "",
        movie_year: 2019,
        movie_genre: 'Action',
        watched: false,
        movie_rating: null,
        movie_director: "",
        showAlert: false
    }

    componentDidMount() {
        this.addYears()
    }

    addYears() {
        let tempYears = []
        let index = 0
        for (let i = 2019; i >= 1960; i--)
        {
            tempYears[index] = i
            index++
        }

        this.setState({years: tempYears})
    }

    onTitleChange = (e) => {
        this.setState({movie_title: e.target.value})
    }

    onYearChange = (e) => {
        this.setState({movie_year: e.target.value})
    }

    onGenreChange = (e) => {
        this.setState({movie_genre: e.target.value})
    }

    onWatchedChange = (e) => {
        // convert to boolean
        const tmpWatched = e.target.value === "true" ? true : false
        this.setState({watched: tmpWatched})

        tmpWatched ? this.setState({movie_rating: 1}) : this.setState({movie_rating: null})
    }

    onRatingChange = (e) => {
        this.setState({movie_rating: e.target.value})
    }

    onDirectorChange = (e) => {
        this.setState({movie_director: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        this.setState({showAlert: true})
        console.log(
            "Movie Title: " + this.state.movie_title +
            "\nMovie Year: " + this.state.movie_year +
            "\nMovie Genre: " + this.state.movie_genre +
            "\nWatched: " + this.state.watched + 
            "\nRating: " + this.state.movie_rating + 
            "\nDirector: " + this.state.movie_director
        )

        this.setState({
            movie_title: "",
            movie_genre: "Action",
            movie_year: 2019,
            watched: false
        })
    }

    onAlertDismiss = () => {
        this.setState({showAlert: false})
    }

    render() {

        const successfulSubmit = <Alert isOpen={this.state.showAlert} toggle={this.onAlertDismiss} fade color = "primary">Movie Added</Alert> 
        
        const showRating = this.state.watched ? 
            <FormGroup row>
                <Label sm={2}>Rating</Label>
                <Col sm={10}>
                    <Input type="select" value={this.state.movie_rating} onChange={this.onRatingChange}>
                    {this.state.ratings.map((rating) => (
                        <option key={rating} value={rating}>{rating}</option>
                    ))}
                    </Input>
                </Col>
            </FormGroup>
            :
            <div></div>

        return (
            <Container>
                {successfulSubmit}
                <Row><Col><h3>Add Movie: </h3></Col></Row>
                <Form>
                    <FormGroup row>
                        <Label sm={2}>Movie Title</Label>
                        <Col sm = {10}>
                            <Input onChange={this.onTitleChange}  type="text" placeholder="Movie Title" value={this.state.movie_title} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Director</Label>
                        <Col sm={10}>
                            <Input onChange={this.onDirectorChange} type="text" placeholder="Director" value={this.state.movie_director} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Year</Label>
                        <Col sm = {10}>
                            <Input type="select" value={this.state.year} onChange={this.onYearChange}>
                            {this.state.years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Genre</Label>
                        <Col sm={10}>
                            <Input type="select" value={this.state.genre} onChange={this.onGenreChange}>
                                {this.state.genres.map((genre) => (
                                    <option key={genre} value={genre}>{genre}</option>
                                ))}
                            </Input>
                        </Col>
                    </FormGroup>
                    {showRating}
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label col-sm-2">Watched</legend>
                        <Col sm={10}>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio2" value={true} onChange={this.onWatchedChange}/>{' '}
                                Yes
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio2" value={false} onChange={this.onWatchedChange}/>{' '}
                                No
                            </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <Button block color="primary" onClick={this.onFormSubmit}>Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default AddMovie