import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { FaTwitter } from "react-icons/fa";
import {users} from "../models/Users.js"



function Navbar() {
    const singleUser = users.find((user) => user.isLogin === true);

    return (
        <nav>
        <ul className="nav-sidebar">

                <li><FaTwitter /></li>
                <Link to={"/"} className="profilLink">
                <li><i className="bi bi-house-heart-fill"></i>  Home</li>
                </Link >
                <li><i className="bi bi-eye"></i>  Explore</li>
                <li><i className="bi bi-bell"></i>  Notifications</li>
                <li><i className="bi bi-envelope"></i>  Messages</li>
                <li><i className="bi bi-bookmark"></i>  BookMarks</li>
                <li><i className="bi bi-card-list"></i>  Lists</li>
                <Link to={`/${singleUser.Author}`} className="profilLink">
                <li><i className="bi bi-person"></i>  Profil</li>
                </Link>
                <li><i className="bi bi-three-dots"></i>  More</li>

                <button className='button'>Tweet</button>
        </ul>
        </nav>

    )
   

}

export default Navbar;