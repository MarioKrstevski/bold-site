import React, {useState} from 'react';

const Toggle = () => {

    const [turnedOn, setTurnedOn] = useState(true);

return (
    <div>
        {turnedOn ? (
            <p>The thing is turned on</p>
        ) : (
            <h1>The thing is turned OFF</h1>
        )}

        <button onClick={() => setTurnedOn(!turnedOn) }> Change state</button>
    </div>
)

    
}

export default Toggle;