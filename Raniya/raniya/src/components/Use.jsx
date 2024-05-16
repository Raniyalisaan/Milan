import { Button,Typography } from '@mui/material'
import React, { useEffect,useState } from 'react'


const Use = () => {
    var[val,setval]=useState()
    const react=()=>{
        setval("react")
    }
    const angular=()=>{
        setval("angular")
    }
    
    const node=()=>{
        setval("node")
    
    
    }

    useEffect(()=>{
        node();
    },[])
  return (
    <div>
        <br /><br />
        <Typography variant='h3'>Welcome to {val}</Typography>
        <Button variant="contained" onClick={react}>react</Button>
        &nbsp; &nbsp;
        <Button variant="contained" onClick={angular}>angular</Button>
        &nbsp; &nbsp;
        <Button variant="contained" onClick={node}>node</Button>
    </div>
  )
}

export default Use