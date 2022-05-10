import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase";
import ActiveLink from "../ActiveLink/ActiveLink";
import Loading from "../Loading/Loading";

function Header() {
    const [user, loading] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <Navbar bg="light" expand="sm" fixed="top" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h3 className="mb-0 text-success">FruitMart</h3>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="nav-menu"></Navbar.Toggle>

                <Navbar.Collapse id="nav-menu">
                    <Nav className="ms-auto">
                        <ActiveLink to="/">Home</ActiveLink>
                        {user ? (
                            <button id="signout" onClick={handleSignOut}>
                                Signout
                            </button>
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
