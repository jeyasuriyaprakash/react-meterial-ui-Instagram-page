
import { GroupAdd, Home, ContactPage, Message, Logout, Settings, Help, Collections, DarkMode } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch,  } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'



const Sidebar = ({mode,setMode}) =>{
  return (
    <Box  flex={1} p={2}  sx={{ display: {xs: "none", sm: "block"}}} >
    <Box position={"fixed"}>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupAdd />
              </ListItemIcon>
              <ListItemText primary="AddGroup" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContactPage />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Message />
              </ListItemIcon>
              <ListItemText primary="Message" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Collections />
              </ListItemIcon>
              <ListItemText primary="Collections" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Help />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <Switch  onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
       
    </Box>
  );
};


export default Sidebar;
