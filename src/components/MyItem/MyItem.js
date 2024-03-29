function MyItem({ item, items, setItems }) {
    const { _id, name, img, description, price, quantity, supplier, sold } =
        item;

    const handleDelete = (id) => {
        const ensure = window.confirm("Are You Sure You Want To Delete");

        if (ensure) {
            fetch(`https://warehouse-website-backend.onrender.com/item/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        setItems(items.filter((item) => item._id !== id));
                    }
                });
        }
    };

    return (
        <div className="item h-100 border">
            <img src={img} alt={name} loading="lazy" />
            <div className="px-3 py-4">
                <h3>{name}</h3>
                <h6>Description: {description}</h6>
                <h6>Price: ${price}</h6>
                <h6>
                    Quantity: {quantity} {name === "Banana" ? "Dozen" : "KG"}
                </h6>
                <h6>Supplier: {supplier}</h6>
                <h6>Sold: {sold}</h6>

                <button
                    onClick={() => handleDelete(_id)}
                    className="update-btn d-block btn btn-danger text-white mt-4 mx-auto"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default MyItem;
