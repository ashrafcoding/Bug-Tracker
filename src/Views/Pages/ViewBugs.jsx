import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getBugs} from '../../Controllers/Redux/bugSlice'
import BugCard from '../BugCard/BugCard'
import BugView from '../BugView/BugView'

function ViewBugs() {
    const [displayBug, setDisplayBug] = useState({
        name:"",
        isDisplayed: false
    })
    const dispatch = useDispatch()
    const {bugs} = useSelector(state => state)
    
    useEffect(()=>{
        return dispatch(getBugs())
    },[bugs.length, dispatch])


    function bugClicked(name){
        setDisplayBug({
            isDisplayed: !displayBug.isDisplayed,
            name
        })
    }

    return (
        <div className="page-container">
            {bugs.map((bug, key)=>{
               return <BugCard key= {key} bug={bug} clicked={bugClicked} />
            })} 
            {displayBug.isDisplayed && <BugView clicked={bugClicked} bug={bugs.filter(bug=> bug.name === displayBug.name)[0]} />}              
        </div>
    )
}

export default ViewBugs
