import React from 'react'
import './style.css'
const Calendar = () => {
    return (
        <>
            <div id="eventCal" className="">
                <h2 id="monthHeader" className="curly">May</h2>
                <div id="eventList" className="container">
                    <div className="lineup">
                        <div className="dateName">Friday</div>
                        <div className="date">05/15/20</div>
                        <div className="artist">Flip Mode</div>
                    </div>
                    <div className="lineup">
                        <div className="dateName">Saturday</div>
                        <div className="date">05/16/20</div>
                        <div className="artist">Miguel Rios</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Calendar