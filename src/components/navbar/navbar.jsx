import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../images/logo.svg';
import '../navbar/navbar.css';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className='background'>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" className="img-fluid logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll">
          <span className="custom-toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link className='text-white' href="#beranda">Beranda</Nav.Link>
            <Nav.Link className='text-white' href="#apaituWEF">Apa itu WEF?</Nav.Link>
            <Nav.Link className='text-white' href="#jadwal">Jadwal</Nav.Link>
            <Button variant="custom" className="daftar-btn">Daftar Sekarang</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;