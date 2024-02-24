import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Post from "./Post";
import NotFound from "./pages/Notfound"; 

const App = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="*" element={<NotFound />} /> {/* Use NotFound aqui */}
        </Routes>
    );
};

export default App;
