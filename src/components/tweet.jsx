import photo from '../images/tweet-profile-photo.png';


import button1 from '../images/button1.png';
import button2 from '../images/button2.png';
import button3 from '../images/button3.png';
import button4 from '../images/button4.png';


import bien from '../images/bien.png'
import tweetImage from '../images/tweet-image.png'
import Tweetaction from './Tweetaction';
import {users} from '../models/Users.js'

import { Link } from 'react-router-dom';

function Tweet({tweet}){


  const iduser = tweet.userId ;

  const userX = users.find((user)=> user.userId == iduser);

    return(

        <div className="tweets">
        <div className="tweet">
        
          <div className="tweet-avatar"><Link to={`/${userX.Author}`}><img src={userX.avatar} alt="tweet avatar" /></Link></div>

          <div className="tweet-content">
              <div className="tweet-body">
                 <div className="tweet-title">
                  <div className="tweet-title-author">{userX.Author}</div>
                  <div className=''>{userX.compteCertif && <img src={bien} alt="Certification Icone" /> }</div>
                  <div className='tweet-title-details'>
                    <span>{userX.Pseudo} </span>
                    <span>.</span>
                    <span> {tweet.tweetTimer}</span>
                  </div>
                 
                 </div>
                 <div className="tweet-text"><p>{tweet.tweetText}</p></div>
                 <div className="tweet-image">{ tweet.tweetImage !="" && <img src={tweet.tweetImage} alt="Image du Tweet"/>}</div>
              </div>

                 
              <div className="tweet-actions">
                  <Tweetaction icon={button1} number={tweet.tweetMessageNbre}/>
                  <Tweetaction icon={button2} number={tweet.tweetActualNbre}/>
                  <Tweetaction icon={button3} number={tweet.tweetLikeNbre}/>
                  <Tweetaction icon={button4} />
              </div>
            
          </div>

        </div>
        

      </div>
    );
}

export default Tweet;