import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
    useAuthState,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthGoogle from "../../components/AuthGoogle/AuthGoogle";
import auth from "../../firebase";
const axios = require("axios").default;

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword, , , error] =
        useSignInWithEmailAndPassword(auth);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(email, password);

        // json web token

        const { data } = await axios.post(
            "https://agile-journey-41866.herokuapp.com/login",
            {
                email,
            }
        );

        localStorage.setItem("accessToken", data);

        console.log(data);
    };

    const navigate = useNavigate();
    const location = useLocation();
    const [user] = useAuthState(auth);

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    return (
        <section className="form-section d-flex flex-column justify-content-center align-items-center">
            <h2 className="mb-4">Login</h2>
            <Form className="form border border-3 p-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </Form.Group>

                <small className="d-block text-center my-3">
                    {error ? error.message : ""}
                </small>

                <Link to="/resetpassword" className="d-block text-center mb-3">
                    Forget Password
                </Link>

                <Link to="/signup" className="d-block text-center mb-3">
                    Create An Account
                </Link>

                <Button
                    className="d-block mx-auto px-5"
                    variant="dark"
                    type="submit"
                >
                    Login
                </Button>
            </Form>

            <AuthGoogle user={user} />
        </section>
    );
}

export default Login;
