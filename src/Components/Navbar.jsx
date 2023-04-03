import { Text } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'
// creating routes for all the pages
const Navbar = () => {
  return (
    <div>
       <div style={{display:"flex", gap:"42%" , backgroundColor:"black"}}>
   
   <Link to={"/signup"}><div> <Text fontSize={"20px"} color="blue">Signup</Text></div></Link>
     <Link to={"/login"}><div><Text fontSize={"20px"} color="blue">Login</Text></div></Link>
   <Link to={"/dashboard"}><div><Text fontSize={"20px"} color="blue">Dashboard</Text></div></Link>
     </div>
    </div>
  )
}

export default Navbar
