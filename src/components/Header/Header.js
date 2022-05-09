import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

function Header() {
    return (
        <Navbar bg="light" expand="sm" fixed="top" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h3 className="mb-0 text-warning">FruitMart</h3>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="nav-menu"></Navbar.Toggle>

                <Navbar.Collapse id="nav-menu">
                    <Nav className="ms-auto">
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/login">Login</ActiveLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
