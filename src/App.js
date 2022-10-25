import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Empresa from './components/pages/Empresa'
import Produtos from './components/pages/Produtos'
import Cadastre from './components/pages/Cadastre'
import Navbar from './components/Navbar'
import Footer from './components/pages/Footer'
import Cabecalho from './components/Cabecalho'

function App() {


  return (
    <Router>
      <Cabecalho />
          <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route  path="/produtos" element={<Produtos />} />
              <Route  path="/empresa"  element={<Empresa />} />
              <Route  path="/contato" element={<Contato />} />
              <Route  path="/cadastre" element={<Cadastre />} />
            </Routes>
      <Footer />
    </Router>
    
  )
}

export default App