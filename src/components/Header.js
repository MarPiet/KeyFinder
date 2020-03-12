import React from 'react';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


class Header extends React.Component{




    handleClick(value){
        this.props.changePage(value)
    }


    render(){
        return( 
            <div>
                <Navbar id = "navbar" bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="#" onClick = {() => this.handleClick(0)}>Key Finder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" id="navbar-auto">
                            <Nav.Link onClick = {() => this.handleClick(0)}href="#Notes">Notes</Nav.Link>
                            <Nav.Link onClick = {() => this.handleClick(1)}href="#Frets">Frets</Nav.Link>
                            <Nav.Link onClick = {() => this.handleClick(2)}href="#Scales">Scales</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}


export default Header