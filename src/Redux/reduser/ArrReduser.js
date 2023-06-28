import React from 'react'

export default function ArrReduser(state=[],action) {
 switch (action.type) {
    case 'edit-lastname':
        return{
            ...state,
            lastName:action.payload
        }
       
    default:
        return state;
 }
}

const UserArrstate = [
    {
        lastName:'ghazaryan',
        title:'asd'
    },
    {
        lastName:'ghazaryan',
        title:'asd'
    },
    {
        lastName:'ghazaryan',
        title:'asd'
    },
]
export function chanheName(state){
    return state.arruser.lastName
}
