import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Empresa from './components/pages/Empresa'
import Produtos from './components/pages/Produtos'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cabecalho from './components/Cabecalho'

function App() {


  return (
    <Router>
    <Cabecalho />
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route  path="/empresa"  element={<Empresa />} />
            <Route  path="/contato" element={<Contato />} />
            <Route  path="/produtos" element={<Produtos />} />
          </Routes>
    </Router>
    
  )
}

export default App