import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// components
import MoviesList from './MoviesList'
import Landing from './Landing'
import AddMovie from './AddMovie'

class AppNavbar extends Component {
    state = {
        isOpen: false
    } 
    
    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <Router>
                <div className="AppNavbar">
                    <Navbar sticky="top" color="dark" dark expand="sm" className="mb-5">
                        <Container>
                            <NavbarBrand href="/">Movies App</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <Link to="/" className="nav-link">Home</Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to="/movies" className="nav-link">Movies List</Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to="/create" className="nav-link">Add Movie</Link>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="https://github.com/pdeppen">Github</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                        </Container>
                    </Navbar>
                    <Route path="/" exact component={Landing} />
                    <Route path="/movies" component={MoviesList} /> 
                    <Route path="/create" component={AddMovie} /> 
                </div>
            </Router>
        )
    }
}

export default AppNavbar