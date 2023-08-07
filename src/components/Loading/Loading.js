import { Spinner } from "react-bootstrap";

function Loading() {
    return (
        <section className="vh-100 d-flex justify-content-center align-items-center bg-light">
            <Spinner animation="border" variant="danger" />
            <h3 className="ms-2 mb-0">Loading...</h3>
        </section>
    );
}

export default Loading;
