
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import "./app.css"
import Home from "./components/pages/home/Home";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
const { default: Sidebar } = require("./components/topbar/sidebar/sidebar");
const { default: Topbar } = require("./components/topbar/Topbar");

function App() {
  return (
    <BrowserRouter>
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="users/" element={<UserList />} />

        <Route path="user/:userId" element={<User/>} />
        <Route path="newUser" element={<NewUser></NewUser>} />

        <Route path="products/" element={<ProductList />} />

        <Route path="product/:productsId" element={<User/>} />
        <Route path="newproduct" element={<NewUser></NewUser>} />
        {/* <Route path='/' element={<Home/>} /> */}
        
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
