import React from "react"
import { Nav, Navbar, NavDropdown, Form, Container, FormControl, Button } from 'react-bootstrap' 

function NavbarComponent (){

    return(
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Bootstrap App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <NavDropdown title="Our Services" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Service 1</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Service 2</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Suggestion
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Contact Us
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavbarComponent