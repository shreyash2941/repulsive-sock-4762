import React from 'react'

const UseRefPlayer = () => {
    const handlePlay = () =>{};
    const handlePause = () =>{};
  return (
    <>
        <div className="grid-btn">
            <button className="btn" onClick={handlePlay}>Play</button>
            <button className="btn-pause" onClick={handlePause}>Pause</button>
        </div>
        <video>
            <source src=""/>
        </video>
    </>
  )
}

export default UseRefPlayer;