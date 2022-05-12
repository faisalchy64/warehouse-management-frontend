import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import google from "../../images/google.png";
const axios = require("axios").default;

function AuthGoogle() {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleGoogleAuth = async () => {
        await signInWithGoogle();

        const email = auth.currentUser.email;

        try {
            const { data } = await axios.post(
                "https://agile-journey-41866.herokuapp.com/login",
                {
                    email,
                }
            );

            localStorage.setItem("accessToken", data);
        } catch (error) {
            console.log(error);
        }

        console.log(email);
    };

    return (
        <p
            onClick={handleGoogleAuth}
            className="with-google d-flex align-items-center my-3 px-4 py-3 border border-3"
        >
            <img src={google} alt="" />
            <span className="ms-2">Continue With Google</span>
        </p>
    );
}

export default AuthGoogle;
