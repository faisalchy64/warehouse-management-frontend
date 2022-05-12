import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";

function AddInventoryItem() {
    const [user] = useAuthState(auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = user.email;
        const name = e.target.name.value;
        const img = e.target.image.value;
        const description = e.target.description.value;
        const price = parseInt(e.target.price.value);
        const quantity = parseInt(e.target.quantity.value);
        const supplier = e.target.supplier.value;

        const item = {
            email,
            name,
            img,
            description,
            price,
            quantity,
            supplier,
        };

        // post data to database

        fetch("https://agile-journey-41866.herokuapp.com/item", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((data) => null);

        e.target.reset();
    };

    return (
        <section className="form-section d-flex flex-column justify-content-center align-items-center">
            <h2 className="mb-4">Add Inventory Item</h2>
            <Form className="form border border-3 p-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter fruit name"
                        autoComplete="off"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImg">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        name="image"
                        placeholder="Enter fruit image url"
                        autoComplete="off"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        placeholder="Enter fruit description"
                        autoComplete="off"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        name="price"
                        placeholder="Enter fruit price"
                        autoComplete="off"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="text"
                        name="quantity"
                        placeholder="Enter fruit quantity"
                        autoComplete="off"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSupplier">
                    <Form.Label>Supplier</Form.Label>
                    <Form.Control
                        type="text"
                        name="supplier"
                        placeholder="Enter supplier name"
                        autoComplete="off"
                        required
                    />
                </Form.Group>

                <Button
                    className="d-block mx-auto px-5"
                    variant="dark"
                    type="submit"
                >
                    Add Item
                </Button>
            </Form>
        </section>
    );
}

export default AddInventoryItem;
