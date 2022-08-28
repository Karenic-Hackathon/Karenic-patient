import React from 'react'
import '../styles/dashboardOption.css'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openLogin } from '../state/slices/behaviorSlice'
export default function DashboardOption({Icon,text,bgColor,textColor,navigateUrl,isRouting}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleOnclick = ()=>{
      if(isRouting && navigateUrl){
        navigate(navigateUrl)
      }
      else 
       {
        console.log('open login')
         dispatch(openLogin())
       }
    }
  return (
    <div className='dashboardOption'
    style={{
        background:`${bgColor && bgColor}`,
        color:`${textColor && textColor}`
    }}
    onClick={()=>handleOnclick()}
    >  
        {Icon && <Icon fontSize='large'/>}
        <h2>{text && text}</h2>
    </div>
  )
}
