
import "./app.css"
const { default: Sidebar } = require("./components/topbar/sidebar/sidebar");
const { default: Topbar } = require("./components/topbar/Topbar");

function App() {
  return (
    <div>
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <div className="others"> other pages</div>
      
    </div>
    </div>
  );
}

export default App;
