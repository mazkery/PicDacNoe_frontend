import { React, useState, useEffect } from "react";
import Countdown from 'react-countdown-now';

export default function CountDown() {
    const [interval, setInterval] = useState(10000);
    const [restart, setRestart] = useState(true);
    const renderer = ({ seconds, completed }) => {
        if (seconds === 0) {
            setRestart(!restart);
        }
        return <div className="countdown">{seconds}</div>
    }
    return (
        <Countdown date={Date.now() + interval}
            intervalDelay={0}
            autoStart={true}
            renderer={renderer}
        />
    )
}