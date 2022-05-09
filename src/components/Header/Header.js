import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar bg="light" expand="sm" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h3 className="mb-0 text-warning">FruitMart</h3>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="nav-menu"></Navbar.Toggle>

                <Navbar.Collapse id="nav-menu">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
