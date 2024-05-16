import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
              <Typography varient="h6">Home</Typography>
              <Button variant="contained">Login</Button>
              <Button variant="contained">
              <Link to='/reg'>Signup</Link>
              </Button>
              <Button variant="contained">
              <Link to='/u'>Click</Link>
              </Button>
              <Button variant="contained">
              <Link to='/v'>View</Link>
              </Button>

            </Toolbar>
            
        </AppBar>
    </div>
  )
}

export default Navbar