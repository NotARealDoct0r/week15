import React, { useState, useEffect } from 'react';

// the 2 hooks are = state + effect

export default function Hook() {
    const [isOn, setIsOn] = useState(false);
    const[clickCount, setClickCount] = useState(0);

    useEffect(() => {
        document.title = isOn ? 'ON' : 'OFF';
    });

    return (
        <div>
            <p>{isOn ? 'Yes, it is on!' : 'OFF'}</p>
            <p>Times clicked: {clickCount}</p>
            <button onClick={() => {
                setIsOn(!isOn);
                setClickCount(clickCount + 1);
            }}>Switch</button>
        </div>
    );
}