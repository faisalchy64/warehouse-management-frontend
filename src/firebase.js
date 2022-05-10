import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB93bIWfAV1DJNQEdnnf5HW7ytvjn1mNGQ",
    authDomain: "warehouse-management-web-1178f.firebaseapp.com",
    projectId: "warehouse-management-web-1178f",
    storageBucket: "warehouse-management-web-1178f.appspot.com",
    messagingSenderId: "670579385658",
    appId: "1:670579385658:web:747a37855efe891575dc03",
};

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
