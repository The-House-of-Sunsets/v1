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
                        <div className="date">05/22/20</div>
                        <div className="artist">DJ 1979 &amp; JBlaze</div>
                    </div>
                    <div className="lineup">
                        <div className="dateName">Saturday</div>
                        <div className="date">05/23/20</div>
                        <div className="artist">Villalobos</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Calendar