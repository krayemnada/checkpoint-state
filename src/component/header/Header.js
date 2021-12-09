import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import "./Header.css"
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Account</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
     
    </Nav>
    <Nav>
      
      <Button eventKey={2} href="#memes" className='but'>
        Log Out
      </Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header

