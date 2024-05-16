import { Button,TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <br></br><br></br>
        <TextField id="outlined-basic" label="User name" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="Phone number" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="Email" variant="outlined" /><br /><br />
        <TextField id="outlined-password-input"label="Password" type="password" autoComplete="current-password" /><br /><br />
        <Button variant="contained">Signup</Button>
    </div>
  )
}

export default Register