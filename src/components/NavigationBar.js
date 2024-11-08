import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Exercise 5 Added Navigation Bar
const NavigationBar = () => {
  return (
        	/*Background dark and adds dark theme */
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            {/* Creates NavBar */}
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                {/* Link to HomePage */}
              <Nav.Link href="/home">Home</Nav.Link>
              {/* Link to CreatePage */}
              <Nav.Link href="/create">Create</Nav.Link>
              {/* Link to ReadPage */}
              <Nav.Link href="/read">Read</Nav.Link>             
            </Nav>
          </Container>
      </Navbar>
  );
};
// this gets called in app.js to use navbar template
export default NavigationBar;