import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPass() {
    const [sendPasswordResetEmail, , error] = useSendPasswordResetEmail(auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;

        toast.success("Email Sent", {
            position: "top-center",
            theme: "dark",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        sendPasswordResetEmail(email);
    };

    return (
        <section className="form-section d-flex flex-column justify-content-center align-items-center">
            <h2 className="mb-4">Reset Password</h2>
            <Form className="form border border-3 p-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Link to="/login" className="d-block text-center mb-3">
                    Back To Login Page
                </Link>

                <Button
                    className="d-block mx-auto px-5"
                    variant="dark"
                    type="submit"
                >
                    Reset Password
                </Button>

                <small className="d-block text-center my-3">
                    {error ? error.message : ""}
                </small>
            </Form>

            <ToastContainer />
        </section>
    );
}

export default ResetPass;
