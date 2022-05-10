import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import AuthGoogle from "../../components/AuthGoogle/AuthGoogle";

function Signup() {
    const [createUserWithEmailAndPassword, , , error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }

        console.log(email, password, confirmPassword);
    };

    return (
        <section className="form-section d-flex flex-column justify-content-center align-items-center">
            <h2 className="mb-4">Signup</h2>
            <Form className="form border border-3 p-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicConfirmPassword"
                >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        required
                    />
                </Form.Group>

                <small className="d-block text-center my-3">
                    {error ? error.message : ""}
                </small>

                <Link to="/login" className="d-block text-center mb-3">
                    Already Have An Account
                </Link>

                <Button
                    className="d-block mx-auto px-5"
                    variant="dark"
                    type="submit"
                >
                    Signup
                </Button>
            </Form>

            <AuthGoogle />
        </section>
    );
}

export default Signup;
