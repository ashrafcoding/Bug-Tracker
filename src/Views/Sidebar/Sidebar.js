import React from 'react'
import { Link} from 'react-router-dom'
import './sidebar.css'
import {useDispatch, useSelector} from 'react-redux'
import { signOut } from '../../Controllers/Redux/authSlice'



function Sidebar() {
    const dispatch = useDispatch()
    const{auth} = useSelector(state=>state)
    const logout = e => {
        e.preventDefault()   
        dispatch(signOut())
    }
    return ( 
        <div className='sidebar'>
            <Link className="nav-link" to="/">
            <h1>Bug-Tracker</h1>
            </Link>
            <ul>
                <li><Link to="/" className="nav-link">Dashboard</Link></li>
                <li><Link to="/viewbug" className="nav-link">View Bugs</Link></li>
                {auth.admin && <li><Link to="/create" className="nav-link">Create Bugs</Link></li>}
            </ul>   
            <button className="logout" onClick={logout}>Logout</button>       
        </div> 
    )
}

export default Sidebar
