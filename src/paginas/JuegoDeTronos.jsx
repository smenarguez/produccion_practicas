import React, {useState, useEffect}  from "react";
import {Container, Button, Typography, Box}  from '@mui/material/';
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

    return ( 
        <>
        <Container sx={{border: '3', boxShadow: 3, pb: 2, mt: 4}}>

            <Box sx={{ml: 9}}>

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

            <Box sx={{ml: 39}}>
    
                {
                    (actores[indice])

                ?

                    <img src={actores[indice].imageUrl}  width='250px'/>

                :

                <p></p>
                }

            </Box>
       </Container>
        </>
     );
}
 
export default JuegoDeTronos;