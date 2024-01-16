import TweetService from '../models/Tweet.js';
import React from 'react';
import Header from '../components/header.jsx';
import TweetEditor from '../components/tweet-editor.jsx';
import Tweet from '../components/tweet.jsx';


function Home() {

  const data = TweetService.getTweet() ;
  return (
   
    
    <main className="timeline">

      <Header />
      <TweetEditor/>

      {
          data.map((a) => <Tweet tweet={a}  key={a.id}/>)
      } 

    </main>
    
  );
}

export default Home;