import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Card from './Card'
import {getBugs} from '../../Controllers/Redux/bugSlice'

function Dashboard() {
    const dispatch = useDispatch()
    const bugs = useSelector(state=>state.bugs)
    
    useEffect(()=>{    
        dispatch(getBugs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[bugs === undefined, dispatch])
    return (
        <div className="page-container">
            <Card Priority="1" count="10" />
            <Card Priority="2" count="10" />
            <Card Priority="3" count="10" />
        </div>
    )
}

export default Dashboard
