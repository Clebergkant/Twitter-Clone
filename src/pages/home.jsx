import React from 'react';
import Header from '../components/header.jsx';
import avatar from '../avatar.svg';




function Home() {
  return (
    <main className="timeline">
      <Header />
      <div className="tweet-editor">
      
        <div className="avatar"><img src={avatar} alt="avatar" /></div>
        <div className="tweet-editor-form">
        
        </div>
      </div>
    </main>
  );
}

export default Home;