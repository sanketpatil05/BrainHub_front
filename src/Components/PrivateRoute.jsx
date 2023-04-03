import React from 'react'
import { useSelector } from 'react-redux'
import { Login } from '../Pages/Login';
export const PrivateRoute = ({children}) => {


    const auth=useSelector((store)=>store.auth);
    console.log(auth)

    if(auth){
        return (children)
    }


  return (
    <Login/>
  )
}
