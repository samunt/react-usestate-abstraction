import React, {useState} from 'react';

function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const [isHeartbroken, setIsHeartbroken] = useState(false);
    const toggleIsHappy = () => {
        setIsHappy(!isHappy)
    };
    const toggleIsHeartbroken = () => {
        setIsHeartbroken(!isHeartbroken)
    };
    return (
        <div>IsHappy
            <h1 onClick={toggleIsHappy}>{isHappy ? "😁":"😥"}></h1>
            <h1 onClick={toggleIsHeartbroken}>{isHeartbroken? "💔": "💗"}></h1>
        </div>
    )
}
export default Toggler;
