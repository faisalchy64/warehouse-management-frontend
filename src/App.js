import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import About from "./pages/About/About";
import AddInventoryItem from "./pages/AddInventoryItem/AddInventoryItem";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ManageInventory from "./pages/ManageInventory/ManageInventory";
import MyItems from "./pages/MyItems/MyItems";
import NotFound from "./pages/NotFound/NotFound";
import ResetPass from "./pages/ResetPass/ResetPass";
import Signup from "./pages/Signup/Signup";

function App() {
    return (
        <div className="text-danger">
            <Header />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="/inventory/:id"
                    element={
                        <RequireAuth>
                            <ItemDetail />
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/manageinventory"
                    element={
                        <RequireAuth>
                            <ManageInventory />
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/addinventoryitem"
                    element={
                        <RequireAuth>
                            <AddInventoryItem />
                        </RequireAuth>
                    }
                ></Route>

                <Route
                    path="/myitems"
                    element={
                        <RequireAuth>
                            <MyItems />
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/blogs" element={<Blogs />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/resetpassword" element={<ResetPass />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default App;
