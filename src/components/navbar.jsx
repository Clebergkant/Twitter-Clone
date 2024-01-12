import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { FaTwitter } from "react-icons/fa";


function Navbar() {

    return (
        <nav>
        <ul class="nav-sidebar">
                <li><FaTwitter /></li>
                <li><i className="bi bi-house-heart-fill"></i>  Home</li>
                <li><i className="bi bi-eye"></i>  Explore</li>
                <li><i className="bi bi-bell"></i>  Notifications</li>
                <li><i className="bi bi-envelope"></i>  Messages</li>
                <li><i className="bi bi-bookmark"></i>  BookMarks</li>
                <li><i className="bi bi-card-list"></i>  Lists</li>
                <li><i className="bi bi-person"></i>  Profile</li>
                <li><i className="bi bi-three-dots"></i>  More</li>
                <button className='button'>Tweet</button>
        </ul>
        </nav>

    )

}

export default Navbar;