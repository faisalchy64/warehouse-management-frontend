import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

function ItemDetail() {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const { name, img, description, price, quantity, supplier, sold } = item;

    // get specific data from database

    useEffect(() => {
        fetch(`https://warehouse-website-backend.onrender.com/item/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                setLoading(false);
            });
    }, [id]);

    // update a specific item delivered quantity

    const handleDeliver = () => {
        if (quantity > 0) {
            fetch(`https://warehouse-website-backend.onrender.com/item/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    quantity: quantity - 1,
                    sold: sold + 1,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        setItem({
                            ...item,
                            quantity: quantity - 1,
                            sold: sold + 1,
                        });
                    }
                });
        }
    };

    // update specific item stock quantity

    const handleStock = (e) => {
        e.preventDefault();
        const input = parseInt(e.target.quantity.value);

        if (isNaN(input) === false) {
            fetch(`https://warehouse-website-backend.onrender.com/item/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ quantity: quantity + input }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.acknowledged) {
                        setItem({ ...item, quantity: quantity + input });
                    }
                });

            e.target.reset();
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <section className="detail-section d-flex flex-column justify-content-center align-items-center mx-3">
            <div className="d-md-flex bg-light border">
                <img src={img} alt={name} className="d-none d-md-block" />
                <img src={img} alt={name} className="w-100 d-md-none" />
                <div className="px-4 py-3">
                    <h1>{name}</h1>
                    <h6>Description: {description}</h6>
                    <h6>Price: {price}</h6>
                    <h6>Quantity: {quantity}</h6>
                    <h6>Supplier: {supplier}</h6>
                    <h6>Sold: {sold}</h6>

                    <button
                        onClick={handleDeliver}
                        className="btn btn-danger text-white my-3"
                    >
                        Delivered
                    </button>
                </div>
            </div>

            <h2 className="mt-5">Restock Item</h2>
            <Form className="form border p-3" onSubmit={handleStock}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="number"
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
