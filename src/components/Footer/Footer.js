import copyright from "../../images/copyright.png";

function Footer() {
    return (
        <footer className="py-5 text-center">
            <p className="text-dark mb-0">
                Copyright <img src={copyright} width="20px" alt="" />{" "}
                {new Date().getFullYear()}
                <span className="text-danger mx-1">FruitMart</span>
                All Right Reserved.
            </p>
        </footer>
    );
}

export default Footer;
