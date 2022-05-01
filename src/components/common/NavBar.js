import React from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material";

const NavBar = () => {
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {`React To-do App`}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default NavBar;