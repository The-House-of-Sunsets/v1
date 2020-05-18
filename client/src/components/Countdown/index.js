import React from 'react'
import Countdown from 'react-countdown';

const CountdownTimer =  () => {
    return (
        <div className="countdownTimer">
            <Countdown date={"2020-05-22T18:30:00"} />
        </div>
    )
}
export default CountdownTimer;