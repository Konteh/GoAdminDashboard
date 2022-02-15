
import "./app.css"
import Home from "./components/pages/home/Home";
const { default: Sidebar } = require("./components/topbar/sidebar/sidebar");
const { default: Topbar } = require("./components/topbar/Topbar");

function App() {
  return (
    <div>
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <Home></Home>
      
    </div>
    </div>
  );
}

export default App;
