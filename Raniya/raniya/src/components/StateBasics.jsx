import {  Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'


const StateBasics = () => {
  
  var[name,fname]=useState("Raniya")
  var[val,setval]=useState()
  var[sub,setsub]=useState()


  const handleInput=(e)=>{

setval(e.target.value);
  }
  const submitHandler=()=>{
    console.log("clicked")
    setsub(val)
  }
  return (
    <div style={{margin:"90px"}}> 
    <Typography variant='h4'>Welcome to {sub}</Typography>
    <br/>
    <TextField variant="outlined" onChange={handleInput} />
    <Button variant="contained" onClick={submitHandler}>submit</Button>
      
    </div>
  )
}

export default StateBasics