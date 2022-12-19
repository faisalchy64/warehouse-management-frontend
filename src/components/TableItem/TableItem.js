function TableItem({ item, items, setItems }) {
    const { _id, name, price, quantity } = item;

    const handleDelete = (id) => {
        const ensure = window.confirm("Are You Sure You Want To Delete?");

        if (ensure) {
            fetch(`https://warehouse-website-backend.onrender.com/item/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) =>
                    setItems(items.filter((item) => item._id !== _id))
                );
        }
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default TableItem;
