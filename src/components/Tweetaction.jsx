import React, { useState } from 'react'

function Tweetaction({icon, number}) {

    const [counter, setCounter] = useState(number);
    const [isCounter, setIsCounter] = useState(false);

    const handleClick = () => {
        if(isCounter){
            setCounter(counter - 1);
            setIsCounter(false);
        }else{
            setCounter(counter + 1);
            setIsCounter(true);
        }
    }
  return (
    <div onClick={handleClick} className="tweet-action">
        <img src={icon} alt="" />
        <span>{counter} </span>
    </div>
  )
}

export default Tweetaction