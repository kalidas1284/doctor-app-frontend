import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

  import './Header.css'

function Header() {
  return (
    <div>
    <Navbar className='Navbar' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa fa-user-md text-light " aria-hidden="true"> </i>
          <h4 className='my-2 mx-2'> V Cure </h4>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='text-light' href="#home">Find Doctors</Nav.Link>
            <Nav.Link className='text-light' href="#features">Consult Doctors</Nav.Link>
            <Nav.Link className='text-light' href="#pricing">Medicines</Nav.Link>
            <Nav.Link className='text-light' href="#pricing">Lab Tests</Nav.Link>
          </Nav>
          <div className='text-light '>
            <Button  className='mx-2' type="button" class="btn  text-primary fw-bold" > <i class=""></i>Login
            </Button>
            <Button className='mx-2'  type="button" class="btn  text-primary fw-bold" ><i class=""></i>Register</Button>
            </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

