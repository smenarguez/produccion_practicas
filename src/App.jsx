import './App.css'
import { Container } from '@mui/material'
import Inicio from './paginas/Inicio';
import BuscadorCrypto from './paginas/BuscadorCrypto';
import JuegoDeTronos from './paginas/JuegoDeTronos';
import { Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';

function App() {
  return (
    <>
      <Container sx={{boxShadow: 3, pb: 2, mt: 4}}>
        <Header />

         <Routes>
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/buscador-crypto' element={<BuscadorCrypto />} />
            <Route path='/juego-de-tronos' element={<JuegoDeTronos />} />
         </Routes>
      </Container>
    </>
  )
}

export default App
