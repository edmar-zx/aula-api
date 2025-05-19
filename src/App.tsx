import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { PokemonDetail } from './pages/PokemonDetails'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    
    </>
   
  )
}

export default App
