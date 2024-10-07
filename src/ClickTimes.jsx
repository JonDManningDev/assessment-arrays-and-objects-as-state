import React from "react";

function ClickTimes({ timestamps, setTimestamps }) {
    const handleClick = () => {
        setTimestamps([...timestamps, Date.now()]);
    };
    return <button onClick={() => {handleClick()}} role="button">Get Timestamp</button>
}

export default ClickTimes;
