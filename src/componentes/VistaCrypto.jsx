import React, {useState} from 'react';
import {Paper, Button, InputLabel, Input, Typography, Alert, Box, Grid}  from '@mui/material/';
import { Table, TableHead, TableCell, TableBody, TableRow, TableContainer, FormControl, Collapse } from '@mui/material';

const VistaCrypto = ({cryptos}) => {
    const [search, setSearch] = useState('');
    const [resultados, setResultados] = useState([]);
    const [open, setOpen] = useState(false);

    // Función de búsqueda
    const handleSearch = (e) => {
        e.preventDefault();

        setSearch(e.target.value);
    };
    
    // Filtrar los datos
    const filtrar = (search) => {
        var resultadoBusqueda = cryptos.filter((elemento) => {

            if(elemento.name.toString().toLowerCase().includes(search.toLowerCase()))
            {
                return elemento;
            }
        })
        
        setResultados(resultadoBusqueda);

         if(resultadoBusqueda == ''){
                setOpen(true);
        }
    }

    
    const handleButton = () => {
        filtrar(search);
    }

    return ( 
        <Grid container>

            <Grid item>
                <Box>
                    <Typography
                        variant="h5"
                        component='h5'
                        sx={{mb: 2, mt: 1, ml: 7}}
                    >
                        Buscador de criptomonedas
                    </Typography>
                </Box>
            </Grid>

            <Grid item>
                <Box>
                <FormControl>
                    <InputLabel htmlFor="my-input" sx={{width: 300}}></InputLabel>
                        <Input 
                            id="my-input" 
                            type="text"
                            sx={{border: 1, ml: 9}}
                            onChange={(e) => handleSearch(e)}
                            value={search}
                        />

                        <Button variant="contained" onClick={() => handleButton()} sx={{ml:9, mt:2, mb: 3}}>
                            Buscar
                        </Button>

                        <Box sx={{ml:9, mb: 3}}>
                            <Collapse in={open} >
                                <Alert
                                    severity="error"
                                    onClose={() => {
                                            setOpen(false);
                                    }}
                                >
                                        La crypto no está en esta tabla.
                                </Alert>
                            </Collapse>
                        </Box>
                    </FormControl>
                </Box>   
            </Grid>

            <Grid item xs={12}>
                <Box>
                <TableContainer component={Paper} sx={{width: 700, ml: 30}} >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Market_cap_rank</TableCell>
                                <TableCell>Symbol</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Current_Price</TableCell>
                                <TableCell>high_24h</TableCell>
                            </TableRow>
                        </TableHead>

                        { 
                            (!search)
                            
                            ?
                                <TableBody>
                                    {
                                        cryptos.map((crypto, key={crypto: id}) => (
                                            <TableRow key={key}>
                                                <TableCell>{crypto.market_cap_rank}</TableCell>
                                                <TableCell>{crypto.symbol}</TableCell>
                                                <TableCell>{crypto.name}</TableCell>
                                                <TableCell>{ <img src={crypto.image} width='50px'/>}</TableCell>
                                                <TableCell>{crypto.current_price}</TableCell>
                                                <TableCell>{crypto.high_24h}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            :
                                <TableBody>
                                    {
                                        resultados.map((resultado, key={resultado: id}) => (
                                            <TableRow key={key}>
                                                <TableCell>{resultado.market_cap_rank}</TableCell>
                                                <TableCell>{resultado.symbol}</TableCell>
                                                <TableCell>{resultado.name}</TableCell>
                                                <TableCell>{ <img src={resultado.image} width='50px'/>}</TableCell>
                                                <TableCell>{resultado.current_price}</TableCell>
                                                <TableCell>{resultado.high_24h}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                        }

                    </Table>
                </TableContainer>
                </Box>
            </Grid>
        
        </Grid>
     );
}
 
export default VistaCrypto;