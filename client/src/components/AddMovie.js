import React, { Component } from 'react'
import { Alert, Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddMovie extends Component {

    state = {
        years: [],
        genres: ['Action','Adventure', 'Comedy', 'Crime', 'Drama',
                 'Fantasy', 'Historical', 'Horror', 'Mystery', 
                 'Romance', 'Science Fiction', 'Thriller', 'Western'],
        movie_title: "",
        movie_year: 2019,
        movie_genre: 'Action',
        watched: false,
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
        this.setState({watched: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        this.setState({showAlert: true})
        console.log(
            "Movie Title: " + this.state.movie_title +
            "\nMovie Year: " + this.state.movie_year +
            "\nMovie Genre: " + this.state.movie_genre +
            "\nWatched: " + this.state.watched
        )
    }

    onAlertDismiss = () => {
        this.setState({showAlert: false})
    }

    render() {

        const successfulSubmit = <Alert isOpen={this.state.showAlert} toggle={this.onAlertDismiss} fade color = "primary">Movie Added</Alert> 
        
        return (
            <Container>
                <Row><Col><h3>Add Movie: </h3></Col></Row>
                <Form>
                    <FormGroup row>
                        <Label sm={2}>Movie Title</Label>
                        <Col sm = {10}>
                            <Input onChange={this.onTitleChange}  type="text" placeholder="Movie Title" value={this.state.movie_title} />
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
                    <FormGroup row tag='fieldset'>
                        <legend className='col-form-label col-sm-2'>Watched</legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input type='radio' value={false} onChange={this.onWatchedChange}/>{' '}
                                    Yes
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type='radio' value={true} onChange={this.onWatchedChange}/>{' '}
                                    No
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Button color="primary" onClick={this.onFormSubmit}>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
                {successfulSubmit}
            </Container>
        )
    }
}

export default AddMovie