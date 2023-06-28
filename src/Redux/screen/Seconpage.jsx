import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Seconpage() {
    
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>{dispatch({type:'edit-name',paylaod:'john'})}}>click</button>
      <button onClick={()=>{dispatch({type:'edit-lastname',payload:'kirakosyan'})}}>click</button>
    </div>
  )
}
