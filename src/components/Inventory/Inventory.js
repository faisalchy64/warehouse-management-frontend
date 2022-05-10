import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemCard from "../ItemCard/ItemCard";

function Inventory() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/items")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <section className="my-5">
            <h1 className="text-center text-danger mb-4">Inventory Items</h1>
            <Container>
                <Row className="g-4">
                    {items.map((item) => (
                        <Col key={item._id} lg="4" md="6">
                            <ItemCard item={item} />
                        </Col>
                    ))}
                </Row>

                <button className="d-block my-5 mx-auto btn btn-lg btn-warning">
                    Manage Inventories
                </button>
            </Container>
        </section>
    );
}

export default Inventory;
