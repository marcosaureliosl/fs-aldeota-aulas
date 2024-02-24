import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Post from "./Post";

const App = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts/:id" element={<Post />} />
        </Routes>
    );
};

export default App;
