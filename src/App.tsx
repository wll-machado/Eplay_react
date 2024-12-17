import './App.css'
import { Provider } from 'react-redux'
import { GlobalCss, Container } from './styles'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import Footer from './components/Footer'
import store from './store'
import Cart from './components/Cart'


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Header />
        <Rotas/>
        <Footer/>
        <Cart/>
      </Container>
    </BrowserRouter>
    </Provider>
  )
}

export default App
