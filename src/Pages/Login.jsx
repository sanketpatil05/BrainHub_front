import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Container, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux'
import { get_auth } from '../Redux/action'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const [data, setData] =useState({});
  
  const dispatch = useDispatch()
  const navigate=useNavigate();

  const handleChange=(e)=>{


    
      const {id, value}=e.target;
    
      setData({ ...data,
        [id]:value
      })
      
    }

    const handlesubmit=()=>{
    
     //console.log(data);
     axios.post("https://vast-puce-bunny-tam.cyclic.app/user/login",data).then((res)=>{
       
     console.log("data",res)
     
     if(res.data.token){
        
      dispatch(get_auth())
      
      alert("login successfull")
      navigate("/dashboard")
     }
     }).catch((er)=>{
      console.log(er)
      alert("Error occured")
     })

  
     
    }





  return (
    <div>
      
      
    

      <Container>
<Text fontSize={"6xl"} color="green">  Login</Text>
    <FormControl>
      <FormLabel>Enter Your email</FormLabel>
      <Input type='text' onChange={handleChange} id="email"  />
      <FormLabel>Password</FormLabel>
      <Input type='password'  onChange={handleChange} id="password" />
      
      
      <Button type="submit" colorScheme='teal' onClick={handlesubmit} >Login</Button>
    </FormControl>
    </Container>
  
        

     





    </div>
  )
}
