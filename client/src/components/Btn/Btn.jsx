import React from 'react'


const Btn = () => {
return (
<div>

    <div >
    <label for="username"></label>
    <input  className='formOne'  type="text" id="username" name="username"></input>
    </div>

    <div>
    <button className="red-button">Primary</button>
    <button className="white-button">Secondary</button>
    <button className="black-button">White</button>
    </div>

    <div>
    <button className="yes-button">Yes</button>
    <button className="no-button">No</button>
    <button className="pick-button">Pick</button>
    </div>

    <div>
    <p className='paragraph'>
        challenger league lets you challaenge players in random or draft pick games,
        connect xith nex friends , and track your match history , win rate , and champion perfermance

    </p>
    </div>
    

</div>

)
}

export default Btn