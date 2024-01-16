import React from 'react'
import {users} from '../models/Users'
import bien from '../images/bien.png'

function Whotofollow() {
    
  return (
    <div className='trendsforyou'>
        <h3>Who to follow</h3>
        {users.slice(0, 3).map((follow, index) =>(
            <div key={index}>
                <div className='trendsforyou-content'>
                    <img className='trendsforyou-avatar' src={follow.avatar} alt="" />
                    <div className='trendsforyou-text'>
                        <div>
                            <h4>{follow.Author} </h4>
                            {follow.compteCertif && <img src={bien} alt="Certification Icone" />}
                           
                        </div>
                        <p>{follow.Pseudo} </p>
                    </div>
                </div>
                <button>Follow</button>
            </div>
        ))}
    </div>
  )
}

export default Whotofollow