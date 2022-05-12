import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import MyItem from "../../components/MyItem/MyItem";
import auth from "../../firebase";
const axios = require("axios").default;

function MyItems() {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getItems = async () => {
            const { data } = await axios.get(
                `http://localhost:5000/myitems?email=${user.email}`,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            );

            setItems(data);
        };

        getItems();
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
