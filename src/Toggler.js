import React from 'react';
import useToggle from './hooks/useToggle'
function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);
    return (
        <div>IsHappy
            <h1 onClick={toggleIsHappy}>{isHappy ? "😁":"😥"}></h1>
            <h1 onClick={toggleIsHeartbroken}>{isHeartbroken? "💔": "💗"}></h1>
        </div>
    )
}
export default Toggler;
