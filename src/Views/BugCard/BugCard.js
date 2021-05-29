import React from 'react'
import priorityController from '../../Controllers/priorityController'
import './bugCard.css'

function BugCard(props) {
    const {name, priority, version}= props.bug
    const {level, color} = priorityController(priority)
    function Clicked(){
        props.clicked(name)
    }
    return (
        <div className="bug-card" onClick={Clicked} style={{color:color}}>
            <h2 className="name">{name}</h2>
            <h4 className="priority">{level}</h4>
            <h5 className="version">{version}</h5>
        </div>
    )
}

export default BugCard
