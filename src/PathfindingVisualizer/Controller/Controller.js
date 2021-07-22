import React from 'react'

const Controller = ({visualizeDijkstra}) => {
    return (
        <div className="controller__container">
            <div className="mode"></div>
            <div className="speed"></div>
            <button onClick={() => visualizeDijkstra()}>START</button>
        </div>
    )
}

export default Controller
