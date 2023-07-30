import React, {useState} from "react";
import NavListDrawer from "../NavListDrawer";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import {Toolbar, ListItemText, ListItemButton, Box} from "@mui/material";
import Button from "@mui/material/Button";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navlinks = [
        {
            title: 'Inicio', path: '/inicio'
        },

        {
            title: 'Buscador Crypto', path: '/buscador-crypto'
        },

        {
            title: 'Consulta de clima', path: '/consulta-de-clima'
        },

        {
            title: 'Juego de tronos', path: '/juego-de-tronos'
        }
    ]

    return ( 
        <>
            <Drawer 
                open={open} 
                anchor="left" 
                onClose={() => setOpen(false)}
                sx={{display: {xs: 'flex', md: 'none'}}}
            >
                <NavListDrawer navlinks={navlinks}/>
            </Drawer>

            <AppBar position='static'>
                <Toolbar>
                    <ListItemButton onClick={() => setOpen(true)} sx={{display: {xs: 'flex', md: 'none'}}}>
                        <ListItemText>Menu de navegación</ListItemText>
                    </ListItemButton> 

                    <Box sx={{display: {xs: 'none', md: 'block'}}}>
                        {
                        navlinks.map(item => (
                                <Button 
                                    component='a' 
                                    href={item.path} 
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