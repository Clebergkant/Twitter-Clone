import React from 'react'
import { CiSettings } from "react-icons/ci";
import { squid } from '../models/Trends';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
<CiSettings />

function Trendsforyou() {
  return (
    <div className='trendsforyou'>
        <div>
            <h3>Trends for you</h3>
            <CiSettings />
        </div>
        {squid.map((squids) => (
            <div key={squids.id} className='trend-div'>
                <div>
                    <p>{squids.description}</p>
                    
<i className="bi bi-three-dots"></i>
                </div>
                <h3>{squids.pseudo} </h3>
                <p>{squids.count} </p>
            </div>
        ))}
        <h3 className='showMore'>Show more</h3>
    </div>
  )
}

export default Trendsforyou