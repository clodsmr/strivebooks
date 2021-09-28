import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MyNav = (props) => ( 
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Strivebooks</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#link">Browse</Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
)

export default MyNav