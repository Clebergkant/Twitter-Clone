import action1 from '../images/action1.png';
import action2 from '../images/action2.png';
import action3 from '../images/action3.png';
import action4 from '../images/action4.png';
import action5 from '../images/action5.png';
import avatar from '../images/avatar.png';

function TweetEditor() {

    return (
        <div className="tweet-editor">
      
             <div className="avatar"><img src={avatar} alt="avatar" /></div>
        
                <div className="tweet-editor-form">

                     <form>
                         <input type="text" className="tweet-editor-input" placeholder="What's Happening?" />
                    </form>

                    <div className="tweet-editor-buttons">
                      <div className="tweet-editor-actions">
                         <a href="#"><img src={action1} alt="action 1" /></a>
                       <a href="#"><img src={action2} alt="action 2"/></a>
                       <a href="#"><img src={action3} alt="action 3"/></a>
                         <a href="#"><img src={action4} alt="action 4"/></a>
                        <a href="#"><img src={action5} alt="action 5"/></a>
                      </div>
                        <a href="#"><button className="button">Tweet</button></a>
                     </div>
        
        
                </div>
         </div>

    );
}

export default TweetEditor;