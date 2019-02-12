import React, { Component } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddMovie extends Component {

    state = {
        years: [],
        movie_title: "",
        movie_year: 2019
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

    onFormSubmit = (e) => {
        e.preventDefault()

        console.log(
            "Movie Title: " + this.state.movie_title +
            "\nMovie Year: " + this.state.movie_year
        )
    }

    render() {
        return (
            <Container>
                <Row><h3>Add Movie: </h3></Row>
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
                            <Input type="select" name="select" value={this.state.year} onChange={this.onYearChange}>
                            {this.state.years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Button onClick={this.onFormSubmit}>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}

export default AddMovie