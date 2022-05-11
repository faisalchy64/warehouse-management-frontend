import { Container } from "react-bootstrap";
import TableContainer from "../../components/TableContainer/TableContainer";

function ManageInventory() {
    return (
        <main className="py-5">
            <Container className="py-5">
                <h1 className="text-center mb-4">Manage All Items</h1>
                <TableContainer />
            </Container>
        </main>
    );
}

export default ManageInventory;
