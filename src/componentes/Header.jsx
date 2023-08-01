import React from "react";
import Typography from "@mui/material/Typography";
import {Container, Box } from "@mui/material";
import Navbar from "./navbar/navbar";

const Header = () => {
    const navArrayLinks = [
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
            <Container sx={{pt: 3}}>
                <Box>
                    <Typography variant="h4" component='h1' >PORTFOLIO</Typography>
                </Box>

                <Box sx={{mt: 1}}>
                    <Typography  component='h1'>
                        Portfolio de desarrollos en React JS consumiendo API REST.
                    </Typography>
                </Box>

                <Box>
                    <Navbar navArrayLinks={navArrayLinks} />
                </Box>
            </Container>
         </>
    );
}
 
export default Header;