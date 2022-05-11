import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import TableItem from "../TableItem/TableItem";

function TableContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/items")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, [items]);

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
