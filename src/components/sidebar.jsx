import Navbar from "./navbar";
import '../style/App.css'
import '../style/styles.css'
import Currentuser from "./Currentuser";


function Sidebar() {

    return (
        <div className="sidebar">
        <Navbar />
        <Currentuser/>
        </div>
            )

}

export default Sidebar;