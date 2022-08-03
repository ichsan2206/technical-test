import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarUser() {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src="https://dailyspin.id/wp-content/uploads/2020/08/Logo-Baru-MLBB.jpg" style={{  maxWidth: '80px' }} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className='groupnavmenu'>
            <Nav.Link as={Link} to="/addType" style={{ color:'white' }}><button>Add Type</button></Nav.Link>
            <Nav.Link as={Link} to="/addHero" ><button>Add Heroes</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarUser;