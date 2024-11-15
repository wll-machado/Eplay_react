import './App.css'
import { GlobalCss, Container } from './styles'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Header />
        <Rotas/>
        <Footer/>
      </Container>
    </BrowserRouter>
  )
}

export default App
