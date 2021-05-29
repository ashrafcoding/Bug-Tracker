import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {signIn} from '../../Controllers/Redux/authSlice'
import './login.css'

function Login() {
    const dispatch = useDispatch()
    const [formInput, setFormInput] = useState({
        name:"",
        password:"",
    })

    const inputChanged = (e)=>{
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        })
    }
 
    const submit = (e)=>{
        e.preventDefault()
        dispatch(signIn(formInput))
    }
    return (
        <div className="loginBG">       
            <form action="" className="login-panel">
                <h1>LOGIN:</h1>
                <input type="text" name="name" placeholder="Name" onChange={inputChanged} value={formInput.name} />
                <input type="password" name="password" placeholder="Password" onChange={inputChanged} value={formInput.password} />
                <button type="submit" onClick={submit}>Login</button>
            </form>            
        </div>
    )
}

export default Login
