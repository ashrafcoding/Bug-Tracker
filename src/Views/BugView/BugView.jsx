import React, {useState} from 'react'
import './bugView.css'
import ViewSection from './BugViewSection'
import BugModel from '../../Models/bugModel'
import {useDispatch} from 'react-redux'
import {markComplete} from '../../Controllers/Redux/bugSlice'
import EditPanel from '../EditDelete/EditPanel'
import EditBug from '../CreateBug/BugForm'


function BugView(props) {
    const dispatch = useDispatch()
    const bug = new BugModel(props.bug)
    const [displayEdit, setDisplayEdit] = useState(false)
    function editClicked(){
        setDisplayEdit(!displayEdit)
    }
    function deleteClicked(){}
    return (
        <>
        <div className="bug-view">
            <EditPanel editClicked={editClicked} deleteClicked={deleteClicked}/>
            <button className="close-btn" onClick={props.clicked}>Close</button>
            <h1>{bug.name}</h1>
            <ViewSection title='Details' info={bug.details}/>        
            <ViewSection title='steps' info={bug.steps}/>        
            <ViewSection title='priority' info={bug.priority}/>        
            <ViewSection title='creator' info={bug.creator}/>        
            <ViewSection title='App Version' info={bug.version}/>        
            <ViewSection title='Time Created' info={bug.time}/>   
            <button onClick= {()=>dispatch(markComplete())}>Mark Complete</button>     
        </div>
        {displayEdit && <EditBug title="Edit Bug" bug={bug} close={editClicked} />}
        </>
    )
}

export default BugView
