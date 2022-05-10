import { useNavigate } from "react-router-dom";

function ItemCard({ item }) {
    const { _id, name, img, description, price, quantity, supplier } = item;

    const navigate = useNavigate();

    const handleUpdate = () => {
        navigate(`/inventory/${_id}`);
    };

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

            <button
                onClick={handleUpdate}
                className="update-btn d-block btn btn-danger text-white mt-4 mx-auto"
            >
                Update
            </button>
        </div>
    );
}

export default ItemCard;
