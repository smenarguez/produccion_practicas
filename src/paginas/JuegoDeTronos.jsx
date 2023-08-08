import React, {useState, useEffect}  from "react";
import {Container, Button, Typography, Box, Grid}  from '@mui/material/';
import axios from "axios";

const baseUrl = 'https://thronesapi.com/api/v2/Characters';

const JuegoDeTronos = () => {
    // Setear Hooks
    const  [actores, setActores] = useState([]);
    const [indice, setIndice] = useState(0);

    // LLamada a la API
     useEffect(() => {
        showData();
    }, []);

    // Función para obtener los datos
    const showData = async() => {
        await axios.get(baseUrl).then((response) => {
            setActores(response.data);
            setIndice(0);
        })
    }

    // Obtener un personaje de forma aleatoria, del array actores
    const personajeAleatorio = () => {
        var result = Math.floor((Math.random() * 53));

        setIndice(result);
    }

    //<Container sx={{border: '3', boxShadow: 3, pb: 2, mt: 4}}>

    return ( 
        <>
        
        <Grid container>
            <Grid item>
            <Box sx={{ml: 7}}>
                <Typography
                    variant="h5"
                    component='h5'
                    sx={{mb: 2, mt: 3}}
                >
                    Personajes aleatorios de la serie
                </Typography>

                <Button
                    component='button'
                    variant="contained"
                    onClick={() => personajeAleatorio()}
                    sx={{mb: 2}}
                >
                    Mostrar personaje
                </Button>
            </Box>
            </Grid>
       
            <Grid item  xs={12} sm={12} md={6} xl={4}>
            <Box sx={{ml: 4, mt: 4, mb: 19}}>
    
                {
                    (actores[indice])

                ?

                    <img src={actores[indice].imageUrl}  width='250px'/>

                :

                <p></p>
                }

            </Box>
            </Grid>
        </Grid>
        </>
     );
}
 
export default JuegoDeTronos;