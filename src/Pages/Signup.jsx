import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Container, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import axios from "axios";
export const Signup = () => {

  const [data, setData] =useState({});
  

  const handleChange=(e)=>{

      const {id, value}=e.target;
    
      setData({ ...data,
        [id]:value
      })
      
    }



    const handlesubmit=()=>{
    
     console.log(data);
     axios.post("https://vast-puce-bunny-tam.cyclic.app/user/signup",data).then((res)=>{
       if(res){
        alert("Sign up  successfull")
       }
     
     

     }).catch((er)=>{
      console.log(er)
      alert("Error occured")
     })

  
     
    }





  return (
    <div>

<Container>
<Text fontSize={"6xl"} color="green"> Signup</Text>
      </Container>

<Container>


    <FormControl>
      <FormLabel>Enter Your email</FormLabel>
      <Input type='text' onChange={handleChange} id="email"  />
      <FormLabel>Password</FormLabel>
      <Input type='password'  onChange={handleChange} id="password" />
      
      
      <Button type="submit" colorScheme='teal' onClick={handlesubmit} >Signup</Button>
    </FormControl>
    </Container>
     





    </div>
  )
}
