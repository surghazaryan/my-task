import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { chanheName } from '../reduser/ArrReduser';


export default function Mainpage() {
    const name = useSelector(function(state){
        return state.main.user.name
    })

    const arr = useSelector(chanheName)
    
  return (
    <div>
      {name}
      {arr}
    </div>
  )
}
