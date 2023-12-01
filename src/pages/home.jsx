import UserService from '../components/models/user.js';
import React from 'react';
import Header from '../components/header.jsx';
import TweetEditor from '../components/tweet-editor.jsx';
import Tweet from '../components/tweet.jsx';


function Home() {

  const data = UserService.getUser() ;
  return (
    <main className="timeline">

      <Header />
      <TweetEditor/>

      {
          data.map((a) => <Tweet user={a}/>)

      }   
    </main>
  );
}

export default Home;