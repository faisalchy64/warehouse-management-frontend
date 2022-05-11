import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import TableContainer from "../../components/TableContainer/TableContainer";

function ManageInventory() {
    return (
        <main className="py-5">
            <Container className="py-5">
                <h1 className="text-center mb-4">Manage All Items</h1>
                <TableContainer />

                <Link className="text-decoration-none" to="/addinventoryitem">
                    <button className="d-block mt-5 mx-auto btn btn-lg btn-warning">
                        Add New Item
                    </button>
                </Link>
            </Container>
        </main>
    );
}

export default ManageInventory;
