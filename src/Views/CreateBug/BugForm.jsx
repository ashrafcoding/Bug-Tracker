import React, { useState } from 'react'
import './bugForm.css'
import BugModel from '../../Models/bugModel'

function BugForm(props) {
    const [bugObjet, setBugObject] = useState(new BugModel(props.bug))
    function inputChanged(e){
        setBugObject({
            ...bugObjet,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className="bug-create">
            {props.title === "Edit Bug" && <button className="close-btn" onClick={props.close}>Close</button>}
            <h1>{props.title}</h1>
            <form action="">
                <label htmlFor="">Name:</label>
                <input type="text" name="name" placeholder="Bug Name" required onChange={inputChanged} value={bugObjet.name} />
                <label htmlFor="">Details:</label>
                <textarea name="details" id="" cols="10" rows="3" placeholder="Detailed Description on the bug" required onChange={inputChanged} value={bugObjet.details}></textarea>
                <label htmlFor="">Steps:</label>
                <textarea name="steps" id="" cols="10" rows="3" placeholder="Steps to recreate th bug" required onChange={inputChanged} value={bugObjet.steps}></textarea>
                <label htmlFor="">Priority:</label>
                <select name="priority" required id="" onChange={inputChanged} value={bugObjet.priority}>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>
                <label htmlFor="">Assigned:</label>
                <select name="assigned" onChange={inputChanged} value={bugObjet.assigned}>
                    <option value="">AShraf Eid</option>
                    <option value="">John Smith</option>
                </select>
                <label htmlFor="">Application Version:</label>
                <input type="text" name="version" placeholder="application version" onChange={inputChanged} value={bugObjet.version}/>
                <button type="submit">{props.title}</button>
            </form>
            
        </div>
    )
}

export default BugForm
