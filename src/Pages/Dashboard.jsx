import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Box, Button, Card,  CardBody,  HStack,  IconButton,  Image,  Text, VStack, Wrap } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export const Dashboard = () => {
 const [data, setData]=useState([]);

   useEffect(()=>{
    
    axios.get("https://vast-puce-bunny-tam.cyclic.app/products").then((res)=>{
      setData(res.data)
    }).catch((er)=>{
      console.log(er)
    })
   },[])
  
  return (
<>
    <Text fontSize='6xl' color={"red"}> Welcome to Dashboard</Text>
    <Button
          variant="solid"
          colorScheme="blackAlpha"
          bg="black"
          w="half"
         
        >
          Add Product
        </Button>
   {
    data.map((el)=>{
       return <VStack
      width={{base:"50%",md:"90%"}}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      // border="2px solid red"
      h="450px"
      shadow="0 2px 5px rgb(0 0 0 / 10%)"
      bg={"white"}
      justify="center"
      p={5}
    >
      <Image
        src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAB9CAMAAADjusNjAAAAeFBMVEUtzHD///8TyWYpzG74/fouy3Ehy2vr+PCs5r8+yXoWyWh21pzO79rU8NyJ3qe66c0Axl7k9uqT3q973KHA6tAAxFR02Jo7zHlt1pbL8NdP0IfG7Ndm1ZOx5cVk1o9H0XuX3rfd9eXr9PGH3Kul3r0AvVRf1IdDx3+ZASMpAAAClklEQVR4nO3Uy3LiMBAFULWefltSjBWEbXCcwP//4bQhlZnFzJJkFvdUoZLkNlxMIyEAAAAAAAAAAAAAAAAAAAAAAAAAvoGVzAqhpBKikkpVvHoMkrd4sKri67K6F/P1fWVltZfv0/uCbxSfb/TkuPWxbfvXStZtLariaPKpnSozN1EubZvEeWjH1yZa0x+Tsl0zpb6Jlbw0Bd9btBdrhF3mNczp2jTtepFPzltFantHRbVRVD6QmYh6nzUNviOKch+U0+UrzVbImcazo+ClptWopInOSkXSzbFJr+Sa9ul5ZaRRngMt97yrNrV2QcY3fTxctD7J4Y0Kv1E361Lx86f65gLZTC6cq5HeqZNZu2wrYyd691aY5+d9sfJCsfvM2+leX8P81h7e3eASXaiQanU6ei7mvJmvd8XaurMfXKajjxT9snXlQqEf6mc38J5X8bDntTJoEfWmo65dOPRuo40W7gy1UTDmkXehuPbtPOicXJtXZy+0HQqibiId3PYN/fAiqxNNnNfL4GzU2TlnnPP703WroUaapAf1yDtONM5a517nkXZjzV+Iu39bqDh4+Q39EHNPjck6TBsN1azTTKcPp30T1ErFB7VeXTkvF3P/jiONL6Q/esoFdaaj2QTqMzfURKexHp/dD3w+EOkhqfskZDkQnwXdIZBcnbrQVVKQ6krNPS+fDx0tnk+QmSZHyibtzLXd36Ke9qcd/JPzqpRzNoLT2LTckjWpFPzTq1SashQiKZH4JW7lo7g06cYHmRE8u/GJwTvCqjLnZLi+LPfaZyfmM+jedUapry3B8325j/uuMn8U74XKqq9asd9vzNfqB/z7c81f/lG/q9VPBQYAAAAAAAAAAAAAAAAAAAAAAAD4n/0C8Z4lZQ1e668AAAAASUVORK5CYII="}
        h="200px"
        m="auto"
      
      />

      <Box p="4">
        <Box
          // fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          textAlign="center"
        >
          <Text fontSize="xs"> {'Name'+el.name}</Text>
        </Box>
        
        <Box textAlign="center">
          <Text fontSize="lg" as="b">
            {'₹'+el.price}
          </Text>
        </Box>
      </Box>

      <Box textAlign="center">
        <Text fontSize="md">{el.quantity}</Text>
      </Box>

      <HStack width="90%" alignSelf="center" spacing={5}>
       
        
       
      </HStack>
    </VStack>
    })
   }


</>
 
  )
}
