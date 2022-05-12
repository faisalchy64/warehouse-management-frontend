import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import MyItem from "../../components/MyItem/MyItem";
import auth from "../../firebase";

function MyItems() {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch("http://localhost:5000/items")
            .then((res) => res.json())
            .then((data) => {
                const filterItem = data.filter(
                    (item) => item.email === user.email
                );
                setItems(filterItem);
            });
    }, [items, user.email]);

    return (
        <section className="my-5">
            <h1 className="text-center text-danger mb-4">My Items</h1>
            <Container>
                <Row className="g-4">
                    {items.map((item) => (
                        <Col key={item._id} lg="4" md="6">
                            <MyItem item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default MyItems;
