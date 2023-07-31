import React, {useState} from "react";
import NavListDrawer from "../NavListDrawer";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import {Toolbar, ListItemText, ListItemButton, Box} from "@mui/material";
import Button from "@mui/material/Button";
import { NavLink } from 'react-router-dom';

const Navbar = ({navArrayLinks}) => {
    const [open, setOpen] = useState(false);

    return ( 
        <>
            <Drawer 
                open={open} 
                anchor="left" 
                onClose={() => setOpen(false)}
                sx={{display: {xs: 'flex', md: 'none'}}}
            >
                <NavListDrawer navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen} />
            </Drawer>

            <AppBar position='static'>
                <Toolbar>
                    <ListItemButton onClick={() => setOpen(true)} sx={{display: {xs: 'flex', md: 'none'}}}>
                        <ListItemText>Menu de navegación</ListItemText>
                    </ListItemButton> 

                    <Box sx={{display: {xs: 'none', md: 'block'}}}>
                        {
                        navArrayLinks.map(item => (
                                <Button 
                                    component={NavLink}
                                    to={item.path} 
                                    color='inherit' 
                                    key={item.title}
                                >
                                    {item.title}
                                </Button>
                        ))
                        }
                    </Box>
                   
                </Toolbar>
            </AppBar>
        </>
     );
}
 
export default Navbar;