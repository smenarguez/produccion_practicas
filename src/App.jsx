import './App.css'
import { Container } from '@mui/material'
import Navbar from './componentes/navbar/navbar'
import Inicio from './paginas/Inicio';
import BuscadorCrypto from './paginas/BuscadorCrypto';
import ConsultaClima from './paginas/ConsultaClima';
import JuegoDeTronos from './paginas/JuegoDeTronos';
import { Route, Routes } from 'react-router-dom';

function App() {

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
      <Container sx={{boxShadow: 3, pb: 2, mt: 4}}>
         <Navbar navArrayLinks={navArrayLinks} />

         <Routes>
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/buscador-crypto' element={<BuscadorCrypto />} />
            <Route path='/consulta-de-clima' element={<ConsultaClima />} />
            <Route path='/juego-de-tronos' element={<JuegoDeTronos />} />
         </Routes>
      </Container>
    </>
  )
}

export default App
