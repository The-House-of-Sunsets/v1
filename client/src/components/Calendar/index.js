import React from 'react'
import './style.css'
const Calendar = () => {
    return (
        <>
            <div id="eventCal" className="">
                <h3 id="monthHeader" className="curly">May</h3>
                <div id="eventList" className="container">
                    <div className="lineup">
                        <div className="date">05/08/20</div>
                        <div className="artist">DGTL CRL</div>
                        <div className="genre">Nextwave</div>
                    </div>
                    <div className="lineup">
                        <div className="date">05/09/20</div>
                        <div className="artist">Don Santino</div>
                        <div className="genre">House</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Calendar