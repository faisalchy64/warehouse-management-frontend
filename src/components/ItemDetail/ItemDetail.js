import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ItemDetail() {
    const [item, setItem] = useState({});
    const [deliver, setDeliver] = useState(0);
    const [stock, setStock] = useState(0);
    const { id } = useParams();

    const { name, description, price, quantity, supplier } = item;

    // get specific data from database

    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                setDeliver(quantity);
            });
    }, [id, quantity, stock]);

    // update a specific item delivered quantity

    const handleDeliver = () => {
        if (deliver > 0) {
            setDeliver(deliver - 1);
        }

        const updateItem = { name, description, price, quantity, supplier };
        updateItem.quantity = deliver - 1;

        fetch(`http://localhost:5000/item/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateItem),
        })
            .then((res) => res.json())
            .then((data) => null);
    };

    // update specific item stock quantity

    const handleStock = (e) => {
        e.preventDefault();
        const input = parseInt(e.target.quantity.value);

        if (input > 0) {
            setStock(input + quantity);
        }

        const updateItem = { name, description, price, quantity, supplier };
        updateItem.quantity = input + quantity;

        fetch(`http://localhost:5000/item/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateItem),
        })
            .then((res) => res.json())
            .then((data) => null);

        e.target.reset();
    };

    return (
        <section className="detail-section d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex bg-light p-3 border border-3">
                <img src={item.img} alt="" />
                <div className="ms-3">
                    <h1>{name}</h1>
                    <h6>Description: {description}</h6>
                    <h6>Price: {price}</h6>
                    <h6>Quantity: {deliver}</h6>
                    <h6>Supplier: {supplier}</h6>

                    <button
                        onClick={handleDeliver}
                        className="btn btn-danger text-white my-3"
                    >
                        Delivered
                    </button>
                </div>
            </div>

            <h2 className="mt-5">Restock Item</h2>
            <Form className="form border border-3 p-3" onSubmit={handleStock}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="text"
                        name="quantity"
                        placeholder="Enter quantity"
                    />
                </Form.Group>

                <Button
                    className="d-block mx-auto px-5"
                    variant="dark"
                    type="submit"
                >
                    Stock
                </Button>
            </Form>
        </section>
    );
}

export default ItemDetail;
