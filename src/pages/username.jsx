import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { GrLinkPrevious } from "react-icons/gr";
import { RxLink2 } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { RiUserFollowFill } from "react-icons/ri";
import { users } from '../models/Users';

function Username() {

    const {userName} = useParams();
    
    const singleUser = users.find((user) => user.Author == userName)
  return (
    <div className='timeline'>
        <div className="username-entete">
        <Link to={"/"} className="link-white">
          <GrLinkPrevious />
        </Link>
        <div>
          <h2>
            {singleUser.Author} <img src={singleUser.iconCertification} alt="" />
          </h2>
          <span className="username-span">posts</span>
        </div>
      </div>
      <div className="user-content">
        <img className="banner" src={singleUser.banner} alt="" />
        <div className="user-avatar">
          <img className="user-avatar" src={singleUser.avatar} alt="" />
          <div className="user-profil">
            <p><i className="bi bi-three-dots"></i> </p>
            <button className="follow">Follow</button>
          </div>
        </div>
      </div>
      <div className="user-text">
        <h2>
          {singleUser.userName} <img src={singleUser.iconCertification} alt="" />
        </h2>
        <span className="username-span">{singleUser.Pseudo} </span>
      </div>
      <p className="user-description">{singleUser.description} </p>
      <div className="user-link-content">
        <div>
          <RxLink2 />
          <span className="username-link">{singleUser.linkWeb} </span>
        </div>
        <div>
          <SlCalender />
          <span className="username-span">{singleUser.dateCreated} </span>
        </div>
      </div>
      <div className="user-abonne">
        <p>
          {singleUser.abonnemets} <span className="username-span">abonnemets</span>
        </p>
        <p>
          {singleUser.abonne} <span className="username-span">abonnés</span>
        </p>
      </div>
      <div className="user-suivi">
        <RiUserFollowFill />
        <span className="username-span">{singleUser.suiviPar} </span>
      </div>
      <ul className="user-ul">
        <li>Posts</li>
        <li>Affiliés</li>
        <li>Réponses</li>
        <li>Médias</li>
        <li>J'aime</li>
      </ul>
    </div>
  )
}

export default Username;