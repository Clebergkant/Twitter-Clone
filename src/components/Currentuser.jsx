import React from 'react'
import { RiLock2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {users} from "../models/Users.js";


function Currentuser() {
    const usera = users.find((user) => user.isLogin === true);

  return (
    <div className="profil">
      <Link to={`/${usera.Author}`} className="profilLink">
        <img src={usera.avatar} alt="" />
      </Link>

      <div>
            <div className="profilDiv">

                <Link to={`/${usera.Author}`} className="profilLink">
                    <p>{usera.Author} </p>
                </Link>
                <RiLock2Fill />
            </div>

             <span>{usera.Pseudo} </span>
        
      </div>

      
    </div>
  )
}

export default Currentuser