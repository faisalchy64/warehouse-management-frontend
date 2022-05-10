import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import google from "../../images/google.png";

function AuthGoogle() {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleGoogleAuth = () => {
        signInWithGoogle();
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
