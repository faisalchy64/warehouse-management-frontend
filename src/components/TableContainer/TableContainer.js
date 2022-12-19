import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import TableItem from "../TableItem/TableItem";
import Loading from "../Loading/Loading";

function TableContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://warehouse-website-backend.onrender.com/items")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, [items]);

    if (items.length === 0) {
        return <Loading />;
    }

    return (
        <Table id="table" striped bordered hover variant="dark">
            <thead className="text-center">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {items.map((item) => (
                    <TableItem key={item._id} item={item} />
                ))}
            </tbody>
        </Table>
    );
}

export default TableContainer;
