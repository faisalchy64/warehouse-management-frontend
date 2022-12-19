import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading/Loading";
import MyItem from "../../components/MyItem/MyItem";
import auth from "../../firebase";
const axios = require("axios").default;

function MyItems() {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getItems = async () => {
            const { data } = await axios.get(
                `https://warehouse-website-backend.onrender.com/myitems?email=${user.email}`,
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
    }, [user.email]);

    setTimeout(() => {
        return <Loading />;
    }, 1500);

    return (
        <section className="my-5">
            <h1 className="text-center text-danger mb-4">My Items</h1>
            <Container>
                <Row className="g-4">
                    {items.map((item) => (
                        <Col key={item._id} lg="4" md="6">
                            <MyItem
                                item={item}
                                items={items}
                                setItems={setItems}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default MyItems;
