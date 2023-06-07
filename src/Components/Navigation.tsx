import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'


const Navigation = () => {
    return (
        <Navbar bg="light" variant="light" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">St*r Wars Wiki 💫</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Nav.Link as={NavLink} to="/search">Search</Nav.Link> */}
                        <Nav.Link as={NavLink} to="/films">Films</Nav.Link> 
                        <Nav.Link as={NavLink} to="/people">People</Nav.Link>
                        {/* <Nav.Link as={NavLink} to="/planets">Planets</Nav.Link>
                        <Nav.Link as={NavLink} to="/species">Species</Nav.Link>
                        <Nav.Link as={NavLink} to="/starships">Starships</Nav.Link>
                        <Nav.Link as={NavLink} to="/vehicles">Vehicles</Nav.Link> */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navigation
