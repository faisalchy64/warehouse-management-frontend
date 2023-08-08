import { Button, Form } from "react-bootstrap";

function GetTouch() {
    return (
        <section id="get-touch" className="">
            <h1 className="text-white text-center pt-5">Get In Touch</h1>
            {/* <div className="text-center">
                <input type="email" placeholder="@email" />
                <button className="mt-2 text-white">Subscribe</button>
            </div> */}
            <Form className="w-50 d-none d-md-flex gap-1 mx-auto">
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                    className="w-100 py-2"
                />
                <Button className="px-4" variant="danger" type="submit">
                    Submit
                </Button>
            </Form>

            <Form className="w-75 d-flex d-md-none gap-1 mx-auto">
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                    className="w-100 py-2"
                />
                <Button className="px-2" variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </section>
    );
}

export default GetTouch;
