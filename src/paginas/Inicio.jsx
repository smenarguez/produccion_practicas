import React from "react";
import {Container, Box, Typography, Card, CardActionArea, CardMedia}  from '@mui/material/';
import logo from '../assets/logo.svg';

const Inicio = () => {
    return ( 
        <Container>
             <Typography  component='h1' sx={{ml: 4}}>
                Se utiliza Material UI para la interfaz, React Router para el enrutamiento y
                tanto Axios como Fetch para consumir las API.
            </Typography>

            <Box sx={{display: 'flex'}}>
  
                <Box sx={{ml:9, width: 250, mt: 3, pb: 5}}>

                    <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        image={logo}
                        className="App-logo" 
                        alt="Card Image"
                        />
                    </CardActionArea>
                    </Card>

                </Box>

                <Box>
                    <Typography  sx={{pb:3, pt: 7, ml: 3}}>
                        El código fuente de los desarrollos está disponible en este repositorio de Git Hub:
                    </Typography>

                    <Typography component='a' href='#' sx={{ml: 30}} align='center' >
                        Código en Git Hub
                    </Typography>
                </Box>

            </Box>
        </Container>
     );
}
 
export default Inicio;