function ItemCard({ item }) {
    const { name, img, description, price, quantity, supplier } = item;

    return (
        <div className="item border border-3 p-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h6>Description: {description}</h6>
            <h6>Price: ${price}</h6>
            <h6>
                Quantity: {quantity} {name === "Banana" ? "Dozen" : "KG"}
            </h6>
            <h6>Supplier: {supplier}</h6>

            <button className="update-btn d-block btn btn-danger text-white mt-4 mx-auto">
                Update
            </button>
        </div>
    );
}

export default ItemCard;
