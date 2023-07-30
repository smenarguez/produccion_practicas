import './App.css'
import { Container } from '@mui/material'
import Navbar from './componentes/navbar/navbar'

function App() {

  return (
    <>
      <Container sx={{boxShadow: 3, pb: 2, mt: 4}}>
         <Navbar />
      </Container>
    </>
  )
}

export default App
