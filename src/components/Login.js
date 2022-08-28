import React, { useState } from 'react'
import '../styles/login.css'
import { useDispatch } from 'react-redux'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {login} from '../state/slices/userSlice'
import { closeLogin } from '../state/slices/behaviorSlice';
export default function Login() {
    const [staffId,setStaffId] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    
    const handleLogin = ()=>{
      //from firebase
      
      //check if the user exist of firebase
      //if exist then take the neccessary data
      //if not return an alert saying they are not part of the system

      //after successful auth
        const userData = {
          id:staffId,
          occupation:'Doctor'
        }
        dispatch(login({...userData}))   
        dispatch(closeLogin())
    }
  return (
    <div className='login'>
        <div className='login-content'>
             <div className='login-top'>
                <h4>Login</h4>             
            </div>
            <form className='login-form'>
            <TextField 
                label='Staff ID'
                fullWidth
                onChange={(e)=>setStaffId(e.target.value)}
                required
                />
                <TextField 
                type={'password'}
                label='Password'
                fullWidth
                onChange={(e)=>password(e.target.value)}
                required
                />
                <Button type='submit' className='loginBtn' onClick={handleLogin}>Login</Button>
                <Button className='loginCancelBtn' 
                onClick={()=>dispatch(closeLogin())}
                >Cancel</Button>
            </form>
        </div>
    </div>
  )
}
