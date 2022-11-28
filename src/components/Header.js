import { Instagram, Mail, Notifications } from '@mui/icons-material';
import { Avatar, Badge, InputBase, Typography } from '@mui/material';
import { AppBar, Toolbar, styled } from '@mui/material';
import { Box } from '@mui/system';

import React from 'react';



const StyleToolbar = styled(Toolbar) ({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme}) => ({
  backgroundColor: "white",
  padding: "0 10",
  borderRadius: theme.shape.borderRadius,
  width:"40%",
}));

const Icons = styled(Box)(({ theme}) => ({
display: "flex", alignItems:"center",gap:"20px", 
}));



function Header() {
  return (
    
      <AppBar position="sticky">
        <StyleToolbar>
          <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}> Instagram </Typography>
          <Instagram  sx={{display:{xs:"block", sm:"none"}}} />
        <Search><InputBase placeholder="search..."/> </Search>
     <Icons>
       <Badge badgeContent={4} color="error">
       <Mail  />
       </Badge>
       <Badge badgeContent={4} color="error">
       <Notifications  />
       </Badge>
       <Avatar sx={{width:'30', height:'30'}} src='https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600' />
     </Icons>
        </StyleToolbar>
        
      
       
      </AppBar>
    
  )
}

export default Header
