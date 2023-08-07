import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase";
import ActiveLink from "../ActiveLink/ActiveLink";

function Header() {
    const [user, loading] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <Navbar bg="light" expand="md" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h3 className="mb-0 fw-bold text-danger">FruitMart</h3>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="nav-menu"></Navbar.Toggle>

                <Navbar.Collapse id="nav-menu">
                    <Nav className="ms-auto">
                        <ActiveLink to="/">Home</ActiveLink>
                        {/* <ActiveLink to="/blogs">Blogs</ActiveLink> */}
                        <ActiveLink to="/about">About</ActiveLink>
                        {loading ? null : user ? (
                            <>
                                <ActiveLink to="/manageinventory">
                                    Manage Item
                                </ActiveLink>
                                <ActiveLink to="/addinventoryitem">
                                    Add Item
                                </ActiveLink>
                                <ActiveLink to="/myitems">My Items</ActiveLink>

                                <button id="signout" onClick={handleSignOut}>
                                    Signout
                                </button>
                            </>
                        ) : (
                            <>
                                <ActiveLink to="/login">Login</ActiveLink>
                                <ActiveLink to="/signup">Signup</ActiveLink>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
