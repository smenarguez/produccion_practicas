import React from "react";
import {Box, Typography, Card, CardActionArea, CardMedia, Grid}  from '@mui/material/';
import logo from '../assets/logo.svg';

const Inicio = () => {
    return ( 
        <>
        <Grid container>
        
            <Grid item xs={12} sm={12} md={12}>
                <Typography  component='h1' sx={{ml: 7, mt: 2}}>
                    Se utiliza Material UI para la interfaz, React Router para el enrutamiento y
                    tanto Axios como Fetch para consumir las API.
                </Typography>
            </Grid>

        </Grid>
        
        <Grid container sx={{mb: 2}}>
            <Grid item xs={12} sm={12} md={4} xl={4}>
                <Box sx={{ml: 6, width: 250, mt: 3, pb: 5}}>

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
            </Grid>
                
            <Grid item xs={12} sm={12} md={8} xl={8}>
                <Box>
                    <Typography  sx={{pb:3, pt: 7, ml: 3}}>
                        El código fuente de los desarrollos está disponible en este repositorio de Git Hub:
                    </Typography>

                    <Typography component='a' href='https://github.com/smenarguez/produccion_practicas' sx={{ml: 3}} >
                        Código en Git Hub
                    </Typography>
                </Box>
            </Grid>

        </Grid>
        </>
         
     );
}
 
export default Inicio;