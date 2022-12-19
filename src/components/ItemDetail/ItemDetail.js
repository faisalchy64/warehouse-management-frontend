import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

function ItemDetail() {
    const [item, setItem] = useState({});
    const [deliver, setDeliver] = useState(0);
    const [sell, setSell] = useState(0);
    const { id } = useParams();

    const { name, description, price, quantity, supplier, sold } = item;

    // get specific data from database

    useEffect(() => {
        fetch(`https://warehouse-website-backend.onrender.com/item/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                setDeliver(quantity);
                setSell(sold);
            });
    }, [id, quantity, sold]);

    // update a specific item delivered quantity

    const handleDeliver = () => {
        if (deliver > 0) {
            setDeliver(deliver - 1);
            setSell(sell + 1);
        } else {
            return;
        }

        const updateItem = {
            name,
            description,
            price,
            quantity,
            supplier,
            sold,
        };
        updateItem.quantity = deliver - 1;
        updateItem.sold = sell + 1;

        fetch(`https://warehouse-website-backend.onrender.com/item/${id}`, {
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

        const updateItem = {
            name,
            description,
            price,
            quantity,
            supplier,
        };
        if (input > 0) {
            updateItem.quantity = input + quantity;
            setDeliver(deliver + input);
        } else {
            return;
        }

        fetch(`https://warehouse-website-backend.onrender.com/item/${id}`, {
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

    if (!item?.img) {
        return <Loading />;
    }

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
                    <h6>Sold: {sell}</h6>

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
                        autoComplete="off"
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

            <Link className="text-decoration-none" to="/manageinventory">
                <button className="d-block my-5 mx-auto btn btn-lg btn-warning">
                    Manage Inventories
                </button>
            </Link>
        </section>
    );
}

export default ItemDetail;
