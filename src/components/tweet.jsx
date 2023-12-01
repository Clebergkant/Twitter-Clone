import photo from '../images/tweet-profile-photo.png';


import button1 from '../images/button1.png';
import button2 from '../images/button2.png';
import button3 from '../images/button3.png';
import button4 from '../images/button4.png';


import bien from '../images/bien.png'
import tweetImage from '../images/tweet-image.png'

function Tweet({user}){

    return(

        <div className="tweets">
        <div className="tweet">

          <div className="tweet-avatar"><img src={user.tweetProfilPhoto} alt="tweet avatar" /></div>
          {console.log(user.tweetProfilPhoto)}

          <div className="tweet-content">
              <div className="tweet-body">
                 <div className="tweet-title">
                  <div className="tweet-title-author">{user.tweetAuthor}</div>
                  <div className=''>{user.compteCertif && <img src={bien} alt="Certification Icone" /> }</div>
                  <div className='tweet-title-details'>
                    <span>{user.tweetPseudo} </span>
                    <span>.</span>
                    <span> {user.tweetTimer}</span>
                  </div>
                 
                 </div>
                 <div className="tweet-text"><p>{user.tweetText}</p></div>
                 <div className="tweet-image">{ user.tweetImage !="" && <img src={user.tweetImage} alt="Image du Tweet"/>}</div>
              </div>

                 
              <div className="tweet-actions">
               
                 <a href="" className="tweet-action"><img src={button1} alt="action 1" /><span className="remover">{user.tweetMessageNbre}</span></a>
                 <a href="" className="tweet-action"><img src={button2} alt="action 2" /><span>{user.tweetActualNbre}</span></a>
                 <a href="" className="tweet-action"><img src={button3} alt="action 3" /><span>{user.tweetLikeNbre}</span></a>
                 <a href="" className="tweet-action"><img src={button4} alt="action 4" /></a>
                
              </div>
            
          </div>

        </div>
        

      </div>
    );
}

export default Tweet;