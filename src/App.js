
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import "./app.css"
import Home from "./components/pages/home/Home";
import User from "./components/pages/user/User";
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
        {/* <Route path='/' element={<Home/>} /> */}
        
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
