import img from "../../images/no-results.png";

function NotFound() {
    return (
        <section className="py-5 my-5 d-flex flex-column justify-content-center align-items-center">
            <img src={img} width="200px" alt="" />
            <h1 className="text-center mt-5">PAGE NOT FOUND 404!</h1>
        </section>
    );
}

export default NotFound;
